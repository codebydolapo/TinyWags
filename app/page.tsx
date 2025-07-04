"use client"
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import { ArrowUp, Facebook, Heart, Instagram, Play, Search, Syringe, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import petData from "@/data/petData";
import PetCard from "@/components/PetCard";
import { PetData } from "@/types/petData";
import queries from "@/graphql/queries";


const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
})




export default function Home() {


  type PetCategory = keyof PetData;
  const categories: PetCategory[] = ['dogs', 'cats', 'rabbits', 'birds'];
  const [activeTab, setActiveTab] = useState<PetCategory>('dogs');

  const [currentPets, setCurrentPets] = useState<PetData[PetCategory]>(petData[activeTab]);


  // Fetch pets by category
  useEffect(() => {
    const fetchPets = async () => {
      // setPetsLoading(true);
      // setPetsError(null);
      try {
        const response = await fetch('/api/graph', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: queries.GET_PETS_BY_CATEGORY_QUERY,
            variables: { category: activeTab },
          }),
        });
        console.log(activeTab)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result.errors) {
          throw new Error(result.errors.map((err: any) => err.message).join(', '));
        }
        setCurrentPets(result.data.petsByCategory);
        console.log("Fetched pets:", result.data.petsByCategory);
      } catch (error: any) {
        // setPetsError(error);
        console.error("Error fetching pets by category:", error);
      }
    };

    fetchPets();
  }, [activeTab]); // Re-fetch when activeTab changes


  return (
    <div className="">
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-[70vw]">
          <h1 className={`text-[5rem] font-bold text-center text-black ${josefin.className}`}>Unwavering pet care for your furry friend, all day every day!</h1>
        </div>
        <div className="flex space-x-5 my-8">
          <div className='cursor-pointer md:w-[10rem] w-[7rem] md:h-[3rem] h-[2rem] bg-black text-white rounded-full font-bold flex items-center justify-center md:text-[1rem] text-xs'>
            Read More
          </div>
          <div className='cursor-pointer md:w-[10rem] w-[7rem] md:h-[3rem] h-[2rem] text-black rounded-full font-bold flex items-center justify-center md:text-[1rem] text-xs'>
            <Play className="text-black size-7 fill-black mx-2" />
            Watch Videos
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10 space-x-5">
          <div className="w-[20vw] h-[20vw] rounded-full bg-pink-300 relative flex items-center justify-center">
            <Image alt="" src="/images/landing1.png" width={0} height={0} className='rounded-full w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' unoptimized />
          </div>
          <div className="w-[20vw] h-[20vw] rounded-tl-[10vw] rounded-br-[10vw] bg-green-300 relative flex items-center justify-center">
            <Image alt="" src="/images/landing2.png" width={0} height={0} className='rounded-full w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' unoptimized />
          </div>
          <div className="w-[20vw] h-[20vw] rounded-t-full bg-purple-300 relative flex items-center justify-center">
            <Image alt="" src="/images/landing3.png" width={0} height={0} className='rounded-full w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' unoptimized />
          </div>
        </div>
      </div>



      {/*  */}

      <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 mt-4 text-center">
          Pets Available For Adoption Nearby
        </h1>

        {/* Category Tabs */}
        <div className="flex justify-center bg-white p-2 rounded-full shadow-lg mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-lg capitalize transition-all duration-300 ease-in-out
                ${activeTab === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pet Cards Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {/* Ensure petData[activeTab] is correctly typed as an array of Pet */}
          {currentPets.map((pet) => (
            <PetCard
              key={pet.id}
              {...pet}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-[70vh] flex items-center justify-center">
        <div className="w-1/3 h-full flex flex-col">
          <div className="w-full h-1/2 flex items-center justify-end">
            <div className="flex w-[25rem] items-center justify-center">
              <Search className="text-green-500 size-7 mx-4" />
              <div className="flex-1 flex flex-col">
                <p className="font-semibold">Search Pet</p>
                <p className="text-xs">Adopt a dog who's right for you. Simply pick one from the selections above and get started</p>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 flex items-center justify-end">
            <div className="flex w-[25rem] items-center justify-center">
              <Syringe className="text-purple-500 size-7 mx-4" />
              <div className="flex-1 flex flex-col">
                <p className="font-semibold">Free Vet Consultation</p>
                <p className="text-xs">We help your pet settle down in its new home, once you complete the adoption requirements</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full flex items-center justify-center relative">
          <div className="w-[25rem] h-[25rem] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          </div>
          <Image alt="" src="/images/landing3.png" width={0} height={0} className='w-[25rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' unoptimized />
        </div>
        <div className="w-1/3 h-full flex items-center justify-center">
          <div className="w-full h-1/2 flex items-center justify-start">
            <div className="flex w-[25rem] items-center justify-center">
              <Heart className="text-red-500 fill-red-500 size-7 mx-4" />
              <div className="flex-1 flex flex-col">
                <p className="font-semibold">Adopt Love</p>
                <p className="text-xs">The rescue or pet parents will walk you through the adoption process, once you complete the adoption journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">How It Works?</h2>

        {/* How It Works Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-16">
          {/* Card 1: Search Pets */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="w-20 h-20 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <Search className="text-purple-600 size-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Search Pets</h3>
            <p className="text-gray-600">Simply enter your city to start your search</p>
          </div>

          {/* Card 2: Meet */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="w-20 h-20 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              {/* Using Heart icon as a placeholder for the paw icon from the image */}
              <Heart className="text-blue-600 size-10 fill-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Meet</h3>
            <p className="text-gray-600">Schedule your appointment to meet the pet you love</p>
          </div>

          {/* Card 3: Adopt */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="w-20 h-20 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
              {/* Using Syringe icon as a placeholder for the hand icon from the image */}
              <Syringe className="text-pink-600 size-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Adopt</h3>
            <p className="text-gray-600">Finally adopt the dog or cat you love</p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/2 relative md:h-auto bg-black flex items-end justify-center overflow-hidden"> {/* Added overflow-hidden */}
            <Image
              src="/images/testimonial.jpeg" // Placeholder image for testimonial
              alt="Person with pet"
              className="absolute z-0 opacity-70 w-full h-full" // Adjusted styling for <img>
              width={0} height={0} unoptimized
            />
            <div className="relative z-10 text-white text-lg font-semibold mb-4">
              Jane Nitzsche
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="text-purple-500 text-5xl font-bold mb-4">"</div> {/* Opening quote */}
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Absolutely wonderful!</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I am very happy to adopt Olivia. I was fortunate enough to find her on The Pet Adoptions website-
            </p>
            <div className="text-pink-500 text-5xl font-bold self-end mt-auto">"</div> {/* Closing quote */}
            {/* Pagination dots */}
            <div className="flex justify-center md:justify-start mt-6 space-x-2">
              <span className="w-2 h-2 bg-gray-800 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full bg-white py-16 px-4 relative">
        {/* Newsletter Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Our Newsletter</h2>
          <p className="text-gray-600 mb-8">To join the worldwide community</p>
          <div className="flex flex-col sm:flex-row items-center bg-white p-2 rounded-full shadow-lg max-w-lg w-full">
            <input
              type="email"
              placeholder="Type your Email Address"
              className="flex-1 px-5 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 sm:mb-0 sm:mr-2 w-full sm:w-auto"
            // defaultValue="youremail@gmail.com" // Pre-filled as in the image
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300">
              Send Now
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-gray-700">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">TinyWags</h3>
            <p className="text-sm mb-4">Copyright © 2020. Logolpsum. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Product</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Category</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">About</a></li>
            </ul>
          </div>

          {/* About Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Our Story</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Benefits</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Team</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Careers</a></li>
            </ul>
          </div>

          {/* Scroll to Top Button */}
          <div className="absolute bottom-16 right-8">
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
