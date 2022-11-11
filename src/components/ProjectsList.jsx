import ProjectPreview from "./ProjectPreview"
import styles from './ProjectList.module.css'

const ProjectsList = ({projects}) => {
  return (
    <>
      <section className={styles.projectContainer}>
        {projects.map((project, i) => 
          <ProjectPreview key={i} title={project.title} image={project.image} />
        )}
      </section>
    </>
  )
}

export default ProjectsList