// Post.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Post ID: {id}</h1>
      {/* Fetch and display the post content based on the ID */}
    </div>
  );
};

export default Post;