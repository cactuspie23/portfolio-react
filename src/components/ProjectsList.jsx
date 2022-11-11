import ProjectPreview from "./ProjectPreview"

const ProjectsList = ({projects}) => {
  return (
    <>
      <section>
        {projects.map((project, i) => 
          <ProjectPreview key={i} title={project.title} image={project.image} />
        )}
      </section>
    </>
  )
}

export default ProjectsList