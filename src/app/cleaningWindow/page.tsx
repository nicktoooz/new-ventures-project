import window from '../../../public/Frame 102.png'
import Image from "next/image";
export default function WindowCleaning(){
    return(
        <main className={`flex bg-[#dde4fb] px-20 py-16`}>
            <div className={`flex-col flex p-10`}>
                <h1 className={`text-3xl font-bold`}>Window Cleaning</h1>
                <p className={`mt-10 text-xl`}>Looking for expert window cleaners in Sydney? You&apos;ve come to the
                    right place! We provide top-notch window cleaning services for a wide range of clients, including
                    houses, shops, bars, car dealerships, showrooms, and strata buildings.</p>
                <p className={`mt-5 text-xl`}>Having your windows professionally cleaned is an effective way to give
                    your property a fresh, new look. Visitors will immediately notice if your glass doors and windows
                    are free from dust and grime. This is especially important for shopfront windows, as clean windows
                    leave a strong impression that you mean business.</p>
                <div className={`flex gap-5 mt-14 `}>
                    <button className={`p-2 w-32 bg-[#5465FF] hover:bg-white hover:text-[#5465FF] border border-[#5465FF] rounded text-white`}>Get a Quote</button>
                    <button className={`py-2 w-32 px-4 bg-white hover:bg-[#5465FF] hover:text-white rounded text-[#5465FF] border border-[#5465FF]`}>Call us Now</button>
                </div>
            </div>

            <Image className={`aspect-auto w-[32em] p-5`} src={window} alt={``}/>

        </main>
    )
}