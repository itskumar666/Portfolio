// import { useState } from 'react'

import './App.css'
import { Header } from "./Components/Header"
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import{ExperiencePage} from './Components/Experienced';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import { Blogs } from './Components/Blogs';
import { Contacts } from './Components/Contacts';
import { Home } from './Components/Home';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
  <BrowserRouter>
  <Header></Header>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path="/contacts" element={<Contacts/>}></Route>
    <Route path="/projects" element={<Projects/>}></Route>
    <Route path="/experience" element={<ExperiencePage/>}></Route>
    <Route path="/skills" element={<Skills/>}></Route>
    <Route path="/blogs" element={<Blogs/>}></Route>


  </Routes>
  </BrowserRouter>
       
    </>
  )
}

export default App;
