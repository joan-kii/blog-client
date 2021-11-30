import Layout from '../components/layout';
import styles from '../styles/about.module.scss';

const About = () => {
  return (
    <Layout about>
      <div className={styles.container}>
        <p>{"This site is a practice for The Odin Project's full stack JavaScript curriculum."}</p>
        <p>It is a very simple blog built with NextJs and Sass.</p>
        <p>{"In any case, reading Paul Graham's essays is highly recommended."}</p>
      </div>
    </Layout>
  )
};

export default About;
