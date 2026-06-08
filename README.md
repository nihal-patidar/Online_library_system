# 📚 Online Library System

A modern React + Redux based Online Library System that allows users to browse books, view detailed information, search by category, and add new books to the collection.

---

## 🚀 Project Introduction

Online Library System is a simple and interactive book management application built using:

- React
- Redux Toolkit
- React Router
- Vite
- CSS

The application provides an easy way to explore books across multiple categories, view detailed book information, and add new books dynamically.

---

## ✨ Features

### 🏠 Home Page
- Displays featured book categories
- Quick navigation to category pages
- Responsive design

### 📚 Browse Books
- View all available books
- Filter books by category
- Search books by title

### 📖 Book Details
- View complete information about a selected book
- Author details
- Rating
- Description
- ISBN
- Publisher information

### ➕ Add New Book
- Add books dynamically
- Form validation
- Automatically generates:
  - Unique ID
  - ISBN
  - Book Cover Image
  - Publication Year

### 🔍 Search Functionality
- Search books by title
- Real-time filtering

### ⚠️ Error Handling
- Custom Error Page
- Route-based error handling using React Router

### 📱 Responsive Design
- Works on Desktop
- Tablet Friendly
- Mobile Responsive

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| React | UI Development |
| Redux Toolkit | State Management |
| React Router | Routing |
| Vite | Build Tool |
| CSS | Styling |

---

# ⚙️ Project Setup Using Vite

## Create New Vite Project

```bash
npm create vite@latest online-library-system
```

Select:

```bash
React
JavaScript
```

Move into project folder:

```bash
cd online-library-system
```

Install dependencies:

```bash
npm install
```

Install additional packages:

```bash
npm install react-router-dom
npm install @reduxjs/toolkit react-redux
```

Start development server:

```bash
npm run dev
```

---

# 📥 Clone & Run Project

## Clone Repository

```bash
git clone https://github.com/nihal-patidar/Online_library_system.git
```

Move into project:

```bash
cd Online_library_system
```

Install dependencies:

```bash
npm install
```

Run project:

```bash
npm run dev
```

Open browser:

```text
http://localhost:5173
```

---

# 🌐 Application Routes

| Route | Description |
|---------|-------------|
| `/` | Home Page |
| `/books` | Browse All Books |
| `/books/:category` | Browse Books By Category |
| `/book/:id` | View Book Details |
| `/add-book` | Add New Book |

---

## Route Configuration

```jsx
{
  path: "/",
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/books",
      element: <BrowseBooks />
    },
    {
      path: "/books/:category",
      element: <BrowseBooks />
    },
    {
      path: "/book/:id",
      element: <BookDetails />
    },
    {
      path: "/add-book",
      element: <AddBook />
    }
  ]
},
{
  path: "*",
  element: <ErrorPage />
}
```

---

# 📁 Project Structure

```text
online-library-system
│
├── public
│   ├── favicon.png
│   ├── favicon.svg
│   └── icons.svg
│
├── src
│   │
│   ├── app
│   │   └── store.js
│   │
│   ├── assets
│   │
│   ├── components
│   │   ├── BookCard.jsx
│   │   ├── CategorySection.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── data
│   │   └── booksData.js
│   │
│   ├── pages
│   │   ├── AddBook.jsx
│   │   ├── BookDetails.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   │
│   ├── redux
│   │   └── bookSlice.js
│   │
│   ├── router
│   │   └── router.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🎯 Future Improvements

- User Authentication
- Book Wishlist
- Book Ratings & Reviews
- Dark Mode
- Backend Integration
- Database Support
- Admin Dashboard
- Pagination

---

# 👨‍💻 Author

**Nihal Patidar**

Frontend Developer | React Developer

GitHub Repository: https://github.com/nihal-patidar/Online_library_system.git


---
