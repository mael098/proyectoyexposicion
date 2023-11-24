import "./App.css"
import Logo from "../public/580b57fcd9996e24bc43c518.png"

function App() {
  return (
    <>
     <nav>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="GPS-ubicasion">
        <div className="GPS">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="ubicasion">
          <img src="" alt="" />
          <p>Entregar en tampico</p>
          <p>atualizar ubicasion</p>
        </div>

      </div>
      <div className="search-bar">
        <input type="text" />
        <button type="button">Buscar</button>
      </div>
      <div className="nav-links">
        <a href="#">hoy´s deals</a>
        <a href="#">Tarjetas Regalo</a>
        <a href="#">Vender</a>
        <a href="#">Ayuda</a>
      </div>
      
    </nav>

      <section></section>
    </>
  )
}

export default App
