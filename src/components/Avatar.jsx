import React from "react";

const Avatar = (props) => {
    return (
      <img
        src={props.src}
        className="img-thumbnail"
        alt={props.alt}
      />
    );
  }

  export default Avatar;
