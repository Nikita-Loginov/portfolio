"use client";

import Image, { StaticImageData } from "next/image";
import classNames from "classnames";
import { useState } from "react";

import { Computer, Swiper } from "@/shared";

import scss from "./ProjectGallery.module.scss";

interface ProjectGalleryProps {
  imgs: (string | StaticImageData)[];
  nameFull: string;
}

export const ProjectGallery = ({ imgs, nameFull }: ProjectGalleryProps) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(imgs.length);

  if (imgs.length < 1) return null;

  const imgsSwiper = imgs.map((_, index) => (
    <Image src={imgs[index]} alt={nameFull} />
  ));

  const handleSlideChange = (current: number, total: number) => {
    setCurrentSlide(current);
    setTotalSlides(total);
  };

  return (
    <div className={scss["project-gallery"]}>
      <div className={scss["project-gallery__block"]}>
        <Computer
          topContent={
            <div className={scss["project-gallery__pagination"]}>
              <p
                className={classNames(
                  "p3",
                  scss["project-gallery__pagination-current"]
                )}
              >
                {currentSlide}
              </p>

              <p className="p3">/</p>

              <p className="p3">{totalSlides}</p>
            </div>
          }
        >
          <Swiper
            config={{
              spaceBetween: 10,
              slidesPerView: 1,
              speed: 1000,
              autoplay: {},
            }}
            items={imgsSwiper}
            onSlideChange={(current, total) => {
              handleSlideChange(current, total);
            }}
            // pagination
          />
        </Computer>
      </div>
    </div>
  );
};
