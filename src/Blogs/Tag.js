import React from 'react';
import PropTypes from 'prop-types';


const Tag = ({ tag }) => <span className="tag">{tag}</span>;

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
