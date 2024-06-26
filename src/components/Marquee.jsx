import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
    return (
        <div data-scroll data-scroll-speed=".1"
            className='w-full py-[6vw] rounded-tl-[24px] rounded-tr-[24px] bg-[#d9d9d9] text-[#0e0e0e] '>
            <div className='text border-t-[1px] border-b-[1px] border-[#696969] flex overflow-hidden whitespace-nowrap'>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
                    className='text-[12vw] font-["Clash"] tracking-[-0.2vw] uppercase font-semibold pr-16 -my-4'>
                    {/* Delivering Results - Design & Dev */}
                    🚀 driving results
                </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
                    className='text-[12vw] font-["Clash"] tracking-[-0.2vw] uppercase font-semibold pr-16 -my-4'>
                    {/* Delivering Results - Design & Dev */}
                    🚀 driving results
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee
