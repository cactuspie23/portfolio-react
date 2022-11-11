import findProject from "../../utilities/findProject.js"
import styles from './ProjectDetails.module.css'
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)

  return(
    <>
      <div className={styles.detailsContainer}>
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} className={styles.projectImg} />
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.btns}>
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