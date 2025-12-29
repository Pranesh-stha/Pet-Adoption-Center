
---

# 🐾 Pet Haven – Full-Stack Pet Adoption App

> **My first full-stack project using Vite + React** ✨
> Frontend: **React (Vite)**
> Backend: **Express.js**
> Database: **PostgreSQL**

Pet Haven is a complete **pet adoption web application** where:

* **Admins** can log in and add pets
* **Users** can register, log in, and adopt pets
* Each user sees **only their own adopted pets**
* User credentials are **securely hashed and salted**

This project was built as a learning milestone to understand **full-stack development**, authentication, database relations, and real-world app flow.

---

## ✨ Features

### 👤 Authentication

* User **registration & login**
* Passwords are **hashed + salted using bcrypt**
* Secure login verification (no plain-text passwords)

### 🐶 Pets

* View all available pets
* Each pet includes:

  * Name
  * Type (dog, cat, etc.)
  * Breed
  * Age
  * Age group
  * Size
  * Energy level
  * Badge (e.g. Vaccinated)
  * Image URL

### 🛡 Admin Mode

* Admin login
* Add new pets to the system
* Admin-only **“Add Pet”** access

### ❤️ Adoption System

* Logged-in users can adopt pets
* Adoption is saved in the database
* Each user has a **My Adoptions** page
* A pet cannot be adopted twice

---

## 🧠 Tech Stack

**Frontend**

* React (Vite)
* React Router
* Axios
* CSS (no Tailwind / no UI library)

**Backend**

* Node.js
* Express.js
* PostgreSQL
* bcrypt
* dotenv
* cors

---

## 🗄 Database Structure

Single database: **`petsite`**

### 1️⃣ `users` table

| Column   | Type          |
| -------- | ------------- |
| user_id  | SERIAL (PK)   |
| fullname | TEXT          |
| email    | TEXT          |
| password | TEXT (hashed) |

---

### 2️⃣ `pets` table

| Column   | Type        |
| -------- | ----------- |
| id       | SERIAL (PK) |
| name     | TEXT        |
| type     | TEXT        |
| breed    | TEXT        |
| age      | NUMERIC     |
| agegroup | TEXT        |
| size     | TEXT        |
| energy   | TEXT        |
| badge    | TEXT        |
| img      | TEXT        |

---

### 3️⃣ `adopted_animals` table

| Column     | Type                         |
| ---------- | ---------------------------- |
| adopt_id   | SERIAL (PK)                  |
| pet_id     | INTEGER (FK → pets.id)       |
| user_id    | INTEGER (FK → users.user_id) |
| adopted_at | TIMESTAMP (default NOW)      |

---

## 📁 Project Folder Structure

```
pet-adoption-app/
│
├── backend/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── Header.jsx
│   │   ├── Pets.jsx
│   │   ├── Logincard.jsx
│   │   ├── Addpet.jsx
│   │   ├── Adoption.jsx
│   │   └── home/
│   │       ├── Home.jsx
│   │       ├── Hero.jsx
│   │       ├── Homefilter.jsx
│   │       ├── Homecard.jsx
│   │       ├── About.jsx
│   │       ├── Bottombar.jsx
│   │       └── Footer.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

### 📄 `.env.example`

```env
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=yourDbName
DB_HOST=localhost
DB_PORT=5432
```

> ⚠️ Never commit your real `.env` file to GitHub.

---

## ▶️ How to Run the Project

### 1️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

Server runs at:

```
http://localhost:5000
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔐 Admin Login

For demo purposes, admin login is handled on the frontend.

```text
Email: admin
Password: admin
```

> Admin users can add new pets.

---

## 🎯 Learning Outcomes

This project helped me understand:

* Full-stack app structure
* React state & routing
* Express REST APIs
* PostgreSQL relationships
* Password hashing & salting
* Real-world authentication flow
* Admin vs user access control

---

## 💙 Final Note

This is **my first Vite + React full-stack project**, built for learning and growth.
Feedback, suggestions, and improvements are always welcome! 😊🐕

---

