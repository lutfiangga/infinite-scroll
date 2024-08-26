import { useState, useEffect } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [lastId, setLastId] = useState(0)
  const [tempId, setTempId] = useState(0)
  const [limit, setLimit] = useState(20)
  const [keyword, setKeyword] = useState('')
  const [query, setQuery] = useState('')
  const [hasMore, setHasMore] = useState(true)

  const apiUrl = import.meta.env.VITE_PRIVATE_API_URL

  useEffect(() => {
    getUsers()
  }, [lastId, keyword])

  useEffect(()=>{
    if(query === ''){
        setKeyword('')
        setLastId(0)
    }
  },[query])

  const getUsers = async () => {
    const response = await axios.get(
      `${apiUrl}/users?search_query=${keyword}&lastId=${lastId}&limit=${limit}`
    )

    const newUsers = response.data.result
    setUsers([...users, ...newUsers])
    setTempId(response.data.lastId)
    setHasMore(response.data.hasMore)
  }

  const fetchMore = () => {
    setLastId(tempId)
  }

  const searchData = e => {
    e.preventDefault()
    setLastId(0)
    setUsers([]) // Menggunakan array kosong daripada string kosong
    setKeyword(query)
  }

  return (
    <div>
      <div className='container mx-auto p-4'>
        <h2 className='text-2xl font-semibold text-center mb-4'>User List</h2>
        <div className='flex justify-between mb-4'>
          <div className='flex justify-start'>
            <button className='px-4 py-2 bg-gray-500 text-white rounded-md'>
              Add User
            </button>
          </div>
          <div className='flex justify-end'>
            <form onSubmit={searchData} className='flex flex-row gap-2'>
              <input
                type='search'
                value={query}
                onChange={e => setQuery(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='Search by name'
              />
              <button
                type='submit'
                className='w-1/2 p-2 bg-blue-500 text-white rounded'
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <InfiniteScroll
            dataLength={users.length}
            next={fetchMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <table className='min-w-full bg-white border'>
              <thead>
                <tr>
                  <th className='py-2 px-4 bg-gray-200 border-b'>#</th>
                  <th className='py-2 px-4 bg-gray-200 border-b'>Name</th>
                  <th className='py-2 px-4 bg-gray-200 border-b'>Email</th>
                  <th className='py-2 px-4 bg-gray-200 border-b'>Gender</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan='4' className='py-2 px-4 border-b text-center'>
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr key={user.id} className='hover:bg-gray-100'>
                      <td className='py-2 px-4 border-b text-center'>
                        {index + 1}
                      </td>
                      <td className='py-2 px-4 border-b'>{user.name}</td>
                      <td className='py-2 px-4 border-b'>{user.email}</td>
                      <td className='py-2 px-4 border-b'>{user.gender}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  )
}

export default UserList
