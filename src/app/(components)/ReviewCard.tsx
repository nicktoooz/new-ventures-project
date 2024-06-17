import quote from '../../../public/quote.svg'
import Image from "next/image";

export default function ReviewCard (){
    return(
        <div className={`flex flex-col max-w-[28em] h-56 bg-white rounded-xl p-5 shadow `}>
            <div className={`flex items-center`}>
                <div className={`aspect-square w-16 mr-2 bg-gray-300 rounded-full`}></div>
                <h1 className={`text-xl font-bold`}>John Doe</h1>
                <Image className={`ml-auto opacity-80`} src={quote} alt={``}/>
            </div>
            <p className={`mt-3`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>
    )
}