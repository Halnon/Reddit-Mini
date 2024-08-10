//this will display the name of the original poster

import React from "react";

export default function Author(props) {
  return (
      <div>
        <p>Posted by <a href="#">{props.author}</a></p>
      </div>
  )
};