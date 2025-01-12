import { NavLink } from "react-router-dom"
import "../App.css"

function Nav() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/add-team">Add New Team!</NavLink>
    </nav>
  )
}

export default Nav