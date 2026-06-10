import { StaticImageData } from "next/image";

export interface GradientOrb {
  color: string;
  position: string;
  secondColor?: string;
}

export interface BackgroundGradientConfig {
  first: GradientOrb;
  second: GradientOrb;
}

export interface LiquidEtherConfig {
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  dt?: number;
  BFECC?: boolean;
  resolution?: number;
  isBounce?: boolean;
  colors?: string[];
  style?: React.CSSProperties;
  className?: string;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
  gradient: BackgroundGradientConfig;
}

export interface ImgBgConfig {
  path: string;
  src: StaticImageData;
  alt: string;
  mediaSrc?: StaticImageData
}
