# 📚 BookNest

BookNest is a modern book catalog web application built with **Next.js (App Router)**.
It allows users to explore books, view detailed information, and manage book collections through authentication.

The project focuses on **clean UI design, responsive layout, and protected routes using NextAuth.js**.

---

# 🌐 Live Demo

🔗 **Live Website**
https://booknest-psi-gilt.vercel.app/

🔗 **GitHub Repository**
https://github.com/mhmasum1/booknest

---

# ✨ Key Features

* Modern responsive UI with Tailwind CSS
* Authentication using **NextAuth.js**
* Google login and credentials login
* Browse books by category
* Search books functionality
* Detailed book information page
* Add new books (Protected route)
* Manage books (View & Delete)
* Dynamic category filtering
* Card-based UI with hover effects
* Fully responsive layout (Mobile + Desktop)

---

# 🧰 Technologies Used

* **Next.js (App Router)**
* **React**
* **NextAuth.js**
* **MongoDB**
* **Tailwind CSS**
* **Vercel** (Deployment)

---

# 🚀 Setup & Installation

Follow the steps below to run this project locally.

## 1️⃣ Clone the repository

```bash
git clone https://github.com/mhmasum1/booknest.git
```

## 2️⃣ Navigate into the project folder

```bash
cd booknest
```

## 3️⃣ Install dependencies

```bash
npm install
```

## 4️⃣ Configure environment variables

Create a `.env.local` file in the root directory and add the following:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 5️⃣ Run the development server

```bash
npm run dev
```

Then open the application in your browser:

```
http://localhost:3000
```

---

# 📍 Route Summary

| Route              | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `/`                | Landing page with hero section, featured books, categories, testimonials |
| `/books`           | View all books with search and category filter                           |
| `/books/[id]`      | Detailed page for a specific book                                        |
| `/login`           | Login page with Google and credentials authentication                    |
| `/register`        | User registration page                                                   |
| `/add-product`     | Add a new book (Protected route)                                         |
| `/manage-products` | Manage existing books (Protected route)                                  |

---

# 🔐 Protected Pages

The following routes require authentication:

* `/add-product` → Add a new book
* `/manage-products` → View and manage books

Users must log in before accessing these pages.

---

# 🏠 Landing Page Sections

The homepage includes the following sections:

1. **Navbar**

   * Logo
   * Navigation routes
   * Login / Register
   * User dropdown after login
   * Responsive hamburger menu

2. **Hero Section**

   * Main headline
   * Short subtitle
   * Clean layout

3. **Featured Books**

   * Popular books displayed in cards

4. **Browse Categories**

   * Categories like Fiction, Programming, Self-help, Business, Finance
   * Clicking a category navigates to filtered books

5. **Why Choose Us**

   * Feature highlights of the platform

6. **Testimonials**

   * Reader reviews and feedback

7. **Footer**

   * Website info
   * Copyright

---

# 📦 Project Structure (Simplified)

```
app
 ├── page.js
 ├── books
 │   ├── page.js
 │   └── [id]
 ├── login
 ├── register
 ├── add-product
 └── manage-products

components
 ├── Navbar.jsx
 ├── Footer.jsx
 ├── Hero.jsx
 ├── BookCard.jsx
 ├── FeaturedBooks.jsx
 ├── Categories.jsx
 ├── Testimonials.jsx
 └── WhyChooseUs.jsx
```

---

# 📌 Future Improvements

Possible enhancements for future versions:

* Book rating and review system
* Pagination for books
* User profile page
* Admin dashboard
* Wishlist functionality
* Image upload instead of URL

---

# 👨‍💻 Author

**Masum**

GitHub:
https://github.com/mhmasum1
