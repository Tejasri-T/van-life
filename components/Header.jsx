import { Link, NavLink } from "react-router-dom"

export default function Header() {

  

  function fakeLogOut() {
        localStorage.removeItem("loggedIn")
       // console.log("removing",localStorage.getItem("loggedIn"))
    }
  return (
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <NavLink to="/host"
          className={({ isActive }) => isActive ? "active-link" : null}
        >Host</NavLink>
        <NavLink to="/about"
          className={({ isActive }) => isActive ? "active-link" : null}
        >About</NavLink>
        <NavLink to="/vans"
          className={({ isActive }) => isActive ? "active-link" : null}
        >Van</NavLink>

        <Link to="login" className="login-link">
          <img
            src="../images/avatar-icon.png"
            className="login-icon"
          />
        </Link>
        <button onClick={fakeLogOut}>X</button>

      </nav>
    </header>
  )
}