import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='w-full h-[30vh] md:h-[40vh] lg:h-[50vh] bg-teal-800 rounded-t-3xl flex items-center overflow-hidden'>
      <motion.div 
        className='flex whitespace-nowrap border-t border-white border-b'
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
      >
        {[...Array(3)].map((_, i) => (
          <h1 key={i} className='text-[20vw] md:text-[12vw] lg:text-[220px] font-bold uppercase text-white leading-none px-4 md:px-8 lg:px-10'>
            we are ochi
          </h1>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee