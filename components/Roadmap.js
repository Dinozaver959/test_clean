import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'
import roadmap1 from '../images/roadmap1.png'
import roadmap2 from '../images/roadmap2.png'
import roadmap3 from '../images/roadmap3.png'
import roadmap4 from '../images/roadmap4.png'
import roadmap5 from '../images/roadmap5.png'

import roadmap1_new from '../images/roadmap1_new.png'
import roadmap2_new from '../images/roadmap2_new.png'
import roadmap3_new from '../images/roadmap3_new.png'

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="text-4xl text-white bg-[#000000b3] py-16 flex flex-col text-center z-40 relative top-[300px] sm:top-[200px] md:top-[400px] lg:top-[800px]"
    >
      <Typewriter
        options={{
          strings: ['Roadmap '],
          autoStart: true,
          loop: true,
        }}
      />
      <p className="my-20 text-base md:text-lg tracking-wide leading-6 mx-auto max-w-[550px]">
        Pre-Mint Large scale Marketing budget <br /> <br />
        Pre-Mint NFT + Whitelist giveaways on our socials
      </p>
      
      {/* 
      <div>
        <div className="roadmap">
          <Image src={roadmap1} alt="roadmap1" />
        </div>
        <div className="roadmap md:!mr-[30%]">
          <Image src={roadmap2} alt="roadmap2" />
        </div>
        <div className="roadmap">
          <Image src={roadmap3} alt="roadmap3" />
        </div>
        <div className="roadmap md:!mr-[30%]">
          <Image src={roadmap4} alt="roadmap4" />
        </div>
        <div className="roadmap">
          <Image src={roadmap5} alt="roadmap5" />
        </div>
      </div>
      */}

      <div>
        <div className="roadmap">
          <Image src={roadmap1_new} alt="roadmap1" />
        </div>
        <div className="roadmap md:!mr-[30%]">
          <Image src={roadmap2_new} alt="roadmap2" />
        </div>
        <div className="roadmap">
          <Image src={roadmap3_new} alt="roadmap3" />
        </div>
      </div>

    </div>
  )
}

export default Roadmap
