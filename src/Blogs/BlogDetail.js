import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Tag from './Tag';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('/posts.json')
      .then((response) => response.json())
      .then((data) => {
        const foundPost = data.find((post) => post.id === parseInt(id, 10));
        setPost(foundPost);
      })
      .catch((error) => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <article className="blog-detail">
      <header>
        <h1>{post.title || 'Untitled'}</h1>
        <p className="author-date">
          By {post.author || 'Unknown Author'} on {new Date(post.date).toLocaleDateString()}
        </p>
      </header>
      {post.imageUrl && <img src={post.imageUrl} alt={`${post.title} featured image`} />}
      <div className="content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
      <footer>
        <div className="tags">
          {post.tags && post.tags.length > 0 ? post.tags.map((tag, index) => <Tag key={index} tag={tag} />) : <p>No Tags</p>}
        </div>
      </footer>
    </article>
  );
};

export default BlogDetail;
