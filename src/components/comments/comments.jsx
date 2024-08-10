//this will display the amount of comments on a post

import React from "react";

export default function Comments(props) {
  return (
      <div>
        <p>{props.comments}</p>
      </div>
  )
};