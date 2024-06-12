// import { useState } from 'react'

import './App.css'
import { Header } from './Components/Header';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import{ExperiencePage} from './Components/Experienced';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className=' sticky top-0'>
    <Header></Header>
    </div>
    <About></About>
    <ExperiencePage></ExperiencePage>
   
    <Projects></Projects>
    <Skills></Skills>
    </>
  )
}

export default App;
