import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import TopOfPage from './componets/Header';
import StreamersDen from './assets/images/StreamersDen.JPG';
import heroquest from './assets/images/heroquest.JPG';
import fortressdefense from './assets/images/fortressdefense.JPG';
const projects = [
  {
    title: `The Quest for the Dragon's Lair`,
    imageUrl: heroquest,
    resources: 'HMTL, JS, CSS, MongoDB, React, Express, Node',
    description: '"The Quest for the Dragon Lair" is an adventure role-playing game in which the player takes on the role of a brave hero/heroine who embarks on a journey to slay a dangerous dragon terrorizing a kingdom.',
    githubURI: 'https://code-monsters.herokuapp.com/',

  },
  {
    title: `Fortress Defense`,
    imageUrl: fortressdefense,
    resources: 'HMTL, JS, CSS, SQL, Sequlize, Express, Node',
    description: 'Strategy game where the players goal is to defend their territory by obstructing the enemy from reaching the exits. The player can stop the enemy by placing objects along the path. This type of game is known as a Tower Defense which is a subgenre of strategy games.',
    githubURI: 'https://fortress-defense.herokuapp.com/',

  },{
    title: `Streamer's Den`,
    imageUrl: StreamersDen,
    resources: 'HMTL, JS, CSS, Youtube Iframe API',
    description: 'A Streamer website where they can more easily control what content their fans see',
    githubURI: 'https://github.com/IzzyBrassell/iCarly-project-1',

  },
  
]

function App() {
  return (
    <Router>
      <TopOfPage />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path="/Aboutme" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects projects={projects} />} />
        <Route path='/Resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;