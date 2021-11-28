import parse from 'html-react-parser';

import Layout from '../../components/layout';

import styles from '../../styles/post.module.scss';

const URL = 'http://localhost:5000/posts/';
const getOptions = {
  method: 'GET',
  mode: 'cors',
  headers: {
  'Content-Type': 'application/json'
  }
};

export default function Post({post}) {
  const text = parse(post.text);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      name: e.target.name.value,
      comment: e.target.comment.value
    };
    const postOptions = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(newComment),
      headers: {
      'Content-Type': 'application/json'
      }
    };

    const request = await fetch(URL + post.slug, postOptions);
    console.log(request.ok);
  };

  return (
    <Layout>
      <section className={styles.postSection}>
        <h1>{post.title}</h1>
        {text}
      </section>
      <section className={styles.newCommentSection}>
        <h3>Leave a comment</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.nameInput}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div className={styles.commentInput}>
            <label htmlFor="comment">Comment:</label>
            <input type="textarea" id="comment" name="comment" required/>
          </div>
          <button type="submit" className={styles.submitButton}>Send</button>
        </form>
      </section>
      <section className={styles.commentsSection}>
        <h3>Comments</h3>
        {post.comments.map((comment, index) => {
          return (
            <div className={styles.comment} key={index}>
              <h4>{comment.name}: </h4>
              <p>{comment.comment}</p>
            </div>
          )
        })}
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch(URL, getOptions);
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
  const URL_SINGLE_POST = URL + params.id;
  const response = await fetch(URL_SINGLE_POST, getOptions);
  const post = await response.json();
  return {props: {post}};
}
