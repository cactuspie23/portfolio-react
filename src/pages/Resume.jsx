import styles from './ProjectDetails/ProjectDetails.module.css'

const Resume = () => {
  return (
    <>
      <h1>Resume</h1>
      <p>Get a copy of my resume here.</p>
      <div className={styles.btns}>
        <a href="/AlyssaDeMartinisResume.pdf" download>
          <button>Download</button>
        </a>
      </div>
      <iframe
        src="/AlyssaDeMartinisResume.pdf"
        title="resume"
        frameBorder="0"
        scrolling="auto"
        height="65%"
        width="65%"
      ></iframe>
    </>
  )
}

export default Resume