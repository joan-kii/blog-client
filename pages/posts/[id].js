import parse from 'html-react-parser';

import Layout from '../../components/layout';

import styles from '../../styles/post.module.scss';

const URL_POSTLIST = 'http://localhost:5000/posts/';
const options = {
  method: 'GET',
  mode: 'cors',
  headers: {
  'Content-Type': 'application/json'
  }
};

export default function Post({post}) {
  const text = parse(post.text);

  return (
    <Layout>
      <section className={styles.postSection}>
        <h1>{post.title}</h1>
        {text}
      </section>
      <section>
        <form>

        </form>
      </section>
      <section className={styles.commentsSection}>
        <h3>Comments</h3>
        {post.comments.map((comment, index) => {
          return (
            <div key={index}>
              <h4>{comment.user}</h4>
              <p>{comment.message}</p>
            </div>
          )
        })}
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch(URL_POSTLIST, options);
  const postList = await response.json();
  const paths = postList.map(post => {
    return {
      params: {
        id: post.slug
      }
    }
  })
  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps({ params }) {
  const URL_SINGLE_POST = `http://localhost:5000/posts/${params.id}`;
  const response = await fetch(URL_SINGLE_POST, options);
  const post = await response.json();
  return {props: {post}};
}
