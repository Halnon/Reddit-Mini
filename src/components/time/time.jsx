//this will display how long ago the content was posted

import React from "react";

export default function Time(props) {
  return (
      <div>
        <p>{props.time} hours ago</p>
      </div>
  )
};