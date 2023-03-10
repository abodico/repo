import React, { useEffect, useRef, useState } from 'react'
import { images } from '../../constants';
import ProgressOne from '../progress/ProgressOne';
const TeamSkills = () => {
    const skillsRef = useRef();
    const [scrolledToSkills, setScrolledToSkills] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            const skills = skillsRef.current.offsetTop
            onscroll = () => {
                if (window.scrollY >= skills - 300) {
                    setScrolledToSkills(true);
                }
            }
        }, 10);
    }, []);
    return (
        <div ref={skillsRef} className=' flex md:flex-row container flex-col py-24 items-center gap-12 px-16 relative overflow-hidden bg-section'>
            <div className=" flex-1 lg:max-w-1/2 max-w-full lg:px-8 relative z-10 ">
                <div className="md:-rotate-90 absolute md:-left-24 mr-4 md:top-20 -top-4 left-0 text-xl flex items-center gap-3">
                    <span className='block w-16 background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                    <span style={{ color: '#adadad' }} >my skills</span>
                </div>
                <h3 className="text-lightDark xs:text-5xl text-3xl tracking-wide font-semibold leading-relaxed" style={{ wordSpacing: '8px' }} >What My Design<br/> Skills Included</h3>
                <p className="text-61 mt-6 leading-8 text-lg">These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
                <p className="text-61 my-6 leading-8 text-lg">Since 2015 I have been a visionary and a reliable software engineering partner for world-class brands.</p>
                <img src={images.maxnimbus} alt="maxnimbus" />
            </div>
                <img src={images.team_01} className=' max-w-full absolute right-0 -top-4' alt="team_01" />
            <div className="w-full md:max-w-1/2 relative">
                <div className="portfolio__team-skills-content__progress mt-6">
                    <ProgressOne bgcolor="orange" progress={scrolledToSkills ? 80 : 0} time={1} item='PHOTOSHOP' height={4} />
                </div>
                <div className="portfolio__team-skills-content__progress mt-6">
                    <ProgressOne bgcolor="orange" progress={scrolledToSkills ? 90 : 0} time={1} item='ILLUSTRATOR' height={4} />
                </div>
                <div className="portfolio__team-skills-content__progress mt-6">
                    <ProgressOne bgcolor="orange" progress={scrolledToSkills ? 70 : 0} time={1} item='SKETCH' height={4} />
                </div>
                <div className="portfolio__team-skills-content__progress mt-6">
                    <ProgressOne bgcolor="orange" progress={scrolledToSkills ? 80 : 0} time={1} item='AFTER EFFECT' height={4} />
                </div>
            </div>
        </div>
    );
}

export default TeamSkills