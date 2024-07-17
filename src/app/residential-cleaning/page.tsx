'use client';
import ImageGrid from '@/app/(components)/ImageGrid';
import { useState } from 'react';
import Quote from '@/app/(components)/QuoteOverlay';

export default function ResidentialCleaning() {
  const [quoteVisible, setQuoteVisible] = useState(false);
  return (
    <>
      <Quote visible={quoteVisible} onClose={() => setQuoteVisible(!quoteVisible)} />
      <Hero setQuoteVisible={setQuoteVisible} />
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
            <button onClick={() => setQuoteVisible(true)} className={`p-2 max-w-40 w-full bg-[#5465FF] transition-all  hover:bg-[#6684ef] rounded text-white`}>
              Get a Quote
            </button>
            <button onClick={() => (location.href = 'tel:+61406780941')} className={`py-2 max-w-40 w-full bg-[#9BB1FF] hover:bg-[#819bf7] transition-all rounded text-black`}>
              Call us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
