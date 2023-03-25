import {Link} from "react-router-dom"

const Header = () => {
  return (
   <>
          <header>
          <Link to="/" className="logo">
            My Blog
          </Link>
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Regiser</Link>
          </nav>
        </header>
   </>
  )
}

export default Header