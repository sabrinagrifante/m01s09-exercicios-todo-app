import React from "react";

const Bio = (props) => {
  return (
    <div>
      <h3>Bio</h3>
      {props.children}
    </div>
  );
};

export default Bio;
