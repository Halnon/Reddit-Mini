import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Maintile from './components/maintile/maintile';
import './App.css';
import data from './data.js';

function App() {

  return (
    <div>
      <Navbar />
      <Maintile 
        key={data.id}
        title={data.title}
        contentImg={data.contentImg}
        votes={data.votes}
        author={data.author}
        time={data.time}
        comments={data.comments}
      />
    </div>
  )
}

export default App
