import React from "react";

const aboutData = {
  dermatographia: {
    title: "Dermatographia Urticaria",
    description:
      "Dermatographia Urticaria is a skin condition characterized by raised red lines or welts that appear after the skin is scratched or rubbed. It is a form of physical urticaria caused by an exaggerated release of histamine from skin cells. Symptoms include itching, redness, and swelling.",
    image: "../images/me.jpg",
  },
  diseasesCovered: {
    title: "Diseases Covered",
    items: [
      "Dermatographia Urticaria",
      "Warts Molluscum and other Viral Infections",
      "Psoriasis pictures Lichen Planus and related diseases",
      "Eczema",
      "Tinea Ringworm Candidiasis and other Fungal Infections",
    ],
  },
  classification: {
    title: "Classification Working",
    description:
      "The project uses deep learning models, such as ResNet50, to classify skin disease images based on extracted features. The model analyzes the uploaded images and predicts the most likely disease with confidence scores.",
    image: "../images/res50.png",
  },
  segmentation: {
    title: "Segmentation Working",
    description:
      "Segmentation is performed to identify the affected skin areas precisely. U-Net based architectures are used to generate masks that highlight the lesion boundaries, assisting in detailed analysis and treatment planning.",
    image: "../images/resunet.png",
  },
  technologies: {
    title: "Technologies Used",
    frontend: ["React.js", "Tailwind CSS", "Vite.js"],
    backend: ["FastAPI", "Python"],
    others: ["TensorFlow", "Git", "Pytorch", "Kaggle", "MakeSense.AI"],
  },
};

// Disease images - update paths to your actual images in your src/images folder
const diseaseImages = [
  "../images/dermo.jpg",
  "../images/warts.jpg",
  "../images/psos.jpg",
  "../images/eczema.jpg",
  "../images/tinea.jpg",
];

// Disease descriptions for each item
const diseaseDescriptions = [
  "It causes red, raised welts on the skin after light scratching or pressure. It’s a form of physical urticaria often triggered by minor irritation. Symptoms usually appear within minutes and fade within 30 minutes to an hour. The condition is typically harmless but can be itchy or uncomfortable.",
  "It caused by viruses like HPV and poxvirus; appear as small skin-colored bumps; spread through skin contact; treatable with cryotherapy or topical meds.",
  "Chronic autoimmune conditions causing scaly or itchy patches; triggered by stress or infections; often seen on elbows, knees, or wrists; treated with steroids or phototherapy.",
  "Inflammatory skin condition causing dry, itchy patches; common in children and allergy-prone individuals; worsens with scratching; treated with moisturizers and steroids.",
  "Fungal rashes that are red, itchy, and scaly; affect skin, scalp, or moist areas; contagious via contact; treated using topical or oral antifungals.",
];

export default function About() {
  return (
    <div className="scroll-smooth">
      {/* Block 1 - Dermatographia */}
      <section
        id="dermatographia"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-700 via-purple-900 to-indigo-900 text-white px-10 md:px-20"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            {aboutData.dermatographia.title}
          </h1>
          <p className="text-xl leading-relaxed max-w-lg drop-shadow-md">
            {aboutData.dermatographia.description}
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={aboutData.dermatographia.image}
            alt="Dermatographia Urticaria"
            className="rounded-3xl shadow-2xl object-cover border-8 border-white w-[800px] md:w-[1000px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Block 2 - Diseases Covered */}
      {/* Block 2 - Diseases Covered (Two rows layout) */}
<section
  id="diseases"
  className="min-h-[460px] bg-indigo-50 flex flex-col items-center justify-center px-12 py-14 text-indigo-900"
>
  <h2 className="text-6xl font-bold mb-14 tracking-wide">Diseases Covered</h2>
  <div
    className="flex flex-wrap justify-center gap-10 max-w-7xl w-full px-4"
  >
    {aboutData.diseasesCovered.items.map((disease, i) => (
      <div
        key={i}
        className="bg-white rounded-3xl shadow-lg max-w-xs w-72 cursor-pointer
          hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col"
      >
        <img
          src={diseaseImages[i] || "https://via.placeholder.com/320x240?text=No+Image"}
          alt={disease}
          className="w-full h-44 object-cover rounded-t-3xl"
          loading="lazy"
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-900">{disease}</h3>
          <p className="text-indigo-700 text-base flex-grow">{diseaseDescriptions[i]}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Block 3 - Classification */}
      <section
        id="classification"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-indigo-800 via-purple-900 to-indigo-900 text-white px-10 md:px-20"
      >
        <div className="md:w-1/2 order-2 md:order-1">
          <img
            src={aboutData.classification.image}
            alt="Classification Working"
            className="rounded-3xl shadow-2xl max-w-full max-h-[500px] object-cover border-8 border-white"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 order-1 md:order-2 mb-10 md:mb-0 md:pl-16">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            {aboutData.classification.title}
          </h2>
          <p className="text-xl leading-relaxed max-w-lg drop-shadow-md">
            {aboutData.classification.description}
          </p>
        </div>
      </section>

            {/* Block 5 - Technologies */}
      <section
        id="technologies"
        className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100 flex flex-col items-center justify-center px-12 text-indigo-900"
      >
        <h2 className="text-6xl font-extrabold mb-14 tracking-wide">Technologies Used</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl w-full text-center">
          <div>
            <h3 className="text-4xl font-semibold mb-6 border-b-2 border-purple-600 pb-2">
              Frontend
            </h3>
            <ul className="text-2xl space-y-3">
              {aboutData.technologies.frontend.map((tech, i) => (
                <li key={i} className="hover:text-purple-700 cursor-pointer">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-semibold mb-6 border-b-2 border-purple-600 pb-2">
              Backend
            </h3>
            <ul className="text-2xl space-y-3">
              {aboutData.technologies.backend.map((tech, i) => (
                <li key={i} className="hover:text-purple-700 cursor-pointer">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-semibold mb-6 border-b-2 border-purple-600 pb-2">
              Others
            </h3>
            <ul className="text-2xl space-y-3">
              {aboutData.technologies.others.map((tech, i) => (
                <li key={i} className="hover:text-purple-700 cursor-pointer">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Block 4 - Segmentation */}
      <section
        id="segmentation"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-900 text-white px-10 md:px-20"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            {aboutData.segmentation.title}
          </h2>
          <p className="text-xl leading-relaxed max-w-lg drop-shadow-md">
            {aboutData.segmentation.description}
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={aboutData.segmentation.image}
            alt="Segmentation Working"
            className="rounded-3xl shadow-2xl max-w-full max-h-[500px] object-cover border-8 border-white"
            loading="lazy"
          />
        </div>
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
