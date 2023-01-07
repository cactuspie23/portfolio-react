import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.introImg}>
        <img src='images/profile.jpg' alt='Alyssa' />
      </div>
      <div>
        <h1 className={styles.introHead}>I am Alyssa DeMartinis</h1>
        <p className={styles.intro}>A Software Engineer with a background in environmental biology, data entry, and customer service.</p>
      </div>
    </>
  )
}

export default Home