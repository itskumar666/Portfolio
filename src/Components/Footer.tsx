
import logo2 from '../assets/logo2.png'


import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate=useNavigate()
  
  const nav=()=>{
    navigate('/')
  }



    return (
        <div>
        <div className=" hidden md:flex justify-between text-white bg-stone-300 ">
            
            <div className='w-14 items-center ml-10 rounded-full md:ml-28'>
                <img src={logo2} className=" hover:brightness-150 brightness-100 "onClick={nav} alt="" />
            </div>
            <div className='mr-10 mt-5 items-center  rounded-full'>
             <a href="https://github.com/itskumar666">Site By @itskumar666</a>
            </div>
           
            
   </div>
   

   
        </div>
    );
}
