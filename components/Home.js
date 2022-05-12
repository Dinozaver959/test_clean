import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carrousel from './Carrousel'
import bg1 from '../images/bg1.png'
import bg2 from '../images/bg2.png'
import bg3 from '../images/bg3.png'
import bg4 from '../images/bg4.png'
import bg5 from '../images/bg5.png'
import bg6 from '../images/bg6.png'

const Home = () => {
  return (
    <div id="home">
      <div className="mt-40">
        <Carrousel />
      </div>
      <div className="pt-[50px] h-screen">
        <div className="transform translate-y-[-8%]">
          <Image src={bg1} alt="bg1" />
        </div>
        <div className="transform translate-y-[-108%]">
          <Image src={bg2} alt="bg2" />
        </div>
        <div className="transform translate-y-[-205%]">
          <Image src={bg3} alt="bg3" />
        </div>
        <div className="transform translate-y-[-341%]">
          <Image src={bg4} alt="bg4" />
        </div>
        <div className="transform translate-y-[-468%] border-b-8">
          <Image src={bg5} alt="bg5" />
        </div>
        <div className="transform translate-y-[-569%]">
          <Image src={bg6} alt="bg6" />
        </div>
      </div>
      <div className="absolute top-[100%] text-center w-full">
        <Link href="/mint">
          <button className="mint-btn z-50">Mint</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
