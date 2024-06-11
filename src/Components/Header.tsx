import { useState } from 'react';
// import logo from '../assets/logo.png'; 
import menu from '../assets/menu.png'; 
import logo2 from '../assets/logo2.png'

export const Header = () => {
    const [toggle,setToggle]=useState(false)
    const togglehandler=()=>{
        setToggle(!toggle)
    }
    return (
        <div className="flex justify-between text-white bg-stone-500 py-2">
            <div className='w-14 items-center ml-10 rounded-full md:ml-28'>
                <img src={logo2} className="  brightness-200" alt="" />
            </div>
          
            <div className='hidden md:flex justify-between   items-center text-xl mr-5 lg:mr-28 gap-14'>
                <h2 className="hover:text-black">Portfolio</h2>
                <h2 className="hover:text-black">Skills</h2>
                <h2 className="hover:text-black">Email</h2>
                <a href="https://github.com/itskumar666" className="hover:text-black">GitHub</a>
                <a href="https://www.linkedin.com/in/ashutosh-kumar-677a64237/" className="hover:text-black">LinkedIn</a>
                <a href="https://x.com/itskumar666" className="hover:text-black">Twitter</a>
            </div>
            <div className='md:hidden mr-2'>
              
              {!toggle &&
               <img onClick={togglehandler} className=" rounded-full" src={menu} alt="" />}
               {toggle && 
               <div className='h-screen grid grid-rows-12 place-items-center text-black'>
                <button onClick={togglehandler}>X</button>
                <h2 className="hover:text-white">About</h2>
                <h2 className="hover:text-white">Portfolio</h2>
                <h2 className="hover:text-white">Skills</h2>
                <h2 className="hover:text-white">blog</h2>
                <h2 className="hover:text-white">ashutosh666be@gmail.com</h2>
                <a className="hover:text-white" href="https://github.com/itskumar666" >GitHub</a>
                <a href="https://www.linkedin.com/in/ashutosh-kumar-677a64237/" className="hover:text-white">LinkedIn</a>
                <a href="https://x.com/itskumar666">Twitter</a>

               </div>
               }
            </div>

        </div>
    );
}
