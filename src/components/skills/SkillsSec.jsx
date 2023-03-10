import React from 'react'
import { images } from '../../constants'
import ProgressOne from '../progress/ProgressOne'
const SkillsSec = ({scrolledToSkills}) => {
    return (
        <div  className='container py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-6'>
            <div className="left-side md:max-w-1/2 max-w relative">
                <img src={images.skills01} className='max-w-full relative' alt="skills01" />
                <img src={images.skills02} className='max-w-full absolute -z-10 bottom-0' alt="skills02" />
            </div>
            <div className="right-side flex-1, lg:max-w-40 max-w-full lg:px-7 px-4 md:right-6 relative ">
                <div className="md:-rotate-90 absolute md:-left-20 mr-4 md:top-16 -top-4 left-0 text-xl  flex items-center gap-3">
                    <span className='block w-16 h-px' style={{ backgroundColor: '#adadad' }}></span>
                    <span style={{ color: '#adadad' }}  >my skills</span>
                </div>
                <h3 className="text-lightDark leading-normal xs:text-5xl text-3xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >What My Design<br/>Skills Included</h3>
                <p className="text-61 mt-6 leading-8 text-lg">These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
                <div className="mt-6">
                    <ProgressOne bgcolor="orange" progress={scrolledToSkills ? 80 : 0} time={1} item='PHOTOSHOP' height={4} />
                </div>
                <div className="mt-6">
                    <ProgressOne bgcolor="orange" progress={scrolledToSkills ? 90 : 0} time={1} item='ILLUSTRATOR' height={4} />
                </div>
                <div className="mt-6">
                    <ProgressOne bgcolor="orange" progress={scrolledToSkills ? 70 : 0} time={1} item='SKETCH' height={4} />
                </div>
            </div>
        </div>
    )
}

export default SkillsSec