import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts.json')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="blog-list">
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <BlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
            tags={post.tags}
            imageUrl={post.imageUrl}
          />
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
};

export default BlogList;
