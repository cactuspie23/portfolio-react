import hyphenateWords from "../utilities/hyphenateWords"
import { Link } from "react-router-dom"

const ProjectPreview = ({title, image}) => {
  const path = hyphenateWords(title)
  return(
    <Link to={path}>
      <div>
        <img 
            src={image} 
            alt={title}
        />
        <section>
            <h3>
                {title}
            </h3>

        </section>
      </div>
    </Link>
  )
}

export default ProjectPreview