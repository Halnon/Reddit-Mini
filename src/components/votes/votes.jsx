//this wil display the amount of upvotes on the content

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Votes(props) {
  return (
      <div>
        <button><FontAwesomeIcon icon={faArrowUp} /></button>
        <p>{props.votes}</p>
        <button><FontAwesomeIcon icon={faArrowDown} /></button>
      </div>
  )
};