// import x from '../assets/x.png'
import twitters from '../assets/twitters.png'
// import twitterm from '../assets/twitterm.png'
import linkdins from '../assets/linkdins.png'
// import linkdinm from '../assets/linkdinm.png'
import gits from '../assets/gits.png'
// import gitm from '../assets/gitm.png'
import igs from '../assets/igs.png'
import phone from "../assets/phone.png"
import gmail from "../assets/gmail.png"
import { useState } from 'react'

export const Contacts=()=>{
    const [gt,setGt]=useState(false)
    const [pt,setPt]=useState(false)

    const gmailtoggle=()=>{
           setGt(!gt)
    }
    const pht=()=>{
        setPt(!pt)
    }

    return (
        <div>
            <div className='grid grid-rows-3 md:grid-cols-3 md: justify-items-center md:gap-14 grid-cols-2 gap-y-10 mt-16'>
                <div className='flex flex-row '>
                  {!gt && <img src={gmail} onClick={gmailtoggle} alt="gmail" />}
                  {gt && <p onClick={gmailtoggle} className='text-center justify-self-auto'>ashutosh666be@gmail.com</p> }

                </div>
                <div >
                  {!pt && <img src={phone} onClick={pht} alt="number" />}
                  {pt && <p onClick={pht} className='text-center'>+91-9621802295</p> }

                </div>
                 <div>
                   
                  <a href="https://github.com/itskumar666"> <img src={gits} alt="" />  Github</a>
                </div> <div>
                  <a href="https://x.com/itskumar666"> <img src={twitters} alt="" />Twitter</a>
                </div> <div>
                
                  <a href="https://www.linkedin.com/in/ashutosh-kumar-677a64237/">   <img src={linkdins} alt="" /> Linkdin</a>
                </div>
                <div>
                  <img src={igs} alt="" />
                  <a href="">Instagram</a>
                </div>
                
                

            </div>
            <div></div>
        </div>
    )
}