
import React from 'react';
import Image from 'next/image';

export default function Market() {
    const imageData = [
        { image: '', title: '' , name: 'All Purpose Cleaner',price:'Php 180', quantity:'100ml'},
        { image: '', title: '', name: 'All Purpose Cleaner' ,price:'Php 180', quantity:'100ml'},
        { image: '', title: '', name: 'All Purpose Cleaner' ,price:'Php 180', quantity:'100ml'},
        { image: '', title: '' , name: 'All Purpose Cleaner',price:'Php 180', quantity:'100ml'},
        { image: '', title: '', name: 'All Purpose Cleaner' ,price:'Php 180', quantity:'100ml'},
        { image: '', title: '', name: 'All Purpose Cleaner' ,price:'Php 180', quantity:'100ml'},
        { image: '', title: '', name: 'All Purpose Cleaner' ,price:'Php 180', quantity:'100ml'},
        { image: '', title: '' , name: 'All Purpose Cleaner',price:'Php 180', quantity:'100ml'},
    ];

    return (
        <div className="flex px-5 flex-col items-center py-10 mb-10">
            <h1 className=" mt-5 text-3xl font-bold text-center">
                Eco-Friendly Cleaning Solutions
            </h1>
            <p className=" mt-3 text-xl text-center">
                Choose from a wide range of sustainable, non-toxic cleaning products designed to keep your spaces spotless while protecting the environment.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-[80em]">
                {imageData.map((e, i) => (
                    <ProductCard file={e.image} text={e.title} name={e.name} price={e.price} quantity={e.quantity}
                                 key={i}/>
                ))}
            </div>
        </div>
    );
}

function ProductCard({file, text, name, price, quantity}: {
    file: string;
    text: string;
    name: string;
    price:string; quantity:string }) {
    const image = `url(/${file})`; // Ensure the image path is correct for Next.js public folder
    return (
        <div className="flex flex-col w-72 items-center p-5 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={text} className="w-full h-[18em] object-cover"/>
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-xl font-semibold">{name}</h2>
                <h2 className="text-xl font-semibold">{price}</h2>
                <h2 className="text-xl font-semibold">{quantity}</h2>
                <a className={`py-3 px-8 bg-[#F5D562] rounded`} href="https://www.facebook.com/coderilateral"> Order Now</a>
            </div>
        </div>
    );
}
