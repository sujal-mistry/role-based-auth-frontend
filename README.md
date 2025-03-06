# **Role-Based Authentication Frontend**

## **📌 Overview**

This is a **React.js** frontend for role-based authentication, supporting **customer** and **admin** registration, authentication, email verification, and restricted access to admin features.

## **🚀 Features**

✅ **User Registration** (Customer & Admin)  
✅ **Role-Based Access**  
✅ **Email Verification**  
✅ **Admin Login Page (Restricted to Customers)**  
✅ **Protected Routes**

---

## **🛠️ Tech Stack**

- **Frontend:** React.js (Vite)
- **State Management:** React useState (Reducer for complex state management)
- **UI Components:** Material-UI / Tailwind CSS (if used)
- **Routing:** React Router
- **API Requests:** Axios

---

🔹Public Routes

- /register/customer ---- Customer registration form

- /register/admin --- Admin registration form

- /login/admin --- Admin login

---

## **📂 Project Structure**

```
Assignment
├─ .DS_Store
├─ role-based-auth-backend
│  ├─ README.md
│  ├─ config
│  │  └─ default.json
│  ├─ data_access
│  │  └─ user.data_access.js
│  ├─ error_log.log
│  ├─ helper
│  │  ├─ email.js
│  │  ├─ logger.js
│  │  └─ mysql.js
│  ├─ index.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  └─ user.js
│  └─ service
│     └─ user.service.js
└─ role-based-auth-frontend
   ├─ .DS_Store
   ├─ Components
   ├─ README.md
   ├─ eslint.config.js
   ├─ index.html
   ├─ package.json
   ├─ public
   │  └─ vite.svg
   ├─ src
   │  ├─ App.css
   │  ├─ App.jsx
   │  ├─ assets
   │  │  └─ react.svg
   │  ├─ index.css
   │  ├─ main.jsx
   │  └─ pages
   │     ├─ AdminLogin
   │     │  ├─ AdminLogin.jsx
   │     │  └─ useAdminLogin.js
   │     ├─ AdminRegister
   │     │  ├─ AdminRegisterPage.jsx
   │     │  └─ useAdminRegisterPage.js
   │     ├─ Register
   │     │  ├─ RegisterPage.jsx
   │     │  └─ ueRegisterPage.js
   │     └─ routes
   │        ├─ RoleBasedGuard.jsx
   │        └─ Routes.jsx
   ├─ vite.config.js
   └─ yarn.lock

```
