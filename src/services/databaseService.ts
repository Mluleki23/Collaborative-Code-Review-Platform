import { pool } from "../config/database";

export const createTablesIfNotExists = async (): Promise<void> => {
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(20) NOT NULL DEFAULT 'submitter'
        CHECK (role IN ('reviewer', 'submitter')),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const createProjectsTable = `
    CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      description TEXT,
      created_by INT REFERENCES users(id) ON DELETE SET NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const createSubmissionsTable = `
    CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY,
      project_id INT REFERENCES projects(id) ON DELETE CASCADE,
      submitted_by INT REFERENCES users(id) ON DELETE SET NULL,
      code TEXT NOT NULL,
      status VARCHAR(20) NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'approved', 'rejected')),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const createCommentsTable = `
    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      submission_id INT NOT NULL REFERENCES submissions(id) ON DELETE CASCADE,
      reviewer_id INT REFERENCES users(id) ON DELETE SET NULL,
      line_number INT,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  await pool.query(createUsersTable);
  await pool.query(createProjectsTable);
  await pool.query(createSubmissionsTable);
  await pool.query(createCommentsTable);
};
