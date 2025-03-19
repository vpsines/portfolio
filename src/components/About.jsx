import { motion } from 'framer-motion';
import React from 'react'

import { styles } from '../styles';
import {services} from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({index,title,icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right","spring",0.5 * index,0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45,scale:1,speed:450}}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px]  max-w-3xl leading-[30px]'>
        Hello there! I'm Vyshnav Sasidharan. I hail from the God's own country, Kerala in India.I'm a passionate and versatile software developer with a love for crafting elegant and efficient solutions to complex problems.

        My journey as a developer started back when I was a curious teenager tinkering with some C++ code, and it has evolved into a fulfilling career. Over the years, I have honed my skills in Web and Mobile app development and I am adept at both front-end and back-end development.
        Collaboration is a value I hold dear, and I thrive in team environments. I take great pride in my ability to communicate technical concepts to non-technical stakeholders effectively, ensuring a seamless bridge between development and business goals.
        Continuous learning is my mantra, and I am always eager to take on new challenges and learn from diverse perspectives
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>{
        services.map((service,index)=> (<ServiceCard key={index} index={index} {...service} />))
      }</div>
    </>
  )
}

export default SectionWrapper(About,"about")