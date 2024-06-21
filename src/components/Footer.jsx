import React, { useEffect, useState } from 'react'

function Footer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])

    return (
        <div className='w-full pb-[12vw] mt-[-2vh] px-[5.5vw] text-[#d9d9d9] bg-[#0e0e0e] font-["Clash"] flex gap-6'>

            <div className='w-1/2 h-full'>
                <a href="">
                    <svg width="64" height="64" viewBox="0 0 134 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.5 27L85.5 27L39.4341 107.364L30.5 91.5L67.5 27Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9632 84.6188L49.0309 42.9323H0.895508L24.9632 84.6188ZM24.9282 65.0718L31.8564 53.0718H18L24.9282 65.0718Z" fill="white" />
                        <path d="M59.5 96L76.5 96L69.6924 108.367L52 108.367L59.5 96Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M133.315 89L97.519 27L61.7233 89H133.315ZM108.134 74.5934L97.8298 56.7458L87.5256 74.5934H108.134Z" fill="white" />
                    </svg>
                    {/* <svg width="40" height="40" viewBox="0 0 134 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M67.5 27L85.5 27L39.4341 107.364L30.5 91.5L67.5 27Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9632 84.6188L49.0309 42.9323H0.895508L24.9632 84.6188ZM24.9282 65.0718L31.8564 53.0718H18L24.9282 65.0718Z" fill="black" />
                        <path d="M59.5 96L76.5 96L69.6924 108.367L52 108.367L59.5 96Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M133.315 89L97.519 27L61.7233 89H133.315ZM108.134 74.5934L97.8298 56.7458L87.5256 74.5934H108.134Z" fill="black" />
                    </svg> */}
                </a>
                {/* <div className='text-[1vw] text-[#909090] mt-3'>
                    Jeel Patel
                </div> */}
            </div>
            <div className='w-1/2 h-full'>
                {/* <div className="bookcall">
                        <div className='bookcall text-[1vw] font-semibold'>
                            Want to discuss an idea over a short call?
                        </div>
                        <div className='button flex mt-2'>
                            <div className='px-4 py-2 border-[1px] border-[hsl(171,44%,27%)] text-[12px] font-regular rounded-full'>Book a call</div>
                        </div>
                    </div> */}

                <div className="place flex gap-[4px] justify-end">
                    <div className='text-[2vw] font-medium'>
                        Bengaluru, INDIA
                    </div>
                    <div className='text-[2vw] font-normal'>
                        -  {time.toLocaleTimeString()}
                    </div>
                </div>
                <div className='text-[1vw] text-[#909090] mt-3 flex justify-end '>
                    Made with passion & a glass of cold milk 🥛
                </div>
            </div>
        </div>
    )
}

export default Footer
