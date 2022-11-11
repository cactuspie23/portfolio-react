import hyphenateWords from "../utilities/hyphenateWords.js"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'

const ProjectPreview = ({title, image}) => {
  const path = hyphenateWords(title)
  return(
    <Card style={{ width: '18rem', backgroundColor: '#2c2c3a' }}>
      <Link to={path} style={{ textDecoration: 'none' }}>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default ProjectPreview