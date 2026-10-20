# JavaScript Assignment – 15 Questions

A collection of 15 JavaScript solutions covering ES6 features, OOP, error handling, Promises, modules, and a Node.js + MySQL CRUD application.

## 📂 Project Structure

| Q | Topic | File / Folder |
|---|-------|---------------|
| 1 | Array Destructuring | `q01_array_destructuring.js` |
| 2 | Object Destructuring | `q02_object_destructuring.js` |
| 3 | map, filter, reduce | `q03_map_filter_reduce.js` |
| 4 | Practical map, filter, reduce | `q04_practical_map_filter_reduce.js` |
| 5 | Classes (`BankAccount`) | `q05_bank_account_class.js` |
| 6 | Class Inheritance (`Person` → `Employee`) | `q06_class_inheritance.js` |
| 7 | User-Defined Error | `q07_user_defined_error.js` |
| 8 | Multiple User-Defined Errors | `q08_multiple_errors.js` |
| 9 | Promise with `setTimeout()` | `q09_promise_settimeout.js` |
| 10 | Promise with `resolve()` / `reject()` | `q10_promise_resolve_reject.js` |
| 11 | Node.js + MySQL Student Management System | `q11_student_management/` |
| 12 | Promise Chaining | `q12_promise_chaining.js` |
| 13 | ES Modules – Named Exports | `q13_es_modules_named/` |
| 14 | ES Modules – Default Export | `q14_es_modules_default/` |
| 15 | CommonJS Modules | `q15_commonjs/` |

## 🛠️ Requirements

- [Node.js](https://nodejs.org/) v18 or above
- [MySQL Server 8.0](https://dev.mysql.com/downloads/installer/) (only for Q11)

## ▶️ How to Run

**Q1–Q10 and Q12** (from the project root):

```bash
node q01_array_destructuring.js
node q02_object_destructuring.js
# ...and so on for each file
```

**Q13, Q14, Q15** (run inside each folder):

```bash
cd q13_es_modules_named
node app.js
```

## 🗄️ Q11 – Student Management System (Node.js + MySQL)

Performs CRUD operations (Create, Read, Update, Delete) and student search using parameterized queries to prevent SQL injection.

**Setup**

1. Create the database and table by running `q11_student_management/schema.sql` in MySQL.
2. Open `q11_student_management/db.js` and set your MySQL password.
3. Install dependencies and run:

```bash
cd q11_student_management
npm install
node demo.js     # automated test of all 5 operations
node index.js    # interactive menu
```

**Features**

- Connect to MySQL with success/failure messages
- Insert a new student
- Show all students
- Search by ID or name
- Update name, age, course, or email by ID
- Delete a student by ID
- Separate function for each database operation, with error handling

## 📸 Output Screenshots

Screenshots of the output for every question are in the [`screenshots/`](./screenshots) folder.

## 👤 Author

**Rohit Gupta**
GitHub: [@OnePiece28](https://github.com/OnePiece28)
