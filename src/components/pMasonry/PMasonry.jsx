import React, { useEffect, useState } from 'react'
import { workTypes } from '../../pages/skills/data';
import {motion} from 'framer-motion'
const PMasonry = ({ projects,height }) => {
    const [ar, setAr] = useState(projects)
    const [count, setCount] = useState([]);
    useEffect(() => {
        const somethingToCount= () => {
            let y =workTypes.map((item, index) => {
                let x = 0;
                ar.forEach(element => {
                    element.clss.includes(item.name) && x++;
                });
                return (x);
            })
            setCount(y);
        }
        setAr(projects);    
        somethingToCount();
    }, [projects,ar])
    const [filterProjects, setFilterProjects] = useState(ar);
    const [activeFilter, setActiveFilter] = useState('All');
    const [hovered, setHovered] = useState({card:-1,filter:-1});
    const handleFilterClick = (item) => {
    setActiveFilter(item);
    if (item === 'All') {
        setFilterProjects(ar);
    }
    else {
        setFilterProjects(ar.filter((project) => project.clss.includes(item)));
        }
    }
    return (
        <div className='portfolio__portfolio-masonry container mx-auto relative max-w-full md:p-6 p-8'>
            <div className="portfolio__home-projects__content lg:w-auto w-full lg:p-16 lg:pb-0">
                <div className="portfolio__home-projects__content-text relative lg:w-4/6 ">
                    <div className="portfolio__home-container__about_me-content__pseudo lg:-rotate-90 absolute lg:-left-32 lg:top-24 text-xl flex -top-6 left-0 items-center gap-3">
                        <span className='block w-24  background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                        <span style={{ color: '#adadad' }} >my works</span>
                    </div>
                    <h3 className="text-light-dark leading-normal text-4xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >Meet My Projects</h3>
                    <p className="text-61 mt-6 leading-8 text-lg">Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital designs. These are the words we live by in everything we do.</p>
                    <ul className="flex gap-6 mt-10 md:flex-nowrap flex-wrap">
                        {workTypes.map((item, index) => {
                            return (<li key={index} onClick={() => handleFilterClick(item.name)} onMouseEnter={() => setHovered((prev)=>{return({prev,filter:index})})} onMouseLeave={() => setHovered((prev)=>{return({prev,filter:-1})})} className={` cursor-pointer hover:text-darkYellow transition relative text-light-dark text-xl font-semibold duration-300 ${item.name === activeFilter ? 'text-darkYellow' : ' '}`} >
                                {item.name}
                                <span className={`before:content-['('] after:content-[')'] absolute text-sm top-0 right-0 text-darkYellow transition-all duration-300 ease-linear translate-x-full ${item.name === activeFilter|| hovered.filter===index ? ' opacity-100 -translate-y-2/3  ' : ' opacity-0'}`} >{count[index]}</span>
                            </li>)
                        })}
                    </ul>
                </div>
                <div id='cards' style={{height:height}} className={`portfolio__home-projects__content-cards grid  ${ projects.length===8?'md:grid-rows-4': ' md:grid-rows-6' } md:grid-cols-4  gap-7 md:px-4 px-8 max-w-full container xs:my-8 my-4`}>
                    {filterProjects.map((ele, index) => {
                        let grd;
                        if (Math.floor((index + 1) / 4) % 2 === 0) {
                            if ((index + 1) % 4 === 1) {
                                grd='md:col-span-2 col-span-1 row-span-1 md:row-span-2'
                            }
                            else if ((index + 1) % 4 === 2) {
                                grd='md:col-span-2 col-span-1 row-span-1 md:row-span-1'
                            }
                            else if ((index + 1) % 4 === 3 ||(index + 1) % 4 === 0 ) {
                                grd='md:col-span-1 col-span-1 row-span-1 md:row-span-1'
                            }
                        }
                        else {
                            if ((index + 1) % 4 === 1) {
                                grd='md:col-span-2 col-span-1 row-span-1 md:row-span-1'
                            }
                            else if ((index + 1) % 4 === 2) {
                                grd='md:col-span-2 col-span-1 row-span-1 md:row-span-2'
                            }
                            else if ((index + 1) % 4 === 3 ||(index + 1) % 4 === 0 ) {
                                grd='md:col-span-1 col-span-1 row-span-1 md:row-span-1'
                            }
                        }
                        return (
                            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .50,delay:0.10 }} key={index} onMouseEnter={() => setHovered((prev)=>{return({prev,card:index})})} onMouseLeave={() => setHovered((prev)=>{return({prev,card:-1})})} className={`portfolio__home-projects__content-cards__card rounded-lg bg-darkYellow transition-all duration-300 ease-linear relative ${grd} col-span-full, ${ele.clss} col-span-1,`}>
                                <span href="#ffg" className={`block  cursor-pointer overflow-hidden transition-all duration-300 w-full h-full relative ${hovered.card === index ? 'translate-x-5 translate-y-5  ' : ' '}`} >
                                    <img src={ele.image} className='object-cover object-center. object-top w-full h-full rounded-lg' alt="project" />
                                    <div className={`portfolio__home-projects__content-cards__card-overtext transition-all rounded-lg opacity-0 duration-300 flex items-center lg:p-0 p-2 text-white absolute bottom-0 rounded-b-md w-full h-full bg-opacity-50 ${hovered.card === index ? ' bg-lightDark' : ' '}`}>
                                        <div className=' absolute bottom-8 px-10' >
                                            <a href="#ffg" className='inline-block mb-2' >
                                                <h3 className='hover:text-darkYellow transition-all  duration-400 text-2xl font-bold tracking-wide ' style={{ wordSpacing: 4 }} >{ele.title}</h3>
                                            </a>
                                            <div>
                                                {ele.text.map((item, index) => {
                                                    return (
                                                        <a key={index} href="#ffg" className="inline-block mr-2">
                                                            <p className="hover:text-darkYellow transition-all duration-300 ">{item}{(index !== ele.text.length - 1) && <i className="fa-sharp fa-solid fa-square mx-2 text-white -translate-y-1/3 " style={{ fontSize: 8 }}></i>}</p >
                                                        </a>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PMasonry