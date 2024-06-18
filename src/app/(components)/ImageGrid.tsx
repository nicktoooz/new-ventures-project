'use client'
import { useState } from "react";
import Image from "next/image";

export default function ImageGrid() {

    const images = ['https://picsum.photos/1000?1', 'https://picsum.photos/1000?2', 'https://picsum.photos/1000?3', 'https://picsum.photos/1000?4']
    const [currentImage, setCurrentImage] = useState(images[0])

    const handleClick = (index: number) => {
        setCurrentImage(images[index])
    }

    return (
        <div className="preview justify-self-center grid aspect-square w-80 grid-cols-4 gap-2.5">
            <div className="main bg-red-600 aspect-square col-span-4">
                <Image src={currentImage} alt={'Current Image'} className={`w-full`} width={700} height={700} objectFit="cover" />
            </div>
            {images.map((image, index) => (
                <div key={index} className="aspect-square bg-blue-500" onClick={() => handleClick(index)}>
                    <Image src={image} className={'w-full'} alt={`Image ${index + 1}`} width={700} height={700} objectFit="cover" />
                </div>
            ))}
        </div>
    )
}
