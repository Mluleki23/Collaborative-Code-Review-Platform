<img src="https://socialify.git.ci/Mluleki23/Collaborative-Code-Review-Platform/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Collaborative-Code-Review-Platform" width="640" height="320" />



---

---

# 🚀 Collaborative Code Review Platform

## 📌 Overview

A backend system built with **Node.js** and **TypeScript** for managing projects, submitting code, and collaborating through reviews and comments. It includes secure authentication using JWT and PostgreSQL database integration.

---

## 📖 Features

* 🔐 User authentication (JWT)
* 🔑 Password hashing (bcrypt)
* 📂 Project management
* 💬 Code submissions and comments
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
DB_PASSWORD=Mlule23$@
DB_PORT=5432

JWT_SECRET=ghhgfghjfytj54557yuuygyu

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
│── controllers/    # Logic
│── middleware/     # Auth & errors
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

## 🔐 Authorization (IMPORTANT)

For all protected routes, add header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 3️⃣ Create Project

**POST** `/api/projects`

```json
{
  "title": "Code Review System",
  "description": "Platform for reviewing code"
}
```

Response:

```json
{
  "id": 1,
  "title": "Code Review System"
}
```

---

## 4️⃣ Get All Projects

**GET** `/api/projects`

Response:

```json
[
  {
    "id": 1,
    "title": "Code Review System",
    "description": "Platform for reviewing code"
  }
]
```

---

## 5️⃣ Submit Code

**POST** `/api/submissions`

```json
{
  "projectId": 1,
  "code": "console.log('Hello World');"
}
```

Response:

```json
{
  "id": 1,
  "projectId": 1,
  "code": "console.log('Hello World');"
}
```

---

## 6️⃣ Add Comment (Code Review)

**POST** `/api/comments`

```json
{
  "submissionId": 1,
  "comment": "Good code, but improve naming."
}
```

Response:

```json
{
  "id": 1,
  "comment": "Good code, but improve naming."
}
```

---

## 7️⃣ Get Users (Optional)

**GET** `/api/users`

---

## ❗ Error Handling

* 401 → Unauthorized (invalid/missing token)
* 404 → Route not found
* 500 → Server/Database error

---

## 🧪 Testing Tips

* Always **register or login first**
* Copy the JWT token
* Add token to headers
* Use correct IDs (projectId, submissionId)

---

## 👨‍💻 Author

Mluleki Moloi

---

