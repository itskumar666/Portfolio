import pi from '../assets/pi.jpg';
import wp from '../assets/wp.jpg';

// import at from '../assets/at.png'; // Import your image
import { ProjectList } from './ProjectList';

export const Projects=()=>{
    return(
        <div className="bg-gray-100  px-4 py-14  md:px-14 md:py-28">
           <div className="flex flex-col md:flex-row ">
              <div className="pb-5 md:w-1/2 pr-8">
                    <h2 className="text-6xl font-bold mb-2 mx-2 md:text-6xl md:mb-28">Portfolio.</h2>
                    <p className="text-xl mb-4 mx-4 md:text-4xl">Check out some of my latest projects</p>
                    <p className="text-base mx-4 md:text-xl mb-4">
                     Experienced in MERN stack and 200+ LeetCode solutions, I've led multiple projects, harmonizing frontend finesse with backend robustness. Let's connect and bring your ideas to life!                     </p>
               </div>
               <div className=' flex flex-col md:flex-row '>
                 {/* <div className='hidden md:w-1/2'> <img className="w-1/2" src={pi} alt="" /></div> */}
                 <div> <img className=" rounded-3xl ml-3 w-10/12" src={wp} alt="" /></div>
               </div>
             </div>
           <div>
            <ProjectList></ProjectList>
           </div>
        </div>
    )
}