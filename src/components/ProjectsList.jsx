
const ProjectsList = ({projects}) => {
  return (
    <>
      <ul>
        {projects.map(project => 
          <li>
            {project.title}
          </li>  
        )}
      </ul>
    </>
  )
}

export default ProjectsList