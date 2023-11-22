import "./App.css"
import Logo from "./assets/react.svg"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="">
              <img src={Logo} alt="" />
            </a>
          </li>
          <li>
            <span className="material-symbols-outlined">explore_nearby</span>
            <p>actualizar ubicasion</p>
            <p>entregar en mexico city 11000</p>
          </li>
          <li>
            <section></section>
            <input type="text" />
            <input type="button" value="" />
          </li>
          <li>
            <div>
              <a href="">
                <span className="material-symbols-outlined">hola indentificate</span>
                <p>cuenta y listas</p>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="">
                <span className="material-symbols-outlined">hola indentificate</span>
                <p>cuenta y listas</p>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span>0</span>
                <span>carrito</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <section></section>
    </>
  )
}

export default App
