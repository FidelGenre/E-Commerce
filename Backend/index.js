import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/images", express.static("public/images"));

app.get("/api/dishes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM dishes");
    const dishes = result.rows.map((p) => ({
      ...p,
      image: `http://localhost:${PORT}/images/${p.image}`,
    }));
    res.json(dishes);
  } catch (err) {
    console.error("Error en /api/dishes:", err);
    res.status(500).json({ error: "Error al obtener dishes" });
  }
});

app.post("/api/dishes", async (req, res) => {
  const { name, description, price, image, category } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO dishes (name, description, price, image, category) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, description, price, image, category]
    );
    res.json({
      ...result.rows[0],
      image: `http://localhost:${PORT}/images/${result.rows[0].image}`,
    });
  } catch (err) {
    console.error("Error agregando dish:", err);
    res.status(500).json({ error: "Error al insertar dish" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
