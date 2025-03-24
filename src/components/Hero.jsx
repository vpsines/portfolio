import React from 'react'

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { resumeUrl, socials } from '../constants';
import { fadeIn } from '../utils/motion';


const Hero = () => {

  const openLink = (url) => {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <section className='relative h-screen w-full mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'><br />Vyshnav</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Software Developer based in Kerala,India. <br className='sm:block hidden' />
          </p>
          <div className='mt-8'>
            <a href='#projects'>
              <button
                className='bg-black py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mr-4'
              >
                View Projects
              </button>
            </a>
            <button
              className='bg-black py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' onClick={()=>openLink(resumeUrl)}
            >
              Resume
            </button>
          </div>
          <div className='mt-8 flex flex-row'>
            {
              socials.map((social, index) => (
                <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} key={social.title} className='mr-4 ' onClick={()=>openLink(social.socialUrl)}>
                  <img src={social.icon} alt={social.title} className='w-12 h-12 object-contain' />
                </motion.div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-4 bottom-8 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero