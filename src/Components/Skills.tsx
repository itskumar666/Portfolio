import  { useEffect, useState, useRef } from 'react';
import skills from '../assets/skills.png'; // Import your image

export const Skills = () => {
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
        <div ref={ref} className="bg-gray-100 flex justify-center items-center w-full  overflow-hidden">
            <img
                src={skills}
                alt="Skills Image"
                className={`transition-transform duration-1000 ease-in-out ${animate ? 'translate-y-0 opacity-100' : '-translate-x-full opacity-0'}`}
            />
        </div>
    );
};
