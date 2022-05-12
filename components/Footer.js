import Image from 'next/image'
import React from 'react'
import twitter from '../images/twitter.png'
import discord from '../images/discord.png'
import instagram from '../images/instagram.png'
import openseas from '../images/openseas.png'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-[#000000b3] text-white  relative top-[200px] md:top-[400px] lg:top-[800px] py-16">
      <div className="flex justify-center gap-x-6">    

        <Link href="https://twitter.com/ManaManiacsNFT" passHref> 
          <a target="_blank" rel="noopener noreferrer">
          <Image src={twitter} alt="twitter_icon" height="40px" width="40px" />
          </a>  
        </Link> 

        <Link href="https://discord.gg/CBhxQDhV" passHref> 
          <a target="_blank" rel="noopener noreferrer">
          <Image src={discord} alt="discord_icon" height="40px" width="40px" />
          </a>  
        </Link> 

        <Image src={openseas} alt="opensea_icon" height="40px" width="40px" />
      </div>

      <span className="flex justify-center gap-x-3 mt-4">
        © All right Reserved{' '}
        <span className="text-[#0d6efd]"> Mana-Maniacs</span>
      </span>

    </div>
  )
}

export default Footer
