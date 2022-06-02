import Veggie from '../components/Veggie/Veggie'
import Popular from '../components/Popular/Popular'
import { motion } from 'framer-motion'

import React from 'react'

function Home() {
  return (
    <motion.div inicial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>
        <Veggie />
        <Popular />
    </motion.div>
  )
}

export default Home