import { Pet } from '@/types/petData'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight, Heart } from 'lucide-react'

function PetCard({ id, imageUrl, name, breed, age, description, location, adoptionFee }: Pet) {
    return (
        <Link
            href={`/pet/${id}`}
            className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col"
            aria-label={`View profile of ${name}`}
        >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                />
                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-gray-800 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                        {age}
                    </span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-pink-500 hover:text-white transition-colors duration-300">
                    <Heart size={18} />
                </button>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {name}
                    </h2>
                    <p className="text-purple-600 font-medium text-sm">
                        {breed}
                    </p>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                    {description}
                </p>

                {/* Info Bar */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                            <MapPin size={14} className="text-purple-400" />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-900 font-bold text-sm">
                            {/* <DollarSign size={14} className="text-green-500" /> */}
                            <span>₦{adoptionFee}</span>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-3 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                        <ArrowRight size={20} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PetCard