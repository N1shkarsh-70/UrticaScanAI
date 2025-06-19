import React from 'react'
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <motion.div
        className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Project Info */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700 mb-4 sm:mb-6">
            Deep Learning + Dermatographia = UrticaScan AI
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-xl">
            Dermatographia Urticaria is a unique skin response condition where friction causes raised marks. With deep learning models, we segment and classify the skin's condition from images—ensuring fast, accurate, and intelligent diagnosis.
          </p>
          <motion.a
            className="bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-block text-sm sm:text-base"
            href="/predict"
          >
            See Demo
          </motion.a>
        </div>

        {/* Image Collage */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 relative order-1 md:order-2">
          <motion.img 
            src="/images/f1.jpg" 
            alt="Sample 1" 
            className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-lg sm:rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }} 
          />
          <motion.img 
            src="/images/f2.jpg" 
            alt="Sample 2" 
            className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg sm:rounded-xl shadow-md mt-8 sm:mt-12"
            whileHover={{ scale: 1.05 }} 
          />
          <motion.img 
            src="/images/f3.jpg" 
            alt="Sample 3" 
            className="absolute right-0 bottom-0 w-1/2 h-32 sm:h-40 md:h-48 object-cover rounded-lg sm:rounded-xl shadow-md border-2 sm:border-4 border-white"
            whileHover={{ scale: 1.05 }} 
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Project