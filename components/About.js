import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import card1 from '../images/card1_.png'
import card2 from '../images/card2_.png'
import card3 from '../images/card3__.png'
import card4 from '../images/card4_.png'
import card5 from '../images/card5_.png'

const About = () => {
  return (
    <div
      id="aboutus"
      className="text-4xl text-white flex flex-col text-center w-full z-40 absolute top-[1100px]  md:top-[1300px] xl:top-[1500px]"
    >
      <Typewriter
        options={{
          strings: ['About Us '],
          autoStart: true,
          loop: true,
        }}
      />
      <p className="mt-12 text-xl tracking-wide leading-[1.9] mx-auto max-w-7xl">
        Mana-Maniacs is a 10,000 unique NFT project, designed to create
        community and to make a better world with our resources. 
        These algorithmically generated Maniacs are a gateway to a
        world of endless possibilities and future community oriented projects. 
        We invite you to be a part of the Mana-Maniacs community and 
        join likeminded individuals ready to be apart of the future.

        You can also find us on <a href="https://raritysniper.com/nft-drops-calendar">Rarity Sniper.</a>
      </p>
      <div className="my-12 cards w-[250px] md:w-[550px] lg:w-[700px] xl:w-[950px] mx-auto">
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
