//all other components will be rendered within this, and in turn, this will be rendered in app.js
//multiple tiles will be rendered on page that displays various content from Reddit JSON API

import React from "react";
import Title from "../title/title";
import Content from "../content/content";
import Author from "../author/author";
import Time from "../time/time";
import Comments from "../comments/comments";
import Votes from "../votes/votes";

export default function Maintile(props) {
  return (
      <div className="maintile--container">
        <div>
          <Votes />
        </div>
        <div className="maintile--container--2">
          <Title 
            mainTitle={props.title}
          />
          <Content 
            contentImg={props.contentImg}
          />
          <hr />
          <div className="maintile--container--3">
            <Author />
            <Time />
            <Comments />
          </div>
        </div>
      </div>
  )
};