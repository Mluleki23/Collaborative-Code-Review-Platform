<img src="https://socialify.git.ci/Mluleki23/Collaborative-Code-Review-Platform/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Collaborative-Code-Review-Platform" width="640" height="320" />



Got it — you want this cleaned into **ONE proper README file (no duplication, no repeated sections, no broken formatting)**.

Here is your **final merged and cleaned version** 👇

---

# 🚀 Collaborative Code Review Platform

![Collaborative Code Review Platform](https://socialify.git.ci/Mluleki23/Collaborative-Code-Review-Platform/image?language=1\&owner=1\&name=1\&stargazers=1\&theme=Light)

## 📌 Overview

A backend system built with **Node.js** and **TypeScript** for managing users, projects, code submissions, and reviews. It uses JWT authentication and PostgreSQL for data storage.

---

## 📖 Features

* 🔐 User authentication (JWT)
* 🔑 Password hashing (bcrypt)
* 👤 User management (CRUD)
* 📂 Project management (CRUD)
* 💬 Code submissions & comments (CRUD)
* 🌐 RESTful API (Express)
* 🗄️ PostgreSQL database

---

## 🛠️ Tech Stack

Node.js • TypeScript • Express • PostgreSQL • JWT • bcrypt

---

## ⚙️ Installation

```bash
git clone https://github.com/Mluleki23/Collaborative-Code-Review-Platform.git
cd Collaborative-Code-Review-Platform
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file:

```
PORT=4040

DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=code_review_platform
DB_PASSWORD=your_password
DB_PORT=5432

JWT_SECRET=your_secret_key
```

---

## ▶️ Run Application

```bash
npm run dev
```

App runs on:

```
http://localhost:4040
```

---

## 📂 Project Structure

```
src/
│── config/         # Database config
│── routes/         # API routes
│── controllers/    # Business logic
│── middleware/     # Auth & error handling
│── views/          # HTML
│── public/         # Static files
│── app.ts          # Entry point
```

---

# 🧪 FULL API TEST FLOW (START → END)

Use Postman or Thunder Client

---

## 1️⃣ Register User

**POST** `/api/auth/register`

```json
{
  "name": "Mluleki",
  "email": "mluleki@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "success": true,
  "token": "YOUR_JWT_TOKEN"
}
```

---

## 2️⃣ Login User

**POST** `/api/auth/login`

```json
{
  "email": "mluleki@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "success": true,
  "token": "YOUR_JWT_TOKEN"
}
```

---

## 🔐 Authorization

For protected routes, include:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 👤 USER CRUD

## 📥 Get All Users

**GET** `/api/users`

## 📄 Get Single User

**GET** `/api/users/:id`

Example:

```
/api/users/1
```

## ✏️ Update User

**PUT** `/api/users/:id`

```json
{
  "name": "Updated Name",
  "email": "updated@gmail.com"
}
```

## ❌ Delete User

**DELETE** `/api/users/:id`

---

# 📂 PROJECT CRUD

## ➕ Create Project

**POST** `/api/projects`

```json
{
  "title": "Code Review System",
  "description": "Platform for reviewing code"
}
```

## 📥 Get All Projects

**GET** `/api/projects`

## 📄 Get Single Project

**GET** `/api/projects/:id`

## ✏️ Update Project

**PUT** `/api/projects/:id`

```json
{
  "title": "Updated Project",
  "description": "Updated description"
}
```

## ❌ Delete Project

**DELETE** `/api/projects/:id`

---

# 💻 SUBMISSION CRUD

## ➕ Submit Code

**POST** `/api/submissions`

```json
{
  "projectId": 1,
  "code": "console.log('Hello World');"
}
```

## 📥 Get All Submissions

**GET** `/api/submissions`

## 📄 Get Single Submission

**GET** `/api/submissions/:id`

## ✏️ Update Submission

**PUT** `/api/submissions/:id`

```json
{
  "code": "console.log('Updated Code');"
}
```

## ❌ Delete Submission

**DELETE** `/api/submissions/:id`

---

# 💬 COMMENTS CRUD

## ➕ Add Comment

**POST** `/api/comments`

```json
{
  "submissionId": 1,
  "comment": "Good job, improve naming."
}
```

## 📥 Get Comments

**GET** `/api/comments`

## ✏️ Update Comment

**PUT** `/api/comments/:id`

```json
{
  "comment": "Updated review comment"
}
```

## ❌ Delete Comment

**DELETE** `/api/comments/:id`

---

## ❗ Error Handling

| Code | Meaning      |
| ---- | ------------ |
| 401  | Unauthorized |
| 404  | Not Found    |
| 500  | Server Error |

---

## 🧪 Testing Tips

* Always register/login first
* Copy JWT token
* Add token in headers
* Use correct IDs
* Test endpoints step by step

---

## 👨‍💻 Author

Mluleki Moloi

---

## 📄 License

MIT License

---

If you want next, I can help you:

* Add **badges (build, license, npm, etc.)**
* Add **Swagger API documentation**
* Add **Postman collection file**
* Or make this README look **very professional for GitHub portfolio (recruiter-ready)**

