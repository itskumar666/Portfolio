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
    <div className='md:border-2  md:border-gray-200 w-auto'></div>
    <ExperiencePage></ExperiencePage>
    <div className='md:border-2  md:border-gray-200 w-auto'></div>

    <Projects></Projects>
    <div className='md:border-2  md:border-gray-200 w-auto'></div>

    <Skills></Skills>
    <div className='md:border-4    md:border-gray-200 w-auto'></div>
    <div> <a href="https://github.com/itskumar666">Site By @itskumar666</a> </div>
    </>
  )
}

export default App;
