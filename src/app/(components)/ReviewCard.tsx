import quote from '../../../public/quote.svg'
import Image from "next/image";


type ReviewContent = {
    name: string,
    review: string
}
export default function ReviewCard (props: ReviewContent){
    return(
        <div className={`flex flex-col max-w-[28em] h-56 bg-white rounded-xl p-5 shadow `}>
            <div className={`flex items-center`}>
                <div className={`aspect-square w-16 mr-2 bg-gray-300 rounded-full`}></div>
                <h1 className={`text-xl font-bold`}>{props.name}</h1>
                <Image className={`ml-auto opacity-80`} src={quote} alt={``}/>
            </div>
            <p className={`mt-3`}>{props.review}</p>

        </div>
    )
}