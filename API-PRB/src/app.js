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




// app.post("/mttosPost", async (req, res) => {
//   try {
//     const { idLinea, idPlanta, Nserie, comentarios } = req.body; // Obtén los datos del cuerpo de la solicitud

//     // Crea un nuevo registro en la tabla MttosTable
//     const nuevoMttos = await prisma.MttosTable.create({
//       data: {
//         idLinea,
//         idPlanta,
//         Nserie,
//         comentarios,
//         // Agrega otros campos según sea necesario
//       },
//     });

//     console.log("Nuevo registro creado:", nuevoMttos);
//     res.json(nuevoMttos);
//   } catch (error) {
//     console.error("Error al crear el registro:", error);
//     res.status(500).json({ error: "Error al crear el registro" });
//   }
// });



app.post("/mttosPost", async (req, res) => {
  try {
    const {
      IdLinea,
      IdPlanta,
      Nserie,
      Comentarios,
      ProblemasEncontrados,
      CambiosRealizados,
      Path_IMG,
      FechaPROG,
      FechaRealiz,
      RealizadoPor,
      RevisadoPor,
      AprobadoPor,
      Estatus,
      Estacion,
      SupIs,
      GteIs,
      planta,
      mesName,
    } = req.body;

    // Crea un nuevo registro en la tabla MttosTable
    const nuevoMttos = await prisma.MttosTable.create({
      data: {
        IdLinea,
        IdPlanta,
        Nserie,
        Comentarios,
        ProblemasEncontrados,
        CambiosRealizados,
        Path_IMG,
        FechaPROG,
        FechaRealiz,
        RealizadoPor,
        RevisadoPor,
        AprobadoPor,
        Estatus,
        Estacion,
        SupIs,
        GteIs,
        planta,
        mesName,
      },
    });


    console.log(req.body);
    // console.log("Nuevo registro creado:", nuevoMttos);
    res.json(req.body);
  } catch (error) {
    console.error("Error al crear el registro:", error);
    res.status(500).json({ error: "Error al crear el registro" });
  }
});
