import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = async () => {
    if (!nombre) {
      setMensaje("Por favor ingresá un nombre.");
      return;
    }

    try {
      // Validar nombre
      const resValidar = await fetch(`http://localhost:3000/validar/${nombre}`);
      const dataValidar = await resValidar.json();

      if (!dataValidar.valido) {
        setMensaje(dataValidar.mensaje || "Nombre no válido.");
        return;
      }

      // Si es válido, pedir el saludo
      const resSaludo = await fetch(`http://localhost:3000/saludo/${nombre}`);
      const dataSaludo = await resSaludo.json();

      setMensaje(dataSaludo.mensaje);
    } catch (error) {
      console.error("Error al comunicarse con el backend:", error);
      setMensaje("Hubo un problema. Intentalo más tarde.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4">Validar nombre</h1>

      <label htmlFor="nombre" className="block mb-1">Ingrese un nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border border-gray-500 rounded px-2 py-1 w-full mb-3"
      />

      <button
        onClick={manejarEnvio}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Validar y Saludar
      </button>

      {mensaje && (
        <p className="mt-4 text-lg">{mensaje}</p>
      )}
    </div>
  );
}

export default App;