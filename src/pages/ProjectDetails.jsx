import { projects } from "../data/projects"

const ProjectDetails = () => {
  return(
    <>
    <div>
      <div>
        <h1>{projects[0].title}</h1>
        <img src="" alt="" />
        <p>{projects[0].description}</p>
        <button>GitHub</button>
        <button>Launch</button>
      </div>
    </div>
    </>
  )
}

export default ProjectDetails