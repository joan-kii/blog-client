import parse from 'html-react-parser';

import Link from 'next/link';

import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import styles from '../styles/home.module.scss';

const URL = 'http://localhost:5000/posts';
const options = {
  method: 'GET',
  mode: 'cors',
  headers: {
  'Content-Type': 'application/json'
  }
};

export async function getStaticProps() {
  const response= await fetch(URL, options);
  const postList = await response.json();
  return {props: {postList}};
}

export default function Home({ postList }) {

  return (
    <Layout home>
      <div className={styles.postsGrid}>
        {postList.map((post) => {
          const description = parse(post.description);
          return (
            <Link href={`/posts/${post.slug}`} key={post.id}>
              <a>
                <div className={styles.postLink}>
                  <h3 className={utilStyles.headingMd}>{post.title}</h3>
                  <p>{description}</p>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}
