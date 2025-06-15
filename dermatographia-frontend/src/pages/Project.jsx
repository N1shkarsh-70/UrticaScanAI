import React from 'react'
import { motion } from "framer-motion";

const Project = () => {
  return (
        <section className="mt-20 px-6 md:px-20">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[800px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Project Info */}
          <div>
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
              Deep Learning + Dermatographia = UrticaScan AI
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              Dermatographia Urticaria is a unique skin response condition where friction causes raised marks. With deep learning models, we segment and classify the skin’s condition from images—ensuring fast, accurate, and intelligent diagnosis.
            </p>
            <motion.a
              
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition" href="/predict"
            >
              See Demo
            </motion.a>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-4 relative">
            <motion.img src="/images/f1.jpg" alt="Sample 1" className="w-full h-80 object-fill rounded-xl shadow-xl" whileHover={{ scale: 1.05 }} />
            <motion.img src="/images/f2.jpg" alt="Sample 2" className="w-full h-40 object-fill rounded-xl shadow-md" whileHover={{ scale: 1.05 }} />
            <motion.img src="/images/f3.jpg" alt="Sample 3" className="absolute right-0 bottom-0 w-[60%] h-40 object-fit rounded-xl shadow-xl border-4 border-white" whileHover={{ scale: 1.05 }} />
          </div>
        </motion.div>
      </section>
  )
}

export default Project