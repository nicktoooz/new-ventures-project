'use client';
import { useState } from 'react';
import ImageGrid from '@/app/(components)/ImageGrid';
import Quote from '@/app/(components)/QuoteOverlay';
import { SuccessMessage } from '@/app/(components)/SuccessMessage';

export default function EndOfLease() {
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
      <div className={`h-[80vh] md:h-[30em] relative after:absolute after:inset-0 after:content-[''] after:bg-gradient-cover before:opacity-[0.5] before:absolute before:inset-0 before:content-[''] before:h-full before:w-full before:bg-eol-clean before:bg-center grid place-items-center`}>
        <div className="hero-content z-10 text-white max-w-[60em] px-10">
          <h1 className={`text-3xl md:text-4xl mb-4 font-bold`}>End of Lease Cleaning</h1>
          <p>Our end of lease cleaning service is designed to meet the stringent requirements of property managers and landlords. We provide a comprehensive clean to ensure you get your full security deposit back.</p>
          <div className={`flex gap-5 flex-col sm:flex-row mt-5`}>
            <button onClick={() => setQuoteVisible(true)} className={`p-2 max-w-40 w-full bg-[#5465FF] transition-all hover:bg-[#2A2A27] rounded text-white`}>
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
