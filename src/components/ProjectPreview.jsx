
const ProjectPreview = ({title, image}) => {
  return(
    <div>
      <img 
          src={image} 
          alt={title}
      />

      <section>
          <h3>
              {title}
          </h3>
          <button>
              Learn more
          </button>
      </section>
    </div>
  )
}

export default ProjectPreview