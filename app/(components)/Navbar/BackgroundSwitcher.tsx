import { useEffect, useState } from "react";

export default function BackgroundSwitcher() {
  // Array of image paths
  const backgroundImages = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
  ];
  const [currentBackground, setCurrentBackground] = useState(backgroundImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => {
        const currentIndex = backgroundImages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 30000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
        transition: "background-image 1s ease-in-out",
      }}
    />
  );
}