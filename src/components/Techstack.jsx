import React from 'react'
import { CanvasRevealEffectDemo } from './Tech'
import dsg1 from '../assets/Grid Item-1.png';
import dsg2 from '../assets/Grid Item-2.png';
import dsg0 from '../assets/Grid Item.png';
import dsg3 from '../assets/Grid Item-3.png';

import web1 from '../assets/web1.png';
import web2 from '../assets/web2.png';
import web3 from '../assets/web3.png';
import web4 from '../assets/web4.png';
import web5 from '../assets/web5.png';
import web6 from '../assets/web6.png';

import app1 from '../assets/app1.png';
import app2 from '../assets/app2.png';
import app3 from '../assets/app3.png';
import app4 from '../assets/app4.png';


function Techstack() {

    return (
        <div className='w-full mt-[-32vh] px-[5.5vw] flex flex-col items-center justify-center font-[clash]'>
            <div className='flex items-center gap-[8px]'>
                <h1 className='text-[4vw] leading-none font-semibold font-[tiny]'>Technology</h1>
                <h1 className='text-[4vw] leading-none tracking-[-1.5px] font-semibold '>I use</h1>
            </div>
            <CanvasRevealEffectDemo dsglist={[dsg0, dsg3, dsg1, dsg2]}
                weblist={[web4, web2, web3, web1, web5, web6]}
                applist={[app4, app3, app1, app2]}
            />
        </div>
    )
}

export default Techstack
