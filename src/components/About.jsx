import React from 'react'
import WF from '../assets/WF logo.png'

function About() {

  var aboutPara = ['I love art and making new stuff from broken toys since I was a kid. From sketchs to drones, I enjoyed bringing my ideas to life.',
    'Art & Technology are my passion and designing and developing a product from scratch has now became my hobby. More over my UI/UX knowledge has helped me a lot in building minimal yet eye-catchy products. My core specialisation lies in building robust design systems and mobile apps.',
    "When I'm not grinding away at work, catch me at the Volleyball park, or simply soaking in the beauty of sunsets!",
  ]

  return (
    <div data-scroll data-scroll-speed=".9" className='About relative w-full flex gap-[10vw] py-[12vh] px-[5.5vw] rounded-[2.2vw] bg-[#d9d9d9] text-[#0e0e0e] mt-[-400px]'>
      <div className='flex items-top mt-[1.1vw]'>
        <h1 className='text-[4vw] leading-none font-semibold font-[tiny] mr-[-6px]'>A</h1>
        <h1 className='text-[4vw] leading-none tracking-[-1.5px] font-semibold font-[clash]'>bout</h1>
      </div>
      {/* <div className="w-full border-t-[1px] border-[hsl(72,45%,60%)]"></div> */}
      <div className='My Content'>
        {aboutPara.map((line, index) => <h1 key={index} className="font-['Clash'] text-[2.1vw] text-color-black mt-[1.1vw]">{line}</h1>
        )}

        <div className='CurrentJob'>
          <p className="font-['Clash'] font-medium text-[1vw] uppercase text-color-black mt-[4vw]">Empowering Tech at -</p>
          <div className="Company flex mt-[12px]">
            <img src={WF} className='overflow-hidden w-[3vw] h-[3vw] rounded-md' />
            <div className='pl-[16px]'>
              <p className="font-['Clash'] font-medium text-[1vw] text-color-black">Program Analyst</p>
              <p className="font-['Clash'] text-[1vw] text-[#454545] ">Wells Fargo</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default About
