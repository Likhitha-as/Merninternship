import { Link } from "react-router-dom";


function Navbar(){

return(

<nav className="navbar">


<h2>
Skill Exchange
</h2>


<div className="nav-links">


<Link to="/">
Home
</Link>


<Link to="/about">
About
</Link>


<Link to="/register">
Register
</Link>


<Link to="/login">
Login
</Link>


<Link to="/skills">
Skills
</Link>


<Link to="/dashboard">
Dashboard
</Link>


</div>


</nav>

)

}


export default Navbar;