import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const light = "white";
  const dark = "black";

  const handeTheme = () => {
    setIsDark(!isDark)
  }

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
      <hr />

      <button onClick={handeTheme}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
      <div style={{
            backgroundColor: isDark ? dark : light,
            color: isDark ? light : dark,
        }}>
        <p>asd</p>
        <p>asd</p>
      </div>
    </div>
  );
};

export default LikeButton;
