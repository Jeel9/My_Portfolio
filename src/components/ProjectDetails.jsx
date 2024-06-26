import { React, useState } from 'react'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function ProjectDetails() {
    const [isHovering1, setHovering1] = useState(false);
    const innerButtonStyles = {
        padding: '8px 16px',
        border: '1px solid #3f3f3f',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '9999px',
        backgroundColor: isHovering1 ? '#181818' : '#0e0e0e',
        transition: 'background-color 0.3s ease',
    };
    return (
        <div
            className='w-full h-screen py-[2vw] bg-[#0e0e0e] text-[#d9d9d9] flex flex-col items-start'>
            <div className='button px-[5.5vw]'>
                <NavLink to="/">
                    <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} style={innerButtonStyles}>
                        ⬅️ Back
                    </div>
                </NavLink>
            </div>
            <div className='h-full flex items-center'>
                <div className='text border-t-[1px] border-b-[1px] border-[#696969] flex overflow-hidden whitespace-nowrap'>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
                        className='text-[12vw] font-["Clash"] tracking-[-0.2vw] uppercase font-semibold pr-16 -my-4'>
                        {/* Delivering Results - Design & Dev */}
                        ⚠️ Coming Soon
                    </motion.h1>
                    <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
                        className='text-[12vw] font-["Clash"] tracking-[-0.2vw] uppercase font-semibold pr-16 -my-4'>
                        {/* Delivering Results - Design & Dev */}
                        ⚠️ Coming Soon
                    </motion.h1>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails
