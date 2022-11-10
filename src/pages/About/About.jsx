import styles from './About.module.css'

const About = () => {
  return (
    <>
      <h1>About</h1>
      <div className={styles.about}>
        <img src='images/profile2.jpg' alt='Alyssa' />
        <div>
          <p>I’m a full-stack software developer with a background in data entry and customer service. Through my data entry experience I've acquired exceptional attention to detail. My unique job history has taught me to be adaptable in any work environment. I possess a natural curiosity to understand how things work, which has compelled me to be self-motivated and autodidactic.</p>
        </div>
      </div>
    </>
  )
}

export default About