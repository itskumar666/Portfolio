import { About } from "./About"
import { ExperiencePage } from "./Experienced"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
export const Home=()=>{
return(
   
    <div className="">
  
    <About />
    <div className="md:border-2 md:border-gray-200 w-auto"></div>
      <ExperiencePage/>
    <div  className="md:border-2 md:border-gray-200 w-auto"></div>
    <Projects />
    <div  className="md:border-2 md:border-gray-200 w-auto"></div>
    <Skills />
    
    

    </div>
)
}