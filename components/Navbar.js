import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../images/logo.png'
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="bg-[#000000b3] flex justify-between w-full z-50 fixed top-0">
      <div className="w-32 mx-4 my-2">
        <Image src={logo} alt="Crypto Lions Logo" />
      </div>
      {isOpen ? (
        <>
          <div className="absolute top-[108px] flex flex-col bg-[#000000b3] w-full p-8 items-start gap-y-4">
            <a href="#home" className="nav-btn">
              Home
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
            <a href="#discord" className="nav-btn">
              Join our Discord
            </a>
          </div>
          <div className="self-center  mr-4">
            <Hamburger toggled={isOpen} toggle={setOpen} color="gray" />
          </div>
        </>
      ) : (
        <>
          <div className="hidden lg:flex lg:items-center lg:mx-auto gap-x-8 xl:gap-x-16">
            <a href="#home" className="nav-btn">
              Home
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
            <a href="#discord" className="nav-btn">
              Join our Discord
            </a>
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
