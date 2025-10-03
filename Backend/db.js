import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

let _pool = globalThis.__pool;
if (!_pool) {
  _pool = new Pool({
    connectionString: process.env.SUPABASE_DB_POOLED_URL,
    ssl: { rejectUnauthorized: false },
    max: 1,
    idleTimeoutMillis: 30000,
    keepAlive: true,
  });
  globalThis.__pool = _pool;
}

export default _pool;
