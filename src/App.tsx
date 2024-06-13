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
import { Footer } from './Components/Footer';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
  <BrowserRouter>
     <div className="sticky top-0 z-50"><Header></Header></div>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path="/contacts" element={<Contacts/>}></Route>
    <Route path="/projects" element={<Projects/>}></Route>
    <Route path="/experience" element={<ExperiencePage/>}></Route>
    <Route path="/skills" element={<Skills/>}></Route>
    <Route path="/blogs" element={<Blogs/>}></Route>


  </Routes>
  <Footer></Footer>
  </BrowserRouter>
       
    </>
  )
}

export default App;
