import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

pool
  .connect()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch((err) => console.error("❌ Error al conectar a PostgreSQL:", err));

export default pool;
