import ProjectPreview from "./ProjectPreview"

const ProjectsList = ({projects}) => {
  return (
    <>
      <ul>
        {projects.map((project, i) => 
          <li>
            <ProjectPreview key={i} title={project.title} image={project.image} />
          </li>  
        )}
      </ul>
    </>
  )
}

export default ProjectsList