// import React from 'react';
import sphere from '../assets/sphere.jpg'
import vsphere from '../assets/vsphere.png'

export const ExperiencePage = () => {
    return (
        <div className="px-4 md:px-16 md:py-16  ">
            <h2 className=" text-4xl font-bold mb-8 mx-2 md:text-6xl  ">Experience & Learnings</h2>
            <div className=" flex flex-col gap-2 md:flex-row md:gap-20 justify-center ">
                

                <div className="mb-8 mx-8 md:w-2/6 md:mt-2">
                    <h3 className="text-xl font-bold my-2 md:text">Software Engineer</h3>
                    <p className="text-gray-600 my-2">Full Stack Developer , Softintra</p>
                    <p className="text-gray-700 my-2">Feb 2024 - Present</p>
                    <p>
Improved user engagement by 35% with a mobile-friendly web platform, expanding user reach by 50%. Mentored 2 junior developers on MERN stack and SQL databases, increasing project efficiency by 20%. Collaborated with 8 developers to launch a program, generating $40k revenue in its first quarter.</p>
                </div>
                <div className="md:block hidden h-2/6 w-2/6 md:pt-16"> <img src={sphere} alt="" /></div>  
                <div className="ml-24 mb-7 w-2/6  md:hidden"><img src={vsphere} alt="" /></div>

                <div className="mb-8 mx-8 md:w-2/6 md:mt-56 md:pl-5">
                    <h3 className="text-xl font-bold my-2 md:text">Intern</h3>
                    <p className="text-gray-600 my-2">Backend Developer, Softintra</p>
                    <p className="text-gray-700 my-2">June 2023 - Aug 2023</p>
<p>
Implemented JWT, zod and bcrypt with Node.js for secure login and session control, reducing breaches by 75%. Collaborated for clear project requirements, delivering solutions exceeding client expectations by 20%. Developed 10+ web apps with HTML, CSS, and JS, increasing user engagement by 30%.</p>                </div>
            </div>
        </div>
    );
};

