import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider";
import Steps from "./Steps";
import Project from "./Project";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100 min-h-screen font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20 py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-white to-blue-200 opacity-60 z-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 leading-tight">
              Diagnose <span className="text-cyan-600">Smartly</span><br /> with UrticaScan AI
            </h1>
            <p className="text-xl text-gray-700 max-w-xl">
              Cutting-edge AI for detecting Dermatographia Urticaria via deep learning image analysis. Instant insights, precise segmentation, and trusted treatment suggestions.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                 href="#demo-section"
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
              >
                Get Started
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                className="border border-blue-500 text-blue-600 px-6 py-3 rounded-lg font-semibold"
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
            className="flex justify-center md:justify-end"
          >
            <motion.img
              src="/images/bg.png"
              alt="AI Skin Analysis"
              className="w-[500px] md:w-[600px] xl:w-[700px] rounded-3xl "
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
      <section className="px-6 md:px-20 mt-12">
        <ImageSlider />
      </section>

      {/* Info Block */}
      <section className="mt-20 px-6 md:px-20"  id="demo-section">
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
            <motion.img src="/images/s3.jpg" alt="Sample 3" className="absolute right-0 bottom-0 w-[60%] h-40 object-fit rounded-xl shadow-xl border-4 border-white" whileHover={{ scale: 1.05 }} />
          </div>
        </motion.div>
      </section>

      {/* Flowchart */}
      <section className="mt-20 px-6 md:px-20">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src="/images/flowchart.png" alt="Flowchart" className="rounded-xl shadow-xl max-w-md" />
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">How UrticaScan AI Works</h2>
            <p className="text-gray-700 text-lg">
              Upload a skin image → AI classifies the image using ResNet50 → Segmentation performed by U-Net → Thresholding applied automatically → Result & treatment returned.
            </p>
          </div>
        </motion.div>
      </section>


        <section className="mt-20 px-6 md:px-20">
          <Steps/>
        </section>
      {/* Footer */}
      <footer className="bg-black text-white px-6 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-4">UrticaScan AI</h2>
            <p className="text-sm text-gray-400">
               A Deep Learning-Powered System for Accurate Detection, Segmentation, and Stage-Based Treatment Guidance of Dermatographia Urticaria and Related Skin Conditions
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/predict" className="hover:text-white">Predict</a></li>
              <li><a href="/team" className="hover:text-white">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 space-2 ">Contact</h3>
            <p className="text-gray-400 text-sm">
              Email: akshraj54325@gmail.com<br />
            </p>
            <p className="text-gray-400 text-sm">
              Email: nishkarsh.7078@gmail.com<br />
            </p>
            <p className="text-gray-400 text-sm">
              Email: dakshguptadg3@gmail.com<br />
            </p>
            <br/>
            <p className="text-gray-400 text-sm">Address: Graphic Era Hill University, Clement Town, Dehradun - 248001</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://in.linkedin.com/in/ankitk247" className="hover:text-white">LinkedIn.Ankit</a></li>
              <li><a href="https://www.linkedin.com/in/nishkarsh70" className="hover:text-white">LinkedIn.Nishkarsh</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-10">&copy; 2025 UrticaScan AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
