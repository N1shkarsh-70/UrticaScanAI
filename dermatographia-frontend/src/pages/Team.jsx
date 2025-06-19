import React, { useState, useEffect, useRef } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Ankit Kumar Gola",
    role: "B.Tech CSE",
    image: "./images/me.png",
  },
  {
    id: 2,
    name: "Daksh Gupta",
    role: "B.Tech CSE",
    image: "./images/daksh.jpg",
  },
  {
    id: 3,
    name: "Nishkarsh",
    role: "B.Tech CSE",
    image: "./images/Nishkarsh_i.jpg",
  },
];

export default function Team() {
  const [activeId, setActiveId] = useState(null);
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef();

  // Rotation speed degrees per frame
  const speed = 0.3;

  // Animate rotation if no active member selected
  useEffect(() => {
    if (activeId === null) {
      const animate = () => {
        setRotation((prev) => (prev + speed) % 360);
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationRef.current);
    }
  }, [activeId]);

  // Click handler for circle
  const handleClick = (id) => {
    if (id === activeId) {
      // Deselect if clicked again
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  // Responsive sizing
  const containerSize = Math.min(window.innerWidth * 0.9, 700);
  const circleRadius = containerSize * 0.35;
  const inactiveSize = containerSize * 0.2;
  const activeSize = containerSize * 0.45;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 font-sans pt-6 sm:pt-10">
      <main className="flex-grow flex flex-col items-center justify-center px-2 sm:px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-purple-800 text-center">
          Meet the Team
        </h1>
      
        <div
          className="relative"
          style={{
            width: containerSize,
            height: containerSize,
          }}
        >
          {/* Rotating ring container */}
          <div
            className="absolute top-1/2 left-1/2 rounded-full"
            style={{
              width: containerSize,
              height: containerSize,
              marginTop: -containerSize / 2,
              marginLeft: -containerSize / 2,
              transform: `rotate(${rotation}deg)`,
              transition: activeId ? "transform 0.8s ease-out" : "none",
            }}
          >
            {teamMembers.map((member, index) => {
              // angle for each member on the circle (120 degrees apart)
              const angle = (360 / teamMembers.length) * index;
              const rad = (angle * Math.PI) / 180;

              // Position images on the circle (centered)
              const x = circleRadius * Math.cos(rad);
              const y = circleRadius * Math.sin(rad);

              const isActive = activeId === member.id;
              const isAnyActive = activeId !== null;

              return (
                <div
                  key={member.id}
                  onClick={() => handleClick(member.id)}
                  className="absolute rounded-full shadow-2xl cursor-pointer select-none border-4 sm:border-6 md:border-8 border-purple-600 bg-white overflow-hidden flex flex-col justify-center items-center text-center"
                  style={{
                    width: isActive ? activeSize : inactiveSize,
                    height: isActive ? activeSize : inactiveSize,
                    top: isActive
                      ? containerSize / 2 - activeSize / 2
                      : containerSize / 2 + y - inactiveSize / 2,
                    left: isActive
                      ? containerSize / 2 - activeSize / 2
                      : containerSize / 2 + x - inactiveSize / 2,
                    boxShadow: isActive
                      ? "0 10px 25px rgba(124, 58, 237, 0.8)"
                      : "0 5px 15px rgba(167, 139, 250, 0.5)",
                    transition: "all 0.8s ease",
                    zIndex: isActive ? 100 : 10,
                    opacity: isAnyActive && !isActive ? 0.3 : 1,
                    transform: `rotate(${-rotation}deg)`,
                  }}
                  title={`${member.name} - ${member.role}`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable={false}
                    className={`rounded-full object-cover ${
                      isActive ? "w-4/5 h-4/5 mb-2 sm:mb-4" : "w-full h-full"
                    }`}
                    style={{
                      transition: "all 0.8s ease",
                    }}
                  />
                  {isActive && (
                    <div className="text-purple-900 px-2 sm:px-4 select-text">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{member.name}</h2>
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-indigo-700 mb-1 sm:mb-2">
                        {member.role}
                      </h3>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="bg-black text-white px-4 sm:px-6 py-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">UrticaScan AI</h2>
            <p className="text-xs sm:text-sm text-gray-400">
              A Deep Learning-Powered System for Accurate Detection, Segmentation, and Stage-Based Treatment Guidance of Dermatographia Urticaria and Related Skin Conditions
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/predict" className="hover:text-white">Predict</a></li>
              <li><a href="/team" className="hover:text-white">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Contact</h3>
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
            <h3 className="text-base sm:text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
              <li><a href="https://in.linkedin.com/in/ankitk247" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-8">&copy; 2025 UrticaScan AI. All rights reserved.</p>
      </footer>
    </div>
  );
}