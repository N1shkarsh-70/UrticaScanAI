import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider";
import Steps from "./Steps";
import Project from "./Project";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100 min-h-screen font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-white to-blue-200 opacity-60 z-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center w-full relative z-10">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4 sm:space-y-6 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-800 leading-tight">
              Diagnose <span className="text-cyan-600">Smartly</span><br className="hidden sm:block" /> with UrticaScan AI
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl">
              Cutting-edge AI for detecting Dermatographia Urticaria via deep learning image analysis. Instant insights, precise segmentation, and trusted treatment suggestions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <motion.a
                href="#demo-section"
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold shadow-md text-sm sm:text-base"
              >
                Get Started
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                className="border border-blue-500 text-blue-600 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end mt-8 md:mt-0"
          >
            <motion.img
              src="/images/bg.png"
              alt="AI Skin Analysis"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-xl sm:rounded-2xl"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>

      {/* Image Slider */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <ImageSlider />
      </section>

      {/* Info Block */}
      <section className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-12 lg:px-20" id="demo-section">
        <motion.div
          className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"
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
              className="bg-blue-700 text-white px-6 py-2 sm:px-7 sm:py-3 md:px-8 md:py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-block text-sm sm:text-base"
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
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 object-cover rounded-lg sm:rounded-xl shadow-md" 
              whileHover={{ scale: 1.05 }} 
            />
            <motion.img 
              src="/images/f2.jpg" 
              alt="Sample 2" 
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg sm:rounded-xl shadow-md mt-6 sm:mt-8 md:mt-10 lg:mt-12" 
              whileHover={{ scale: 1.05 }} 
            />
            
          </div>
        </motion.div>
      </section>

      {/* Flowchart */}
      <section className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center">
            <img 
              src="/images/flowchart.png" 
              alt="Flowchart" 
              className="rounded-lg sm:rounded-xl shadow-md max-w-full" 
            />
          </div>
          <div className="order-first md:order-last">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">How UrticaScan AI Works</h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Upload a skin image → AI classifies the image using ResNet50 → Segmentation performed by U-Net → Thresholding applied automatically → Result & treatment returned.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <Steps/>
      </section>
      
      {/* Footer */}
      <footer className="bg-black text-white px-4 sm:px-6 py-8 sm:py-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">UrticaScan AI</h2>
            <p className="text-xs sm:text-sm text-gray-400">
              A Deep Learning-Powered System for Accurate Detection, Segmentation, and Stage-Based Treatment Guidance of Dermatographia Urticaria and Related Skin Conditions
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Navigation</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/predict" className="hover:text-white">Predict</a></li>
              <li><a href="/team" className="hover:text-white">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Contact</h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Email: akshraj54325@gmail.com
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Email: nishkarsh.7078@gmail.com
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Email: dakshguptadg3@gmail.com
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Address: Graphic Era Hill University, Clement Town, Dehradun - 248001
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Follow Us</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              <li><a href="https://in.linkedin.com/in/ankitk247" className="hover:text-white">LinkedIn.Ankit</a></li>
              <li><a href="https://www.linkedin.com/in/nishkarsh70" className="hover:text-white">LinkedIn.Nishkarsh</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-8 sm:mt-10">&copy; 2025 UrticaScan AI. All rights reserved.</p>
      </footer>
    </div>
  );
}