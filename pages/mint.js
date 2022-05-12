import React from 'react'
import Head from 'next/head'
import bg1 from '../images/bg1.png'
import bg2 from '../images/bg2.png'
import bg3 from '../images/bg3.png'
import bg4 from '../images/bg4.png'
import bg5 from '../images/bg5.png'
import bg6 from '../images/bg6.png'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const mint = () => {
  return (
    <>
      <div>
        <div className="pt-[500px] h-screen">
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
          <div className="transform translate-y-[-468%] border-b-4">
            <Image src={bg5} alt="bg5" />
          </div>
          <div className="transform translate-y-[-569%]">
            <Image src={bg6} alt="bg6" />
          </div>
        </div>
        <div transition={{ duration: 0.5 }} className="flex justify-center">
          <motion.div
            animate={{
              y: ['-10%', '0%', '-2%', '0%'],
            }}
            transition={{ duration: 1 }}
            className="h-[60vh] absolute top-[20%] z-50 rounded-md w-10/12 mx-auto flex flex-col justify-center text-center max-w-[900px] shadow-md border-b-8 border-b-[#13d3ec] bg-black/50 text-white gap-y-4"
          >
            <h1 className="text-4xl">0/9999</h1>
            <span className="text-[#13d3ec] w-2/4 mx-auto hover:scale-110 transition-all duration-150 cursor-pointer text-sm">
              0x312Cc238A1388
            </span>
            <h2 className="text-xl">1 CLION costs 0.05 ETH</h2>
            <span>Excluding gas fees</span>
            <span>Connect to the Ethereum network</span>
            <button className="mint-page-btn">Connect</button>
            <Link href="/">
              <button className="mint-page-btn">Back</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default mint
