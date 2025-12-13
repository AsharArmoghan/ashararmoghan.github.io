import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ResponsiveCanvasProps {
  imageUrl: string;
  isSmall?: boolean;
}

const ResponsiveCanvas = ({
  imageUrl,
  isSmall = false,
}: ResponsiveCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [dimensions, setDimensions] = useState({
    width: isSmall ? 200 : 1200,
    height: isSmall ? 150 : 800,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load image and handle drawing
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      imageRef.current = img;
      const { naturalWidth, naturalHeight } = img;
      const aspectRatio = naturalWidth / naturalHeight;

      const newWidth = isSmall ? 200 : Math.min(window.innerWidth * 0.9, 1200);
      const newHeight = newWidth / aspectRatio;

      setDimensions({ width: newWidth, height: newHeight });

      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        canvasRef.current.width = newWidth;
        canvasRef.current.height = newHeight;
        ctx?.drawImage(img, 0, 0, newWidth, newHeight);
      }

      setIsLoaded(true);
    };

    img.onerror = () => console.error("Image loading failed");
  }, [imageUrl, isSmall]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!isSmall && isLoaded && imageRef.current) {
        const img = imageRef.current;
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const newWidth = Math.min(window.innerWidth * 0.9, 1200);
        const newHeight = newWidth / aspectRatio;

        setDimensions({ width: newWidth, height: newHeight });

        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          canvasRef.current.width = newWidth;
          canvasRef.current.height = newHeight;
          ctx?.drawImage(img, 0, 0, newWidth, newHeight);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmall, isLoaded]);

  return (
    <motion.div
      whileHover={
        isSmall
          ? {
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            }
          : {}
      }
      transition={{ duration: 0.5 }}
      className={`${isSmall ? "cursor-pointer" : ""}`}
    >
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="bg-gray-100"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: dimensions.width,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      />
    </motion.div>
  );
};

export default ResponsiveCanvas;
