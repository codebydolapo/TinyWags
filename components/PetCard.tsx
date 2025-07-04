import { Pet } from '@/types/petData'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function PetCard({ id, imageUrl, name, breed, age, description, location, adoptionFee }: Pet) {
    return (
        <Link
            // key={id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-xl"
            href={`/pet/${id}`} // Link to the pet's profile page
            aria-label={`View profile of ${name}`}
        >
            <div className="w-full h-48 relative"> {/* Wrapper div for image */}
                <Image
                    src={imageUrl}
                    alt={name}
                    className="object-cover w-full h-full rounded-t-xl" // Adjusted styling for <Image>
                    width={0} height={0}
                    unoptimized
                />
            </div>
            <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{name}</h2>
                <p className="text-gray-600 text-sm mb-2">
                    <span className="font-medium">{breed}</span> &bull; Age: {age}
                </p>
                <p className="text-gray-700 text-base mb-3 line-clamp-3">{description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span>Location: {location}</span>
                    <span>Fee: ${adoptionFee}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">
                        View Profile &rarr;
                    </span>
                    {/* Placeholder for an action button, similar to the image */}
                    <button className="p-2 bg-purple-100 rounded-full text-purple-600 hover:bg-purple-200 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default PetCard