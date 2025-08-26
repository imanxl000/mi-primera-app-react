import { useState } from "react";
import "./App.css";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const anio = new Date().getFullYear();
  const nombre = "Imanol";

  const formatClicks = (n) => (n === 1 ? "1 click" : n + " clicks");

  return (
    <main className="App">
      <header className="App-header">
        <h1>Hola, {nombre}! 🚀</h1>
        <p>Proyecto React listo. Año: {anio}</p>
      </header>

      <section className="App-section">
        <button className="btn" onClick={() => setClicks(c => c + 1)}>
          {formatClicks(clicks)}
        </button>
        <p className="muted">Este botón usa estado + evento onClick.</p>
      </section>

      <footer className="App-footer">
        <small>© {anio} {nombre}. Materia: Desarrollo Web.</small>
      </footer>
    </main>
  );
}
