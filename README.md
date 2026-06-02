# URL Shortener

A URL Shortener application built with Node.js to create and manage shortened URLs.

## 🚀 Project Goal

The primary purpose of this project was to learn and practice backend development concepts in Node.js, including:

* Routing in Express.js
* Authentication and Authorization
* Middleware
* JWT (JSON Web Tokens)
* Cookies and Sessions
* MongoDB Integration
* RESTful APIs

This project was created as a learning-focused application to strengthen my understanding of how modern backend systems work.

## ✨ Features

* User Registration and Login
* Authentication using JWT
* Cookie-based session handling
* Protected Routes using Middleware
* Create Short URLs
* Redirect users using generated short URLs
* Store URL data in MongoDB
* User-specific URL management

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* Cookies

### Other Tools

* dotenv
* cookie-parser
* uuid (if used)

## 📂 Project Structure

```text
project/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── services/
├── views/
├── public/
├── .env
├── app.js
├── package.json
└── README.md
```

## 🔐 Authentication Flow

1. User registers or logs in.
2. Server generates a JWT token.
3. Token is stored in cookies.
4. Middleware verifies the token on protected routes.
5. Authorized users can access URL management features.

## 📖 What I Learned

Through this project, I gained hands-on experience with:

* Building REST APIs using Express.js
* Creating and managing routes
* Implementing authentication and authorization
* Working with JWT tokens
* Handling cookies and sessions
* Writing custom middleware
* Connecting Node.js applications with MongoDB
* Structuring scalable backend applications

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Ankush8171/Url_Shortener.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add the required environment variables.

Start the server:

```bash
npm start
```

## 👨‍💻 Author

**Ankush Chauhan**

* LinkedIn: https://www.linkedin.com/in/ankush-chauhan-1b6b6525a/
* Portfolio: https://ankush-portfolio-2yiv.onrender.com/

## 📌 Future Improvements

* Custom short URLs
* Analytics Dashboard
* QR Code Generation
* URL Expiration
* Rate Limiting
* Password Protected URLs
