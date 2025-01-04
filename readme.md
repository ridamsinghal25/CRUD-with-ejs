# CRUD Application Using EJS

This is a simple CRUD (Create, Read, Update, Delete) application built with **Node.js**, **Express.js**, and **EJS** templating engine. The application allows you to manage a list of users, including creating, editing, and deleting user data.

## Features

- Display all users on the home page.
- Create a new user with a username, email, phone number, and password.
- Edit existing user details.
- Delete a user.
- Rendered views with **EJS**.

---

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v14+ recommended)
- **npm** (Node Package Manager)
- **MongoDB** (local or cloud-based)

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your database connection in your project (usually in a .env file):

   ```bash
   MONGO_URI=<your-mongodb-connection-string>
   PORT=<your-port-number>
   ```

4. Start the application:

   ```bash
   npm run dev
   ```

---

# Routes

### 1. **Home Page** - Display All Users

- **Route:** `GET /`
- **Description:** Fetches all users from the database and displays them on the home page.

### 2. **Create User Page**

- **Route:** `GET /create-user`
- **Description:** Displays the form for creating a new user.

### 3. **Create New User**

- **Route:** `POST /create-user`
- **Description:** Adds a new user to the database.
- **Body Parameters:**
  - `username` - The user's name.
  - `email` - The user's email.
  - `phoneNumber` - The user's phone number.
  - `password` - The user's password.

### 4. **Edit User Page**

- **Route:** `GET /edit/:id`
- **Description:** Displays the form pre-filled with an existing user's data for editing.

### 5. **Edit User**

- **Route:** `POST /edit-user/:id`
- **Description:** Updates an existing user's information in the database.
- **Body Parameters:**
  - `username` - The user's name.
  - `email` - The user's email.
  - `phoneNumber` - The user's phone number.
  - `password` - The user's password.

### 6. **Delete User**

- **Route:** `GET /delete-user/:id`
- **Description:** Deletes an existing user from the database.

---

# Views

The application uses **EJS** for rendering views:

1. **Home Page (`index.ejs`)**: Displays a list of all users.
2. **Create User Page (`create_user.ejs`)**: Form for adding a new user.
3. **Edit User Page (`edit_user.ejs`)**: Form for updating an existing user's data.
4. **Layout (`layout`)**: Shared layout for rendering the header.

## License

This project is licensed under the [MIT License](LICENSE).
