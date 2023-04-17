import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  AboutMe  from './pages/AboutMe';
import  Contact  from './pages/Contact'
import  Projects  from './pages/Projects'
import  Resume  from './pages/Resume'
import TopOfPage from './componets/header';
import StreamersDen from './assets/images/StreamersDen.JPG';


const projects = [
  {
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
        <Route path='/' element={<AboutMe/>}/>
        <Route path="/Aboutme" element={<AboutMe/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Projects" element={<Projects projects={projects} />} />
        <Route path='/Resume' element={<Resume/>} />
      </Routes>
    </Router>
  );
}

export default App;