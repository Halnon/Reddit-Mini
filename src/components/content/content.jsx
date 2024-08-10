//this will display the content and will be the second component to be rendered in maintile

import React from "react";

export default function Content(props) {
  return (
      <div className="content">
        <img src={props.contentImg}/>
      </div>
  )
};