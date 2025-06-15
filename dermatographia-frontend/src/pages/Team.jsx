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

  // Circle radius and container size
  const circleRadius = 250; // bigger radius for circle layout
  const containerSize = 700; // bigger container
  const inactiveSize = 170; // size of inactive circles
  const activeSize = 320; // size of active (centered) circle

  return (
    // Removed horizontal and bottom padding, keep only top padding to remove gaps
    <div className="min-h-screen flex flex-col bg-[#f6f6f6] font-sans pt-10">
      {/* Main content grows and pushes footer down */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold mb-8 text-purple-800">Meet the Team</h1>
      
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
                  className="absolute rounded-full shadow-2xl cursor-pointer select-none border-8 border-purple-600 bg-white overflow-hidden flex flex-col justify-center items-center text-center"
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
                      ? "0 20px 40px rgba(124, 58, 237, 0.8)"
                      : "0 10px 20px rgba(167, 139, 250, 0.5)",
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
                      isActive ? "w-4/5 h-4/5 mb-4" : "w-full h-full"
                    }`}
                    style={{
                      transition: "all 0.8s ease",
                    }}
                  />
                  {isActive && (
                    <div className="text-purple-900 px-4 select-text">
                      <h2 className="text-2xl font-bold">{member.name}</h2>
                      <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                        {member.role}
                      </h3>
                      <p className="text-sm">{member.bio}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
      </main>

      {/* Full-width image block */}

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
