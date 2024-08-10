import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Maintile from './components/maintile/maintile';
import './App.css';
import data from './data.js';

function App() {
  const MaintileMap = data.map((data) => {
    return <Maintile
              key={data.id}
              title={data.title}
              contentImg={data.contentImg}
              votes={data.votes}
              author={data.author}
              time={data.time}
              comments={data.comments}
            />
  })

  return (
    <div>
      <Navbar />
      {MaintileMap}
    </div>
  )
}

export default App
