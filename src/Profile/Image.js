import React from "react";

const Image = ({ src }) => {
  const imgStyle = {
    border: `1px solid #ddd`,
    borderRadius: 4,
    padding: 5,
    width: 150,
  };
  return (
    <p>
      <img src={src} style={imgStyle} />
    </p>
  );
};

export default Image;
