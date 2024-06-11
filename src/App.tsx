// import { useState } from 'react'

import './App.css'
import { Header } from './Components/Header';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import{ExperiencePage} from './Components/Experienced';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <About></About>
    <ExperiencePage></ExperiencePage>
    <Projects></Projects>
    </>
  )
}

export default App;
