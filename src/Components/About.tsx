import  { useEffect, useState, useRef } from 'react';
import my from '../assets/my.jpg'; // Import your image

export const About = () => {
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
        <div ref={ref} className="relative px-12 md:px-18 py-5 mb-10 lg:px-32 md:mt-10">
            <div className="flex flex-col md:flex-row gap-16 -mb-6">
                <div className={`hidden md:flex pt-16 w-1/2 h-1/2 relative z-10 transition-transform  duration-1000  ease-in ${animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <img src={my} alt="My Image" className="w-full h-auto" />
                </div>
                <div className={`md:w-1/2 pr-8 md:mt-10 transition-transform duration-1000 ease-in-out ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <h2 className="text-4xl md:text-8xl font-bold mb-4">About.</h2>
                    <p className="text-xl mb-4 md:text-4xl">Web Developer</p>
                    <p className="text-base md:text-xl mb-4">
                    With a focus on both front and back-end development, I've been crafting robust solutions since 2022. Whether it's building intuitive user interfaces or optimizing server-side operations, I thrive on tackling complex challenges. Outside of coding, you'll find me exploring my passions for cooking, gardening, or staying active outdoors.
                    </p>
                </div>
                <div className={`md:hidden flex justify-center pb-4 transition-transform duration-1000 ease-in-out ${animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <img src={my} alt="My Image" className="w-full h-auto" />
                </div>
            </div>
            <div className="md:absolute bottom-0 left-0 w-full border-t-2 border-gray-200 z-20 -mt-4 px-18"></div>
        </div>
    );
};
