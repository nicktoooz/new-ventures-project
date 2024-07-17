'use client';
import { useState } from 'react';
import Quote from '@/app/(components)/QuoteOverlay';

export default function CommercialCleaning() {
  const [quoteVisible, setQuoteVisible] = useState(false);

  return (
    <>
      <Quote visible={quoteVisible} onClose={() => setQuoteVisible(!quoteVisible)} />
      <Hero setQuoteVisible={setQuoteVisible} />
    </>
  );
}

function Hero({ setQuoteVisible }: { setQuoteVisible:  React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div>
      <div className={`h-[80vh] md:h-[30em] relative after:absolute after:inset-0 after:content-[''] after:bg-gradient-cover before:opacity-[0.5] before:absolute before:inset-0 before:content-[''] before:h-full before:w-full before:bg-commercial-clean before:bg-center grid place-items-center`}>
        <div className="hero-content z-10 text-white max-w-[60em] px-10">
          <h1 className={`text-3xl md:text-4xl mb-4 font-bold`}>Commercial / Office Cleaning</h1>
          <p>Our team of expert cleaners is dedicated to delivering top-notch cleaning services to businesses in the area. We understand that each business has unique cleaning needs, which is why we offer customizable cleaning packages tailored to your specific requirements.</p>
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
