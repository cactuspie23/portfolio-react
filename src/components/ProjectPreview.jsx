import hyphenateWords from "../utilities/hyphenateWords.js"
import { Link } from "react-router-dom"
import styles from './ProjectPreview.module.css'
import Card from 'react-bootstrap/Card'

const ProjectPreview = ({title, image}) => {
  const path = hyphenateWords(title)
  return(
    <Card className={styles.card}>
      <Link to={path} style={{ textDecoration: 'none' }}>
        <Card.Img variant="top" src={image} alt={title} className={styles.cardImg}/>
        <Card.Body>
          <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default ProjectPreview