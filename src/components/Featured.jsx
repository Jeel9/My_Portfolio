import { motion } from 'framer-motion'
import React, { useState } from 'react'
import EnpakImg from '../assets/Enpak Cover.png'
import SsImg from '../assets/SS Cover.png'
import KashImg from '../assets/Kash Cover.png'
import ParaImg from '../assets/Sample Select Cover.png'

// import EnpakImg from '../assets/Mockup 5-2.png'
// import SsImg from '../assets/Mockup 02-3.png'
// import KashImg from '../assets/Mockup 6.png'

import { NavLink } from 'react-router-dom'


function Featured() {
    const [isHovering1, setHovering1] = useState(false);
    const [isHovering2, setHovering2] = useState(false);
    const [isHovering3, setHovering3] = useState(false);
    const [isHovering4, setHovering4] = useState(false);

    const mystyle = { background: "linear-gradient(45deg, #bd8e57 0%, #384588 100%)" };

    return (
        <div data-scroll data-scroll-speed="0.6" className='z-[10] relative w-full bg-[#181818] text-[#e9e9e9] font-["Clash"] rounded-[2.2vw] pt-[12vh] pb-[100px] mt-[-390px]'>
            <div className='flex items-center gap-[12px] px-[5.5vw] pb-6'>
                <h1 className='text-[4vw] leading-none tracking-[-1.5px] font-semibold font-[tiny]'>Featured</h1>
                <h1 className='text-[4vw] leading-none font-semibold '> Projects</h1>
            </div>
            <div className="w-full border-t-[1px] border-zinc-800 py-[16px]">
            </div>

            <div className="Card-div flex gap-[32px] px-[5.5vw] py-[16px] w-full relative">
                {/* Card 1 */}

                <div
                    onMouseEnter={() => setHovering1(true)}
                    onMouseLeave={() => setHovering1(false)}
                    className='card w-1/2 rounded-2xl h-[38vw] overflow-hidden'>
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                        <h1 className="text-[#735B1C] flex overflow-hidden uppercase text-[4vw] font-medium">
                            {"Enpak".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={isHovering1 ? ({ y: "0" }) : ({ y: "100%" })} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                                    className='inline-block'>{item}
                                </motion.span>
                            )}
                        </h1>
                    </div>
                    <NavLink to='/project'>
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className='ImageContainer overflow-hidden rounded-[1.2vw] bg-[#0e0e0e]'>
                            <img src={EnpakImg} alt="Enpak App Image" />
                        </motion.div>
                    </NavLink>
                </div>

                {/* Card 2 */}
                <div onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)} className='card w-1/2 rounded-2xl h-[38vw] overflow-hidden'>
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                        <h1 className="text-[#2272FF] flex overflow-hidden uppercase text-[4vw] font-medium">
                            {"SaiSystems".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={isHovering2 ? ({ y: "0" }) : ({ y: "100%" })} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                                    className='inline-block'>{item}
                                </motion.span>
                            )}
                        </h1>
                    </div>
                    <NavLink to='/project'>
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className='ImageContainer overflow-hidden rounded-[1.2vw] bg-[#0e0e0e]'>
                            <img src={SsImg} alt="SaiSystems Dashboard Image" />
                        </motion.div>
                    </NavLink>
                </div>


            </div>

            <div className="Card-div flex gap-6 px-[5.5vw] py-[16px] w-full relative">

                {/* Card 3 */}
                <div onMouseEnter={() => setHovering3(true)} onMouseLeave={() => setHovering3(false)} className='card w-1/2 rounded-2xl h-[38vw] overflow-hidden'>
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                        <h1 className="text-[#1FB545] flex overflow-hidden uppercase text-[4vw] font-medium">
                            {"Kash".split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={isHovering3 ? ({ y: "0" }) : ({ y: "100%" })} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                                    className='inline-block'>{item}
                                </motion.span>
                            )}
                        </h1>
                    </div>
                    <NavLink to='/project'>
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className='ImageContainer overflow-hidden rounded-[1.2vw] bg-[#0e0e0e]'>
                            <img src={KashImg} alt="Kash App Image" />
                        </motion.div>
                    </NavLink>
                </div>

                {/* Card 4 */}
                <div onMouseEnter={() => setHovering4(true)} onMouseLeave={() => setHovering4(false)} className='card w-1/2 rounded-2xl h-[38vw] overflow-hidden'>
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                        <h1 className="text-[#F01919] flex overflow-hidden uppercase text-[4vw] font-medium">
                            {'Sample_Select'.split('').map((item, index) =>
                                <motion.span initial={{ y: "100%" }} animate={isHovering4 ? ({ y: "0" }) : ({ y: "100%" })} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                                    className='inline-block'>{item}
                                </motion.span>
                            )}
                        </h1>
                    </div>
                    <NavLink to='/project'>
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className='ImageContainer overflow-hidden rounded-[1.2vw] bg-[#0e0e0e]'>
                            <img src={ParaImg} alt="Sample Select App Image" />
                        </motion.div>
                    </NavLink>
                </div>
            </div>
        </div >
    )
}

export default Featured
