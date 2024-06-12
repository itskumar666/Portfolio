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
    <div  className="md:border-4 md:border-gray-200 w-auto"></div>
    <div>
    <a href="https://github.com/itskumar666">Site By @itskumar666</a>
    </div>

    

    </div>
)
}