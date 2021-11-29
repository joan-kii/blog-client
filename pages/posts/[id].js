import parse from 'html-react-parser';
import { useState } from 'react';
import { useRouter } from 'next/router';

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

  const [nameValue, setNameValue] = useState('');
  const [commentValue, setCommentValue] = useState('');
  const router = useRouter();

  const text = parse(post.text);

  const handleNameChange = (e) => {
    e.preventDefault();
    setNameValue(e.target.value);
  };

  const handleCommentChange = (e) => {
    e.preventDefault();
    setCommentValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      name: nameValue,
      comment: commentValue
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
    if (request.status === 200) {
      setNameValue('');
      setCommentValue('');
      router.reload(window.location.pathname);
    }
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
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={nameValue} 
              onChange={handleNameChange}
              required />
          </div>
          <div className={styles.commentInput}>
            <label htmlFor="comment">Comment:</label>
            <input 
              type="textarea" 
              id="comment" 
              name="comment" 
              value={commentValue} 
              onChange={handleCommentChange}
              required />
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
