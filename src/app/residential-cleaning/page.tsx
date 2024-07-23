'use client';
import { useEffect, useState } from 'react';
import Quote from '@/app/(components)/QuoteOverlay';
import ImageGrid from '../(components)/ImageGrid';
import sample1 from '../../../public/gallery/residential/resi1.jpg';
import sample2 from '../../../public/gallery/residential/resi2.jpg';
import { StaticImageData } from 'next/image';
import { Box, Paper } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import ImageGallery from '../(components)/ImageGrid';

export default function ResidentialCleaning() {
  const [quoteVisible, setQuoteVisible] = useState(false);
  return (
    <>
      <Quote visible={quoteVisible} onClose={() => setQuoteVisible(!quoteVisible)} />
      <Hero setQuoteVisible={setQuoteVisible} />
      <Body />
    </>
  );
}
function Hero({ setQuoteVisible }: { setQuoteVisible: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div>
      <div className={`h-[80vh] md:h-[30em] relative after:absolute after:inset-0 after:content-[''] after:bg-gradient-cover  before:opacity-50 before:absolute before:inset-0 before:content-[''] before:h-full before:w-full before:bg-residential-clean before:bg-center grid place-items-center`}>
        <div className="hero-content z-10 text-white   max-w-[60em] px-10">
          <h1 className={`text-3xl md:text-4xl mb-4 font-bold`}>Residential Cleaning</h1>
          <p>We understand the importance of a clean and healthy home. Our professional cleaning team is dedicated to providing top-notch cleaning services tailored to your specific needs. We offer a comprehensive range of cleaning services to ensure every corner of your home sparkles!</p>
          <div className={`flex gap-5 flex-col sm:flex-row mt-5`}>
            <button onClick={() => setQuoteVisible(true)} className={`p-2 max-w-40 w-full bg-[#2A2A27] transition-all rounded text-white`}>
              Get a Quote
            </button>
            <button onClick={() => (location.href = 'tel:+61406780941')} className={`py-2 max-w-40 w-full bg-[#f1d7ac] transition-all rounded text-black`}>
              Call us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const minColumnWidth = 300; // Minimum width for each column in pixels
      const calculatedColumns = Math.max(1, Math.floor(window.innerWidth / minColumnWidth));
      setColumns(calculatedColumns);
    };

    handleResize(); // Set initial columns
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageData = [
    { image: 'image-grid/mopping.jpg', title: 'Mopping' },
    { image: 'image-grid/sweeping.jpg', title: 'Sweeping' },
    { image: 'image-grid/oven-cleaning.jpg', title: 'Oven Cleaning' },
    { image: 'image-grid/vaccumming.jpg', title: 'Vacumming' },
    { image: 'image-grid/kitchen-cleaning.jpg', title: 'Kitchen Cleaning' },
    { image: 'image-grid/wall-cleaning.jpg', title: 'Wall Cleaning' },
    { image: 'image-grid/dusting.jpg', title: 'Dusting' },
    { image: 'image-grid/bathroom-cleaning.jpg', title: 'Bathroom Cleaning' },
    { image: 'image-grid/floor-cleaning.jpg', title: 'Floor Cleaning' },
  ];

  const images = ['https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f', 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383'];

  return (
    <div className="flex px-5 flex-col items-center py-10">
      <p className="text-center max-w-[50em] my-10">Our professional house cleaning services make it easy to enjoy a spotless home and a hassle-free life. To find out more about our extensive services or obtain a free, no-obligation quote, call us now!</p>
      <h1 className="my-10 text-3xl font-bold text-center">
        What&apos;s <span className="text-[#E3B04A]">Included</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-5 md:max-w-[100em]">
        {imageData.map((e, i) => (
          <ServiceCard file={e.image} text={e.title} key={i} />
        ))}
      </div>
      <h1 className="my-10 text-3xl font-bold text-center">
        Our <span className="text-[#E3B04A]">Gallery</span>
      </h1>
      <ImageGallery imageData={images} columns={columns} />
    </div>
  );
}

function ServiceCard({ file, text }: { file: string; text: string }) {
  const image = `url(/${file})`;
  return (
    <div className="max-w-80 h-40 grid w-full rounded-md relative before:absolute before:w-full before:h-full before:inset-0 before:bg-gradient-to-l from-[#ffffff40] from-10% to-[#00000063] bg-cover bg-no-repeat bg-bottom bg-gray-200 overflow-hidden" style={{ backgroundImage: image }}>
      <h1 className="z-10 self-end p-5 text-xl text-white">{text}</h1>
    </div>
  );
}
