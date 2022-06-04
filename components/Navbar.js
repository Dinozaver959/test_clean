import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../images/logo.png'
import Hamburger from 'hamburger-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="bg-[#000000b3] flex justify-between w-full h-24 z-50 fixed top-0">

      {isOpen ? (
        <>
          <div className="absolute top-[96px] flex flex-col bg-[#000000b3] w-full p-8 items-start gap-y-4">  {/* top-[108px] */}
            <a href="#home" className="nav-btn">
              Mint
            </a>
            <a href="#aboutus" className="nav-btn">
              About Us
            </a>
            <a href="#roadmap" className="nav-btn">
              Roadmap
            </a>
            <a href="#team" className="nav-btn">
              Team
            </a>
            <a href="#faq" className="nav-btn">
              FAQ
            </a>

            <Link href="https://twitter.com/ManaManiacsNFT" passHref> 
              <a target="_blank" rel="noopener noreferrer" className="nav-btn">
                Twitter
              </a>  
            </Link> 

            <Link href="https://discord.gg/y2WY68JzEG" passHref> 
              <a target="_blank" rel="noopener noreferrer" className="nav-btn">
              Discord
              </a>  
            </Link> 

          </div>
          <div className="self-center  mr-4">
            <Hamburger toggled={isOpen} toggle={setOpen} color="gray" />
          </div>
        </>
      ) : (
        <>
          <div className="hidden lg:flex lg:items-center lg:mx-auto gap-x-8 xl:gap-x-16">
            <a href="#home" className="nav-btn">
              Mint
            </a>
            <a href="#aboutus" className="nav-btn">
              About Us
            </a>
            <a href="#roadmap" className="nav-btn">
              Roadmap
            </a>
            <a href="#team" className="nav-btn">
              Team
            </a>
            <a href="#faq" className="nav-btn">
              FAQ
            </a>

            <Link href="https://twitter.com/ManaManiacsNFT" passHref> 
              <a target="_blank" rel="noopener noreferrer" className="nav-btn">
                Twitter
              </a>  
            </Link> 

            <Link href="https://discord.gg/y2WY68JzEG" passHref> 
              <a target="_blank" rel="noopener noreferrer" className="nav-btn">
                Discord
              </a>  
            </Link> 

          </div>
          <div className="self-center lg:hidden mr-4">
            <Hamburger toggled={isOpen} toggle={setOpen} color="gray" />
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar
