// import React from 'react';
import sphere from '../assets/sphere.jpg'
import vsphere from '../assets/vsphere.png'

export const ExperiencePage = () => {
    return (
        <div className="px-4 md:px-16 md:py-36  ">
            <h2 className=" text-4xl font-bold mb-8 mx-2 md:text-6xl md:mb-28 ">Experience & Learnings</h2>
            <div className=" flex flex-col gap-2 md:flex-row md:gap-20 justify-center ">
                

                <div className="mb-8 mx-8 md:w-2/6">
                    <h3 className="text-xl font-bold my-2 md:text">Software Engineer</h3>
                    <p className="text-gray-600 my-2">Company Name, Location</p>
                    <p className="text-gray-700 my-2">January 2022 - Present</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quae eos delectus harum sapiente obcaecati aliquam cum debitis officiis! Eum a ipsa ab fugiat accusamus exercitationem aperiam, autem obcaecati deleniti?</p>
                </div>
                <div className="md:block hidden h-2/6 w-2/6"> <img src={sphere} alt="" /></div>  
                <div className="ml-32 mb-7 w-2/6  md:hidden"><img src={vsphere} alt="" /></div>

                <div className="mb-8 mx-8 md:w-2/6">
                    <h3 className="text-xl font-bold my-2 md:text">Software Engineer</h3>
                    <p className="text-gray-600 my-2">Company Name, Location</p>
                    <p className="text-gray-700 my-2">January 2022 - Present</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quae eos delectus harum sapiente obcaecati aliquam cum debitis officiis! Eum a ipsa ab fugiat accusamus exercitationem aperiam, autem obcaecati deleniti?</p>
                </div>
            </div>
        </div>
    );
};

