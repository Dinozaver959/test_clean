import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import card1 from '../images/card1.jpeg'
import card2 from '../images/card2.jpeg'
import card3 from '../images/card3.jpeg'
import card4 from '../images/card4.jpeg'
import card5 from '../images/card5.jpeg'

const About = () => {
  return (
    <div
      id="aboutus"
      className="text-4xl text-white flex flex-col text-center w-full z-40 absolute top-[900px]  md:top-[1300px] lg:top-[1600px]"
    >
      <Typewriter
        options={{
          strings: ['About Us '],
          autoStart: true,
          loop: true,
        }}
      />
      <p className="mt-12 text-xl tracking-wide leading-[1.9] mx-auto max-w-7xl">
        Crypto Lions is a 9,999 unique NFT project, strictly designed to create
        community. These algorithmically generated Lions are a gateway to a
        world of endless possibilities, passive income and future community
        oriented projects. We invite you to be apart of the Lion community and
        join likeminded individuals ready to be apart of the future.
      </p>
      <div className="my-12 cards w-[400px] md:w-[550px] lg:w-[700px] xl:w-[950px] mx-auto">
        <div className="flex mb-6 gap-x-6">
          <div className="card z-50">
            <Image src={card1} style={{ borderRadius: '10px' }} alt="card1" />
          </div>
          <div className="card z-40">
            <Image src={card2} style={{ borderRadius: '10px' }} alt="card2" />
          </div>
          <div className="card">
            <Image src={card3} style={{ borderRadius: '10px' }} alt="card3" />
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="card z-50">
            <Image src={card4} style={{ borderRadius: '10px' }} alt="card4" />
          </div>
          <div className="card ">
            <Image src={card5} style={{ borderRadius: '10px' }} alt="card5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About