import { useEffect, useState, useRef } from 'react';
import sphere from '../assets/sphere.jpg';
import vsphere from '../assets/vsphere.png';

export const ExperiencePage = () => {
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                   
                }
             else {
                setAnimate(false);
            }
            },
            { threshold: 0.3 } // Trigger when 10% of the component is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="px-4 md:px-16 md:py-16">
            <h2 className={`text-4xl font-bold mb-8 mx-2 md:text-6xl transition-transform duration-1000 ease-in-out ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Experience & Learnings
            </h2>
            <div className="flex flex-col gap-2 md:flex-row md:gap-20 justify-center">
                <div className={`mb-8 mx-8 md:w-2/6 md:mt-2 transition-transform duration-1000 ease-in-out ${animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <h3 className="text-xl font-bold my-2 md:text">Software Engineer</h3>
                    <p className="text-gray-600 my-2">Full Stack Developer, Softintra</p>
                    <p className="text-gray-700 my-2">Feb 2024 - Present</p>
                    <p>
                        Improved user engagement by 35% with a mobile-friendly web platform, expanding user reach by 50%. Mentored 2 junior developers on MERN stack and SQL databases, increasing project efficiency by 20%. Collaborated with 8 developers to launch a program, generating $40k revenue in its first quarter.
                    </p>
                </div>
                <div className={`md:block hidden h-2/6 w-2/6 md:pt-16 transition-transform duration-1000 ease-in-out ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <img src={sphere} alt="Sphere" />
                </div>
                <div className={`ml-24 mb-7 w-2/6 md:hidden transition-transform duration-1000 ease-in-out ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <img src={vsphere} alt="Vertical Sphere" />
                </div>
                <div className={`mb-8 mx-8 md:w-2/6 md:mt-56 md:pl-5 transition-transform duration-1000 ease-in-out ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <h3 className="text-xl font-bold my-2 md:text">Intern</h3>
                    <p className="text-gray-600 my-2">Backend Developer, Softintra</p>
                    <p className="text-gray-700 my-2">June 2023 - Aug 2023</p>
                    <p>
                        Implemented JWT, zod and bcrypt with Node.js for secure login and session control, reducing breaches by 75%. Collaborated for clear project requirements, delivering solutions exceeding client expectations by 20%. Developed 10+ web apps with HTML, CSS, and JS, increasing user engagement by 30%.
                    </p>
                </div>
            </div>
        </div>
    );
};
