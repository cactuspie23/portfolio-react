import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/' className={styles.home}>
        ALYSSA
      </NavLink>
      <NavLink to='about'>
        ABOUT
      </NavLink>
      <NavLink to='resume'>
        RESUME
      </NavLink>
      <NavLink to='projects'>
        PROJECTS
      </NavLink>
      <NavLink to='contact'>
        CONTACT
      </NavLink>
    </nav>
  )
}

export default NavBar