import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>
        Alyssa
      </Link>
      <Link to='about'>
        About
      </Link>
      <Link to='resume'>
        Resume
      </Link>
      <Link to='projects'>
        Projects
      </Link>
      <Link to='contact'>
        Contact
      </Link>
    </nav>
  )
}

export default NavBar