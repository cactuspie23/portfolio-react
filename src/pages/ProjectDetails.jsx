import findProject from "../utilities/findProject.js"
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)

  return(
    <>
    <div>
      <div>
        <h1>{project.title}</h1>
        <img src={project.img} alt={project.title} />
        <p>{project.description}</p>
        <a href={project.repositoryLink} rel="noreferrer" target="_blank">
          <button>GitHub</button>
        </a>
        <a href={project.deploymentLink} rel="noreferrer" target="_blank">
          <button>Launch</button>
        </a>
      </div>
    </div>
    </>
  )
}

export default ProjectDetails