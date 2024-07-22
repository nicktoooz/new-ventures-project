'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import chevronLeft from '../../../public/chevron_left.svg';
import chevronRight from '../../../public/chevron_right.svg';

const ImageGrid = ({ images }: { images: StaticImageData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="h-[40em] max-w-fit flex w-full  relative">
      <div onClick={handlePrevClick} className=" w-20 h-3/4 left-0 absolute cursor-pointer"></div>
      <div className="w-full h-full flex flex-col gap-2 items-center">
        <Image src={images[currentIndex]} alt={`Image ${currentIndex}`} className="flex-1 w-full h-10 object-contain rounded-lg px-5" />
        <div className="overflow-x-scroll shadow-sm bg-[#d4d4d4] h-28 p-2 whitespace-nowrap mx-5">
          {images.map((image, index) => (
            <Image src={image} key={index} alt={`Thumbnail ${index}`} className="inline mx-2 rounded-md bg-blue-300 h-full object-center object-cover w-32 cursor-pointer" onClick={() => handleThumbnailClick(index)} />
          ))}
        </div>
      </div>
      <div onClick={handleNextClick} className=" w-20 h-3/4 right-0 absolute cursor-pointer"></div>
    </div>
  );
};

export default ImageGrid;
