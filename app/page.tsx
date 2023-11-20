"use client"
/* eslint-disable */
import Image from 'next/image'
import localFont from 'next/font/local'
import { Lexend, Roboto_Mono } from 'next/font/google'
import Link from 'next/link'
import Bubble from '@/components/Bubble'
import { useState } from 'react'
import {motion} from 'framer-motion'
const lexend = Lexend({ subsets: ['latin'] })
const roboto = Roboto_Mono({ subsets: ['latin'] })
// If loading a variable font, you don't need to specify the font weight
const myFont = localFont({ src: '../fonts/Integral/Fontspring-DEMO-integralcf-regular.otf' })
const bubbles = [
  {
    src: '/bubble1.png'
  },
  {
    src: '/bubble2.png'
  },
  {
    src: '/bubble3.png'
  },
  {
    src: '/bubble4.png'
  },
  {
    src: '/bubble1.png'
  },
  {
    src: '/bubble2.png'
  },
  {
    src: '/bubble3.png'
  },
  {
    src: '/bubble4.png'
  },
  {
    src: '/bubble1.png'
  },
  {
    src: '/bubble2.png'
  },
  {
    src: '/bubble3.png'
  },
  {
    src: '/bubble4.png'
  }
]
const users = [
  {
    name: 'MonkeyIslander872',
    src: '/user1.svg'
  },
  {
    name: 'mean_deal_',
    src: '/user2.svg'
  },
  {
    name: 'TennisChallenger',
    src: '/user3.svg'
  },
  {
    name: 'DoozieWoozie',
    src: '/user4.svg'
  },
  {
    name: 'tired0fbeIngWired',
    src: '/user5.svg'
  },
  {
    name: 'Greendragon_',
    src: '/user6.svg'
  },
]
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(-1)
  return (
    <main className='min-w-full min-h-[100vh] relative sm:overflow-x-visible overflow-x-hidden'>


      {/* upper Frame */}
      <div className='absolute pointer-events-none md:block hidden'>
        <Image
          className='pointer-events-none'
          src="/frame.png"
          alt="Upper Frame"
          width={923}
          height={644.19}
        />
      </div>

      {/* NavBar Form Mobiles */}

      <div className='md:hidden flex items-center justify-between p-[10px]'>
        <Link href='/' >
          <Image
            className='pointer-events-none'
            src="/Logo.svg"
            alt="Logo"
            width={56}
            height={56}
          />
        </Link>
        <button className={`${lexend.className} button red rounded-lg py-[5px] px-[10px]`}>
          Explore More
        </button>
      </div>



      {/* Hero Section */}
      <section  id='hero' className='w-[90%] mx-auto min-h-screen relative mb-[8vh]'>
        <div className='w-full min-h-[100vh] flex flex-wrap'>
          <div className='md:w-1/2 sm:mt-[35vh] mt-[15vh] w-full'>
            <motion.small initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }} className={`${lexend.className} text-[12px] uppercase text-main-red leading-[15px]`}>Lorem ipsum dolor</motion.small>
            <motion.h1 initial={{ x:-100, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: .3 }, x:0 }} className={`${myFont.className} uppercase md:text-[64px] md:block hidden sm:text-[50px] text-[40px] leading-[1] break-words`}>Game changing infrastructure</motion.h1>
            <motion.h1 initial={{ x:-100, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: .3 }, x:0 }}  className={`${myFont.className} uppercase md:text-[64px] md:hidden block sm:text-[50px] text-[40px] leading-[1] break-words`}>Empowering players and fans</motion.h1>
            <motion.p initial={{ x:-100, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: .9 }, x:0 }} className={`${lexend.className} text-[14px] leading-[20px] text-secondary mt-[3vh] max-w-[500px]`}>A decentralised, non-custodial social graph, empowering players to take full ownership of their gaming identities and enabling developers to build next-gen applications. </motion.p>
            <motion.button initial={{ x:-100, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 1.6 }, x:0 }} className={`${lexend.className} text-[18px] px-[16px] py-[8px] rounded-md bg-main-red mt-[3vh]`}>Join Discord</motion.button>
          </div>
          <div className='md:w-1/2 w-full h-full relative overflow-hidden shadow-box'>
            {
              [...bubbles, ...bubbles, ...bubbles].map((bubble, index) => (
                <Bubble key={index} src={bubble.src} />
              ))
            }
            <motion.img
              initial={{ y:200, opacity: 0, x: '-50%' }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: .6 }, y:'50%',x: '-50%' }}
              className='absolute left-1/2  pointer-events-none object-contain'
              src="/xBorg - Static0003 2png.png"
              alt="Animate Frame"
              width={370}
              height={490}
            />
            <div className='mt-[10vh] w-full min-h-[600px]  relative' style={{ backgroundImage: 'url(/vectorFrame.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <div className='flex flex-col items-center'>
                <motion.img
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0 }, y:0 }}
                  className='mt-[26vh] pointer-events-none object-contain'
                  src="/userAvatar.svg"
                  alt="Animate Frame"
                  height={100}
                  width={100}
                />
                <motion.small
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.3 }, y:0 }}
                  className={`${lexend.className}`}>User id:</motion.small>
                <motion.h3
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.5 }, y:0 }}
                  className={`${lexend.className}`}>XBorg001</motion.h3>
                <motion.div
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.8 }, y:0 }}
                  className='button cursor-pointer w-[48px] h-[48px] rounded-full flex items-center justify-center md:mt-[8vh] mt-[3vh]'>
                  <Image
                    className='pointer-events-none'
                    src="/Group 1.svg"
                    alt="Animate Frame"
                    height={20}
                    width={20}
                    objectFit='cover'
                  />
                </motion.div>

                <motion.div
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.9 }, y:0 }}
                  className='button cursor-pointer md:mt-[2vh] mt-[2vh] md:text-[16px] text-[15px] px-[10px] py-[2px] md:px-[15px] md:py-[10px] rounded-full'>
                  <p>
                    Soulbound Launchpad
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 1 }, y:0 }}
                  className='flex items-center justify-center md:mt-[2vh] mt-[2vh] md:gap-5 gap-2'>
                  <div className='button cursor-pointer md:text-[16px] text-[14px] px-[10px] py-[2px] md:px-[15px] md:py-[10px] rounded-full'>
                    <p>
                      Soulbound Launchpad
                    </p>
                  </div>
                  <div className='button cursor-pointer md:text-[16px] text-[14px] px-[10px] py-[2px] md:px-[15px] md:py-[10px] rounded-full'>
                    <p>
                      Soulbound Launchpad
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <Link href='/#content' onClick={(e) => {
          e.preventDefault();
          const contentElement = document.getElementById("content");
    if (contentElement) {
        contentElement.scrollIntoView({ behavior: "smooth" });
    }
            // document.getElementById("content").scrollIntoView({ behavior: "smooth" });
        }}
          className='scrolldown absolute bottom-[10px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center'>
          <p className='text-gradient text-[.85rem]'>Scroll Down</p>
          <Image
            className='pointer-events-none'
            src="/Vectordown.svg"
            alt="Animate Frame"
            width={20}
            height={40}
            objectFit='contain'
          />
        </Link>
      </section>

      {/* Content Section */}
      <section id='content' className='w-[90%] mx-auto min-h-screen relative'>
        <div className='mb-[8vh]'>
        <Image
          className='absolute z-[-1] left-[-7%] top-0 pointer-events-none'
          src="/bubble2-1.svg"
          alt="Animate Frame"
          width={90}
          height={90}
          objectFit='contain'
        />
        <Image
          className='absolute z-[-1] left-0 top-[20%] pointer-events-none'
          src="/bubble2-2.svg"
          alt="Animate Frame"
          width={73}
          height={73}
          objectFit='contain'
        />
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y:0 ,transition:{duration:1}}} className='mt-[20vh]'>
          <h1 className={`${myFont.className} uppercase md:text-[64px] text-[40px] leading-[1] break-words mx-auto md:max-w-[750px] text-center`}>The value network of gaming</h1>
          <p className={`${lexend.className} text-[14px] leading-[20px] text-secondary mt-[3vh] mx-auto max-w-[500px] text-center`}>The fundamental protocol that allows anyone to create gaming applications built on top of player identities.</p>
        </motion.div>
        <div className='flex items-center justify-center gap-5 mt-[6vh] flex-wrap'>
          <motion.div initial={{ x: -250, opacity:0 }} whileInView={{ x: 0, opacity:1, transition:{duration:1} }} className='rounded-[16px] hover:scale-105 transition-all duration-[350] ease-linear bg-[#090909cc]  border-solid border border-[#343434] sm:min-w-[387px] min-w-[100%] min-h-[244px] px-[20px] py-[15px]'>
            <h2 className={`${lexend.className} text-[24px]`}>Gaming social layer</h2>
            <h2 className={`${lexend.className} text-[14px] leading-[20px] text-secondary mt-[1vh]`}>Gamers take control of their data.</h2>
            <Image
              className='mt-[6vh] pointer-events-none'
              src="/Home.svg"
              alt="Animate Frame"
              width={72}
              height={88}
              objectFit='contain'
            />
          </motion.div>
          <motion.div initial={{ x: 250, opacity:0 }} whileInView={{ x: 0, opacity:1, transition:{duration:1} }} className='rounded-[16px] hover:scale-105 transition-all duration-[350] ease-linear bg-[#090909cc] border-solid border border-[#343434] sm:min-w-[387px] min-w-[100%] min-h-[244px] px-[20px] py-[15px]'>
            <h2 className={`${lexend.className} text-[24px]`}>Gaming social layer</h2>
            <h2 className={`${lexend.className} text-[14px] leading-[20px] text-secondary mt-[1vh]`}>Gamers take control of their data.</h2>
            <Image
              className='mt-[6vh] pointer-events-none'
              src="/star.svg"
              alt="Animate Frame"
              width={88}
              height={88}
              objectFit='contain'
            />
          </motion.div>
        </div>

        <div className='flex items-center justify-center mt-[18vh]  mb-[48vh] flex-wrap relative'>
          <div className='md:w-1/2 w-full'>
              <motion.h1
                initial={{ x:-50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0 }, x:0 }}
                className={`${myFont.className} uppercase text-[40px] leading-[1] max-w-[380px]`}>The New Gaming Web</motion.h1>
              <motion.p
                initial={{ x:-50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: .2 }, x:0 }}
                className={`${lexend.className} text-[14px] leading-[20px] text-secondary mt-[3vh] max-w-[380px]`}>At the core of the XBorg Data Graph Protocol lies a dynamic and interconnected network of gaming profiles. Each player's profile is represented as a unique ERC-721 NFT, complete with metadata unique to their gaming journey. </motion.p>
          </div>
          <div className='md:w-1/2 mt-[8vh] md:mt-0 w-full grid sm:grid-cols-2 gap-6'>
            {
              users.map((user, index) => (
                <motion.div
                key={index}
                initial={{ x:50, opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 ,delay: 0.2 * index+1 }, x:0 }}
                  className={`relative`}>
                  <div onClick={() => {
                    setActiveIndex((prev) => {
                      if (index === prev) return -1
                      else return index
                    })
                  }} className={`button cursor-pointer reverse flex items-center relative gap-3 p-[5px] rounded-full `} style={index === activeIndex ? { background: '#eb3a4a80', border: '2px solid #EB3A4A', zIndex: '99' } : {}}>
                    <Image
                      className='rounded-full pointer-events-none'
                      src={user.src}
                      alt="Animate Frame"
                      height={64}
                      width={64}
                      objectFit='cover'
                    />
                    <p className={`${lexend.className} text-[16px]`} style={index === activeIndex ? { color: '#EB3A4A', background: 'EB3A4A' } : {}}>{user.name}</p>
                  </div>
                  {
                    (index === activeIndex) ? (
                      <div className={`absolute backdrop-blur-md" ${index % 2 === 0 && index === activeIndex ? 'md:left-[-13px] left-[-3%]' : 'md:right-[-13px] right-[-10px]'} top-[-12px] z-10  backdrop-blur-md md:w-[220%] md:min-h-[404px] w-[105%] bg-[#090909cc] rounded-[16px] border-solid border-2 border-[#343434] p-[10px]`}>
                        <pre className={`${roboto.className} sm:text-[14px] text-[8.7px] mt-[10vh] text-[#95959D] `}>
                          {`
  `}<span className='text-white'>{`player_metadata = {`}</span>{`
    "player_name"`}<span className='text-white'>:</span>{` "JohnDoe123"`}<span className='text-white'>{`,`}</span>{`
    "gaming_platform"`}<span className='text-white'>:</span>{` "PC"`}<span className='text-white'>{`,`}</span>{`
    "game_level"`}<span className='text-white'>:</span>{` `}<span className='text-[#EB3A4A]'>25</span>{`,
    "achievements"`}<span className='text-white'>{`: [`}</span>{`"Master of the Arena", "Legendary Explorer"`}<span className='text-white'>{`],`}</span>{`
    "total_score": `}<span className='text-[#EB3A4A]'>2000</span>{`,
    "preferred_game_mode"`}<span className='text-white'>:</span>{` "Team Deathmatch"`}<span className='text-white'>{`,`}</span>{`
    "collected items"`}<span className='text-white'>{`: {`}</span>{`
    "weapon"`}<span className='text-white'>:</span>{` "Legendary Sword"`}<span className='text-white'>{`,`}</span>{`
    "armor"`}<span className='text-white'>:</span>{` "Epic Plate Armor"`}<span className='text-white'>{`,`}</span>{`
    "pet"`}<span className='text-white'>:</span>{` "Fire Dragon"
    `}<span className='text-white'>{`}`}</span>{`
  `}<span className='text-white'>{`}`}</span>{`
                          `}
                        </pre>
                      </div>
                    ) : ''
                  }
                </motion.div>

              ))
            }
            <div>
            </div>
            {/* <div>
              <Image
                className='absolute left-[5%] top-[20%] pointer-events-none'
                src="/bubble2-2.svg"
                alt="Animate Frame"
                width={73}
                height={73}
                objectFit='contain'
              />
            </div> */}
          </div>
          <Image
          className='absolute right-[-5.5%] -z-10 top-[-30vw] pointer-events-none'
          src="/Map0036 1.svg"
          alt="Animate Frame"
          width={1028.07}
          height={1057.74}
          objectFit='contain'
        />
        </div>
        </div>
      </section>
    </main>
  )
}
