// server/index.js
const express = require("express");

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



// server/index.js
app.get("/mttos", async (req, res) => {
  try {
    const MTTOS = await prisma.MttosTable.findMany();
    console.log(MTTOS)
    console.log("suiahdposiajhdosa")
    res.json(MTTOS);
  } catch (error) {
    console.error("Error al obtener mttos:", error);
    res.status(500).json({ error: "Error al obtener mttos" });
  }
});



// Ruta para crear un nuevo registro
app.post('/mttosP', async (req, res) => {
  try {
    const {
      idLinea,
      idPlanta,
      Nserie,
      FechaPROG,
      FechaRealiz,
      RealizadoPor,
      RevisadoPor,
      AprobadoPor,
    } = req.body;

    // Crea el nuevo registro en la tabla MttosTable
    const newMttos = await prisma.mttosTable.create({
      data: {
        idLinea,
        idPlanta,
        Nserie,
        FechaPROG,
        FechaRealiz,
        RealizadoPor,
        RevisadoPor,
        AprobadoPor,
      },
    });

    res.status(201).json(newMttos);
  } catch (error) {
    console.error('Error al crear el registro:', error);
    res.status(500).json({ error: 'Error al crear el registro' });
  }
});
