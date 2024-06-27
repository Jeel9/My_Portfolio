import React, { useState } from 'react'


function Navbar({ onAboutClick, onProjClick }) {

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
    // <div className='fixed z-[999] w-full px-[5.5vw] py-[1vw] flex items-center justify-between'>
    //   <a href="https: jeelportfolio.vercel.app" className='flex gap-[8px] items-center'>
    //     <svg width="40" height="40" viewBox="0 0 134 132" fill="none" xmlns="http: www.w3.org/2000/svg">
    //       <path d="M67.5 27L85.5 27L39.4341 107.364L30.5 91.5L67.5 27Z" fill="white" />
    //       <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9632 84.6188L49.0309 42.9323H0.895508L24.9632 84.6188ZM24.9282 65.0718L31.8564 53.0718H18L24.9282 65.0718Z" fill="white" />
    //       <path d="M59.5 96L76.5 96L69.6924 108.367L52 108.367L59.5 96Z" fill="white" />
    //       <path fill-rule="evenodd" clip-rule="evenodd" d="M133.315 89L97.519 27L61.7233 89H133.315ZM108.134 74.5934L97.8298 56.7458L87.5256 74.5934H108.134Z" fill="white" />
    //     </svg>
    //   </a>
    //   <div className="links font-['Clash'] flex gap-8 pl-[24vw]">
    //     <a className={`text-[14px] capitalize`} href="#" onClick={onProjClick}>
    //       Projects
    //     </a>
    //     <a className={`text-[14px] capitalize`} href="#" onClick={onAboutClick}>
    //       About
    //     </a>
    //     <a className={`text-[14px] capitalize`} href="https: github.com/Jeel9">
    //       Github
    //     </a>
    //   </div>
    //   <div className='button font-["Clash"] pl-[17vw]'>
    //     <a href="https: calendly.com/uidsg-jeel/development-call">
    //       <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} style={innerButtonStyles}>
    //         🗓️ Book a call
    //       </div>
    //     </a>
    //   </div>
    // </div>

    <div className="fixed z-[999] w-full px-[5.5vw] py-[8px] flex items-center justify-between backdrop-blur-[20px] bg-[rgba(14,14,14,0.7)] border-b border-neutral-700/80">
      {/* <div div className="container px-4 mx-auto relative text-sm" >
        <div className="flex justify-center items-center">
        </div>
      </div> */}
      {/* <div className='fixed z-[999] w-full px-[5.5vw] py-[1vw] flex items-center justify-between'> */}
      <a href="https://jeelportfolio.vercel.app" className='flex gap-[8px] items-center'>
        <svg width="40" height="40" viewBox="0 0 134 132" fill="none" xmlns="http: www.w3.org/2000/svg">
          <path d="M67.5 27L85.5 27L39.4341 107.364L30.5 91.5L67.5 27Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9632 84.6188L49.0309 42.9323H0.895508L24.9632 84.6188ZM24.9282 65.0718L31.8564 53.0718H18L24.9282 65.0718Z" fill="white" />
          <path d="M59.5 96L76.5 96L69.6924 108.367L52 108.367L59.5 96Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M133.315 89L97.519 27L61.7233 89H133.315ZM108.134 74.5934L97.8298 56.7458L87.5256 74.5934H108.134Z" fill="white" />
        </svg>
      </a>
      <div className="links font-['Clash'] flex gap-8 pl-[24vw]">
        <a className={`text-[14px] capitalize`} href="#" onClick={onProjClick}>
          Projects
        </a>
        <a className={`text-[14px] capitalize`} href="#" onClick={onAboutClick}>
          About
        </a>
        <a className={`text-[14px] capitalize`} href="https: github.com/Jeel9">
          Github
        </a>
      </div>
      <div className='button font-["Clash"] pl-[17vw]'>
        <a href="https://calendly.com/uidsg-jeel/development-call">
          <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} style={innerButtonStyles}>
            🗓️ Book a call
          </div>
        </a>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Navbar
