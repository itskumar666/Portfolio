import { useState} from 'react';
// import logo from '../assets/logo.png'; 
import menu from '../assets/menu.png'; 
import logo2 from '../assets/logo2.png'
import x from '../assets/x.png'
import twitters from '../assets/twitters.png'
import twitterm from '../assets/twitterm.png'
import linkdins from '../assets/linkdins.png'
import linkdinm from '../assets/linkdinm.png'
import gits from '../assets/gits.png'
import gitm from '../assets/gitm.png'


import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate=useNavigate()
    const [toggle,setToggle]=useState(false)
    const togglehandler=()=>{
        setToggle(!toggle)
    }
  
    const handleBlogsClick = () => {
        navigate('/blogs');
        setToggle(false);
    };

    const handleContactsClick = () => {
        navigate('/contacts');
        setToggle(false);
    };
    const handleportfolio = () => {
        navigate('/projects');
        setToggle(false);
    };

    const handleskills = () => {
        navigate('/skills');
        setToggle(false);
    };
const nav=()=>{
    navigate('/')
    setToggle(false);
}



    return (
        <div>
        <div className="flex justify-between text-white bg-black py-2">
            
            <div className='w-14 items-center ml-10 rounded-full md:ml-28'>
                <img src={logo2} className=" hover:brightness-150 brightness-100 "onClick={nav} alt="" />
            </div>
          
            <div className='hidden md:flex justify-between   items-center text-xl mr-5 lg:mr-28 gap-14'>
                
            <h2 className="hover:hover:text-gray-700" onClick={handleportfolio}>Portfolio</h2>
            <h2 className="hover:hover:text-gray-700" onClick={handleskills}>Skills</h2>
                <h2 className="hover:text-gray-700" onClick={handleBlogsClick}>Blogs</h2>
                <h2 className="hover:text-gray-700" onClick={handleContactsClick}>Contact</h2>
                <a href="https://github.com/itskumar666" ><img className="hover:brightness-50" src={gits} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/ashutosh-kumar-677a64237/" ><img className="hover:brightness-50 " src={linkdins} alt="" /></a>
                <a href="https://x.com/itskumar666" ><img className="hover:brightness-50" src={twitters} alt="" /></a>
            </div>
            <div className='md:hidden mr-2'>
              
              {!toggle &&
               <img onClick={togglehandler} className=" " src={menu} alt="" />}
               {toggle && 
               <div className='grid grid-rows-12 h-screen text-white mr-10 '>
                <button  onClick={togglehandler} className=''><img className='' src={x} alt="" /></button>
                <div className=''></div>
                
                <h2 className="hover:text-black" onClick={handleportfolio}>Portfolio</h2>
                <h2 className="hover:text-black" onClick={handleskills}>Skills</h2>
                <h2 className="hover:text-black" onClick={handleBlogsClick}>Blogs</h2>
                <h2 className="hover:text-black" onClick={handleContactsClick}>Contact</h2>
                <a href="https://github.com/itskumar666" ><img className="hover:brightness-50" src={gits} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/ashutosh-kumar-677a64237/" ><img className="hover:brightness-150 " src={linkdins} alt="" /></a>
                <a href="https://x.com/itskumar666" ><img className="hover:brightness-200" src={twitters} alt="" /></a>

               </div>
               }
            </div>
   </div>

   
        </div>
    );
}
