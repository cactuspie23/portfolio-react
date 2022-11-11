import hyphenateWords from "../utilities/hyphenateWords.js"
import styles from './ProjectPreview.module.css'
import { Link } from "react-router-dom"

const ProjectPreview = ({title, image}) => {
  const path = hyphenateWords(title)
  return(
    <Link to={path}>
      <div className={styles.projectContainer}>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default ProjectPreview