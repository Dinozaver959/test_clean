import React from 'react'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import team1 from '../images/Priapus_pfp.jpg'
import team2 from '../images/Lightss_pfp.png'
import team3 from '../images/Dinozaver959_pfp.png'
import { motion } from 'framer-motion'

const Team = () => {
  return (
    <div
      id="team"
      className="my-28 text-white top-[200px] md:top-[400px] lg:top-[800px] relative"
    >

      <div className="text-4xl text-white mt-48 text-center z-40 relative">
        <Typewriter
          options={{
            strings: ['Meet the Team '],
            autoStart: true,
            loop: true,
          }}
        />
        <div className="mt-20 flex flex-col lg:flex-row max-w-6xl mx-auto gap-y-16">

          <div className="bg-[#212529] w-80 py-8 mx-auto">
            <motion.div
              animate={{
                rotate: [0, -3, 3, -3, 3, 0],
                transition: {
                  duration: 5,
                  ease: 'easeInOut',
                  loop: Infinity,
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="shadow-2xl shadow-black/20 p-3"
            >
              <div className="swing-before"></div>
              <div className="swing-after"></div>
              <Image src={team1} alt="team1" width={300} height={300} />
            </motion.div>
            <div className="mt-8">
              <h1>Priapus</h1>
              <hr></hr>
              <h2 className="text-lg">Founder</h2>
              <h3 className="text-xs mt-3 w-10/12 mx-auto">
                NFT Visionary
              </h3>
            </div>
          </div>

          <div className="bg-[#212529] w-80 py-8 mx-auto">
            <motion.div
              animate={{
                rotate: [0, -5, 5, -5, 5, 0],
                transition: {
                  duration: 5,
                  ease: 'easeInOut',
                  loop: Infinity,
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="shadow-2xl shadow-black/20 p-3"
            >
              <div className="swing-before"></div>
              <div className="swing-after"></div>
              <Image src={team2} alt="team2" width={300} height={300} />
            </motion.div>
            <div className="mt-8">
              <h1>Lightss</h1>
              <hr></hr>
              <h2 className="text-lg">Co-Founder</h2>
              <h3 className="text-xs mt-3 w-10/12 mx-auto">
                Community Manager
              </h3>
            </div>
          </div>

          <div className="bg-[#212529] w-80 py-8 mx-auto">
            <motion.div
              animate={{
                rotate: [0, -5, 5, -5, 5, 0],
                transition: {
                  duration: 5,
                  ease: 'easeInOut',
                  loop: Infinity,
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="shadow-2xl shadow-black/20 p-3"
            >
              <div className="swing-before"></div>
              <div className="swing-after"></div>
              <Image src={team3} alt="team2" width={300} height={300} />
            </motion.div>
            <div className="mt-8">
              <h1>Dinozaver959</h1>
              <hr></hr>
              <h2 className="text-lg">Co-Founder</h2>
              <h3 className="text-xs mt-3 w-10/12 mx-auto">
                Lead Dev
              </h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Team
