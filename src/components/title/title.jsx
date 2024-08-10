//fist component to be rendered in maintile. this will display the title of the reddit content

import React from "react";

export default function Title(props) {
  return (
      <div className="title--container">
        <h2>{props.mainTitle}</h2>
      </div>
  )
};