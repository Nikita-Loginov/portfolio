"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import scss from "./CardTilted.module.scss";

interface CardTiltedProps {
  children: React.ReactNode;
  containerHeight?: string;
  containerWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  className?: string;
}

export const CardTilted = ({
  children,
  containerHeight = "100%",
  containerWidth = "100%",
  scaleOnHover = 1.02,
  rotateAmplitude = 10,
  className,
}: CardTiltedProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(50);
  const y = useMotionValue(50);

  const rotateX = useSpring(
    useTransform(y, [0, 100], [rotateAmplitude, -rotateAmplitude]),
    { stiffness: 300, damping: 30 }
  );
  const rotateY = useSpring(
    useTransform(x, [0, 100], [-rotateAmplitude, rotateAmplitude]),
    { stiffness: 300, damping: 30 }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(50);
    y.set(50);
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      className={`${scss['card-tilted-container']} ${className || ""}`}
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={scss['card-tilted']}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{ scale: isHovered ? scaleOnHover : 1 }}
        transition={{ scale: { duration: 0.2, ease: "easeInOut" } }}
      >
        {children}
      </motion.div>
    </div>
  );
};
