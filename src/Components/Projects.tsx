import React, { useEffect, useState, useRef } from 'react';
import wp from '../assets/wp.jpg';
import { ProjectList } from './ProjectList';

export const Projects = () => {
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                } else {
                    setAnimate(false);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
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
        <div ref={ref} className="px-4 pt-14 pb-5 md:px-14 md:py-28">
            <div className="flex flex-col md:flex-row md:gap-14">
                <div className={`pb-5 md:w-1/2 pr-8 transition-transform duration-1000 ease-in-out ${animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <h2 className="text-6xl font-bold mb-2 mx-2 md:text-6xl md:mb-12">Portfolio.</h2>
                    <p className="text-xl mb-4 mx-4 md:text-4xl">Check out some of my latest projects</p>
                    <p className="text-base mx-4 md:text-xl mb-4">
                        Experienced in MERN stack and 200+ LeetCode solutions, I've led multiple projects, harmonizing frontend finesse with backend robustness. Let's connect and bring your ideas to life!
                    </p>
                </div>
                <div className={`flex flex-col md:flex-row md:w-1/2 transition-transform duration-1000 ease-in-out ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <div>
                        <img className="rounded-3xl ml-3 w-10/12" src={wp} alt="Project Screenshot" />
                    </div>
                </div>
            </div>
            <div className={`md:pt-5 transition-transform duration-1000 ease-in-out ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <ProjectList />
            </div>
        </div>
    );
};
