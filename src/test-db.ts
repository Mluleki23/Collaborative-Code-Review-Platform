import { testDBConnection } from "./config/database";

console.log("Testing database connection...");
console.log("Environment variables:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_DATABASE:", process.env.DB_DATABASE);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PORT:", process.env.DB_PORT);
// Note: We're not logging DB_PASSWORD for security reasons

testDBConnection()
  .then(() => {
    console.log("Database connection successful!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
