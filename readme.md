
# React.js Infinite Scroll User List

This project is a React.js application that implements an infinite scroll feature for displaying a list of users. The data is fetched from an API, and users can search through the list. The application automatically loads more users as you scroll down.

## Features

- **Infinite Scroll:** Automatically loads more users when scrolling down.
- **Search Functionality:** Users can search for specific names in the user list.
- **Responsive Design:** The application is responsive and works well on different screen sizes.
- **API Integration:** Fetches user data from a backend API.

## Technologies Used

- **Frontend:**
  - React.js
  - Axios (for HTTP requests)
  - Tailwind CSS (for styling)

- **Backend:**
  - Node.js
  - Express.js
  - MySQL

## Prerequisites

- Node.js and npm installed on your machine
- MySQL installed and running on your machine

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/lutfiangga/infinite-scroll.git
cd infinite-scroll
```

### 2. Backend Setup

 #### 1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

 #### 2. Install the dependencies:

   ```bash
   npm install
   ```

 #### 3. Create a `.env` file in the `backend` directory and add your MySQL connection string:

   ```bash
   SERVER_PORT=your_server_port
   DB_NAME=your_database
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_HOST=your_hostname
   DB_PORT=your_mysql_port
   DB_DIALECT=mysql
   ```

 #### 4. Start the backend server:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`.

### 3. Frontend Setup

 #### 1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

 #### 2. Install the dependencies:

   ```bash
   npm install
   ```

 #### 3. Create a `.env` file in the `frontend` directory and add the API URL:

   ```bash
   VITE_PRIVATE_API_URL=your_api_url
   ```

 #### 4. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:3000`.

## Project Structure

```
.
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend
    ├── src
    │   ├── components
    │   ├── App.jsx
    │   ├── main.jsx
    ├── .env
    └── package.json
```