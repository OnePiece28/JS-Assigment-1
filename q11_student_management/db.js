const mysql = require("mysql2/promise");

const config = {
  host: "localhost",
  user: "root",
  password: "Your_Own_Password",
  database: "college"
};

async function connectDB() {
  try {
    const connection = await mysql.createConnection(config);
    console.log("✅ Connected to MySQL database 'college' successfully");
    return connection;
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
