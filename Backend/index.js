import express from "express";
import cors from "cors";
import pool from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Si está detrás de proxy (Render), permite detectar https correctamente
app.set("trust proxy", 1);

app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));

/** --- Rutas utilitarias --- */
// Raíz (para que Render no dé 404 en /)
app.get("/", (_req, res) => {
  res.status(200).send("✅ API OK - E-Commerce Backend");
});

// Healthcheck (ponelo en Render > Settings > Health Check Path = /health)
app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

/** Helper para armar URL absoluta de imágenes según la request */
function baseUrlFrom(req) {
  const proto = req.protocol; // http/https
  const host = req.get("host"); // e-commerce-oo7y.onrender.com
  return `${proto}://${host}`;
}

/** --- API --- */
// Obtener todos los platos
app.get("/api/dishes", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM dishes");
    const BASE_URL = process.env.BASE_URL || baseUrlFrom(req);
    const dishes = rows.map((p) => ({
      ...p,
      image: `${BASE_URL}/images/${p.image}`,
    }));
    res.json(dishes);
  } catch (err) {
    console.error("Error en /api/dishes:", err);
    res.status(500).json({ error: "Error al obtener dishes" });
  }
});

// Agregar un plato
app.post("/api/dishes", async (req, res) => {
  const { name, description, price, image, category } = req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO dishes (name, description, price, image, category) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [name, description, price, image, category]
    );
    const saved = rows[0];
    const BASE_URL =
      process.env.BASE_URL || `${req.protocol}://${req.get("host")}`;
    res.json({ ...saved, image: `${BASE_URL}/images/${saved.image}` });
  } catch (err) {
    console.error("Error agregando dish:", err);
    res.status(500).json({ error: "Error al insertar dish" });
  }
});

// 404 para rutas desconocidas (opcional)
app.use((req, res) => res.status(404).json({ error: "Not found" }));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
