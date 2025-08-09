import React, { useState } from 'react';

const LikeButton = () => {
  // 1. State for whether it’s liked
  const [liked, setLiked] = useState(false);
  
  // 2. State for count of likes
  const [count, setCount] = useState(0);

  // 3. Handle clicking the button
  const handleClick = () => {
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      <p>Likes: {count}</p>
    </div>
  );
};

export default LikeButton;
