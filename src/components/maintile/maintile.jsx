//all other components will be rendered within this, and in turn, this will be rendered in app.js
//multiple tiles will be rendered on page that displays various content from Reddit JSON API

import React from "react";
import Title from "../title/title";

export default function Maintile() {
  return (
      <div className="maintile--container">
        <Title />
      </div>
  )
};