import { motion } from 'framer-motion'
import React, { useState } from 'react'
import myimg from '../assets/Resume_image.jpg'

function LandingPage() {

    const [isHovering1, setHovering1] = useState(false);

    const handleEmailClick = () => {
        window.location.href = 'mailto:uidsg.jeel@gmail.com?subject=Project%20Requirements&body=Please add your project requirements, expected deadline or duration and budget. If possible also provide a good time to talk so that I can revert back with a quotation. Thanks!';
    };

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
        <div data-scroll data-scroll-speed="-.5"
            className='w-full h-screen font-["Clash"] bg-[#0e0e0e] pt-1'>
            {/* <div className='HeroText mt-48 px-[5.5vw]'>
                 {["Your brand meets", "my skills", "a perfect combo!"].map((line, index) => 
                    <div className='masker'>
                        <div className="flex items-end justify-center">
                            {index === 1 && (
                                <motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} 
                                className='-mb-[1.5vw] mr-[2vh] w-[9vw] h-[6vw] bg-zinc-900 relative rounded-[0.5vw] overflow-hidden'>
                                    <img src={myimg} />
                                </motion.div>
                            )}
                            <h1 key={index} className='-mb-[3vw] text-[9vw] leading-[1.5] uppercase font-semibold'>{line}</h1>
                        </div>
                    </div>

                )}
            </div> */}

            <div className='HeroText mt-48 px-[5.5vw] text-[8vw] font-semibold tracking-tight'>
                <div className='text-[3vw] -mb-[0.5vw] leading-none font-[note] tracking-[1px]'>
                    I'm jeel,
                </div>
                <h1 className='leading-none -mb-[1.5vw] uppercase font-[clash]'>Product</h1>
                <div className="flex items-center">
                    <motion.div initial={{ width: "0vw" }} animate={{ width: "10vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                        className='mb-[0.2vw] mr-[2vh] w-[10vw] h-[5.8vw] bg-[#0e0e0e] relative rounded-[4vw] overflow-hidden'>
                        <img
                            src={myimg}
                            style={{
                                width: '100%',
                                height: 'calc(100% + 25px)',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: '0',
                                left: '0'
                            }}
                        />
                    </motion.div>
                    <h1 className='uppercase leading-none font-[tiny]'>Developer</h1>
                </div>
            </div>

            <div className='border-t-[1px] border-zinc-800 mt-[180px]'>
                <div className='Niche mt-4 px-[5.5vw] flex justify-between items-center'>
                    {["Mobile Apps", "Dashboards", "Websites"].map((line, index) => <div>
                        <h1 key={index} className='text-[14px] font-light'>{line}</h1>
                    </div>)}
                    <div className='button' onClick={handleEmailClick}>
                        <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} style={innerButtonStyles}>
                            ✨ Start a project
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
