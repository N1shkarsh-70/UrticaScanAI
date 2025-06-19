import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Image Upload",
    description:
      "A high-resolution image capturing the entirety of the affected skin region is uploaded and then transmitted to the backend for further processing.",
    image: "/images/upload.jpg",
  },
  {
    title: "Image is processed",
    description:
      "The image is subsequently processed to ensure compatibility with the Resnet50 model.",
    image: "/images/processing.jpg",
  },
  {
    title: "Classification",
    description:
      "Then the image is fed into the model, which then predicts top three most likely skin conditions from a list that includes Dermatographia urticaria,Eczema,Psoriasis pictures Lichen Planus and related diseases,Tinea Ringworm Candidiasis and other Fungal Infections,Warts Molluscum and other Viral Infections.",
    image: "/images/classification.jpg",
  },
  {
    title: "Results Displayed",
    description:
      "The final results are displayed with prediction confidence and possible skin conditions, allowing further medical evaluation.",
    image: "/images/result.jpg",
  },
];

export default function Steps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
        How It Works
      </h1>

      {/* Stepper */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="text-center cursor-pointer w-1/4 min-w-[80px] sm:w-auto"
            onClick={() => setActiveStep(index)}
          >
            <div
              className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mx-auto rounded-full border-2 flex items-center justify-center ${
                index === activeStep 
                  ? "border-cyan-600 bg-cyan-600 text-white" 
                  : "border-gray-400"
              }`}
            ></div>
            <p
              className={`mt-1 sm:mt-2 text-xs sm:text-sm font-mono ${
                index === activeStep 
                  ? "text-cyan-600 font-bold" 
                  : "text-gray-600"
              }`}
            >
              {index + 1}. {step.title.split(" ")[0]}
            </p>
          </div>
        ))}
      </div>

      {/* Active Step Content */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row items-center bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl max-w-6xl mx-auto w-full"
      >
        <img
          src={steps[activeStep].image}
          alt={steps[activeStep].title}
          className="w-full md:w-1/2 mb-4 sm:mb-6 md:mb-0 rounded-lg"
        />
        <div className="md:ml-6 lg:ml-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
            {steps[activeStep].title.split(" ")[0]}{' '}
            <span className="text-cyan-600">
              {steps[activeStep].title.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-xl">
            {steps[activeStep].description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}