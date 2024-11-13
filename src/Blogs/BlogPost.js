import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import Tag from './Tag';
import './BlogPost.css';

const BlogPost = ({ id, title, author, date, content, tags, imageUrl }) => {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');
  const cleanContent = DOMPurify.sanitize(content);
  const isLongContent = content.length > 300;

  return (
    <article className="blog-post">
      <header>
        <h1><Link to={`/post/${id}`}>{title || 'Untitled'}</Link></h1>
        <p className="author-date">
          By {author || 'Unknown Author'} on {formattedDate || 'Unknown Date'}
        </p>
      </header>
      {imageUrl && <img src={imageUrl} alt={`${title} featured image`} loading="lazy" />}
      <div className="content" dangerouslySetInnerHTML={{ __html: isLongContent ? `${cleanContent.substring(0, 300)}...` : cleanContent }} />
      {isLongContent && <Link to={`/post/${id}`} className="read-more">Read More</Link>}
      <footer>
        <div className="tags">
          {tags && tags.length > 0 ? tags.map((tag, index) => <Tag key={index} tag={tag} />) : <p>No Tags</p>}
        </div>
      </footer>
    </article>
  );
};

BlogPost.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string,
};

export default BlogPost;
