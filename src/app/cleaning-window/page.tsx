'use client';
import ImageGrid from '@/app/(components)/ImageGrid';
import Quote from '@/app/(components)/QuoteOverlay';
import { useState } from 'react';
import { SuccessMessage } from '@/app/(components)/SuccessMessage';
import ImageGallery from '@/app/(components)/ImageGrid';

export default function WindowCleaning() {
  const [quoteVisible, setQuoteVisible] = useState(false);

  return (
    <>
      <Quote visible={quoteVisible} onClose={() => setQuoteVisible(false)} />
      <Hero setQuoteVisible={setQuoteVisible} />
      <Body />
    </>
  );
}

function Hero({ setQuoteVisible }: { setQuoteVisible: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div>
      <div className={`h-[80vh] md:h-[30em] relative after:absolute after:inset-0 after:content-[''] after:bg-gradient-cover before:opacity-[0.5] before:absolute before:inset-0 before:content-[''] before:h-full before:w-full before:bg-window-clean before:bg-center grid place-items-center`}>
        <div className="hero-content z-10 text-white max-w-[60em] px-10">
          <h1 className={`text-3xl md:text-4xl mb-4 font-bold`}>Window Cleaning</h1>
          <p>Looking for expert window cleaners in Sydney? You&apos;ve come to the right place! We provide top-notch window cleaning services for a wide range of clients, including houses, shops, bars, car dealerships, showrooms, and strata buildings.</p>
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

  const images = ['https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f', 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383'];

  return (
    <div className="flex flex-col items-center px-5 py-10">
      <p className="text-center max-w-[50em] m-10">Having your windows professionally cleaned is an effective way to give your property a fresh, new look. Visitors will immediately notice if your glass doors and windows are free from dust and grime. This is especially important for shopfront windows, as clean windows leave a strong impression that you mean business.</p>
      <h1 className="my-10 text-3xl font-bold text-center">
        Our <span className="text-[#E3B04A]">Gallery</span>
      </h1>
      <ImageGallery imageData={images} />
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
