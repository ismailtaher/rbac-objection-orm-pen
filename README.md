# RBAC with Objection.js & Knex

A role-based access control (RBAC) example project built with **Node.js**, **Express**, **Objection.js ORM**, **Knex**, and **PostgreSQL**.  
It demonstrates how to manage **users, roles, and permissions** with database relations and enforce access control on routes.

---

## 🚀 Features

- User authentication with **JWT (JSON Web Tokens)**
- Role-based access control (RBAC) using **roles** and **permissions**
- Database access via **Objection.js models** with Knex under the hood
- Examples of:
  - Many-to-many relations (`users ↔ roles`, `roles ↔ permissions`)
  - Using `withGraphFetched` to query related data
  - Data access layer (DAL) for cleaner separation of concerns
- Middleware for:
  - JWT verification
  - Role verification
  - Permission checking
- Fully modular project structure

---

## 📂 Project Structure

📁 rbac-objection-orm-pen<br>
├── 📁config # CORS, allowed origins, shutdown utils<br>
├── 📁controllers # Express route controllers<br>
├── 📁db # Database config, migrations, seeds, Objection models<br>
│ ├── 📁migrations<br>
│ ├── 📁models # User, Role, Permission, Product models<br>
│ └── 📁seeds<br>
├── 📁dal # Data access layer (queries using Objection models)<br>
├── 📁middleware # JWT, RBAC, error handling<br>
├── 📁routes # Express routes<br>
├── 📁views # Static HTML views<br>
├── knexfile.js # Knex config<br>
├── server.js # App entry point<br>

---

## 🛠️ Tech Stack

- **Node.js** + **Express**
- **Objection.js** (ORM) + **Knex.js** (query builder)
- **PostgreSQL** (database)
- **bcrypt** for password hashing
- **JWT** for authentication

---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/ismailtaher/rbac-objection-orm-pen.git
   cd rbac-objection-orm-pen

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure database**
  - Update knexfile.js with your PostgreSQL credentials.
  - Create a database (e.g., auth_objection).

4. **Run migrations & seeds**
   ```bash
    npx knex migrate:latest
    npx knex seed:run
    ```

5. **Start the server**
   ```bash
    npm start
    ```
