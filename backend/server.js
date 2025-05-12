import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    // Permitir solicitudes desde el front-end
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const PORT = 3000;

const usuariosValidos = ["maxi", "tati", "mauri", "anto"];

app.get("/validar/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  if (usuariosValidos.includes(nombre)) {
    return res.json({ valido: true, mensaje: `Hola, ${nombre}` });
  } else {
    return res.json({
      valido: false,
      mensaje: "El nombre no está en la lista de usuarios válidos.",
    });
  }
});

app.get("/saludo/:nombre",(req,res)=>{
    const nombre= req.params.nombre
    if (usuariosValidos.includes(nombre)) {
    return res.json({mensaje: `Hola, ${nombre}` });
  } 
})

app.get("/", (req, res) => {
  res.send("TP N°2");
});

app.listen(PORT, () => {
  console.log("servidor escuchando");
});
