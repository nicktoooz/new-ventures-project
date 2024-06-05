import quote from '../../../public/quote.svg'
import Image from "next/image";

export default function ReviewCard (){
    return(
        <div className={`flex flex-col w-[28em] h-56 bg-white rounded-xl p-5 shadow-xl `}>
            <div className={`flex items-center gap-5`}>
                <div className={`w-8 h-8 bg-gray-300 rounded-full p-8`}><h1></h1></div>
                <h1 className={`text-xl font-bold`}>John Doe</h1>
                <Image className={`ml-32`} src={quote} alt={``}/>
            </div>
            <p className={`mt-3`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>
    )
}