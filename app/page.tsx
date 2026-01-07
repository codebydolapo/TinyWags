"use client"
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import { Heart, Search, Syringe, HandCoins, PawPrint, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import petData from "@/data/petData";
import PetCard from "@/components/PetCard";
import { PetData } from "@/types/petData";
import queries from "@/graphql/queries";
import Link from "next/link";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export default function Home() {
  type PetCategory = keyof PetData;
  const categories: PetCategory[] = ['dogs', 'cats', 'rabbits', 'birds'];
  
  const [activeTab, setActiveTab] = useState<PetCategory>('dogs');
  const [currentPets, setCurrentPets] = useState<PetData[PetCategory]>([]);
  const [petsLoading, setPetsLoading] = useState(true);
  const [petsError, setPetsError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      setPetsLoading(true);
      setPetsError(null);
      try {
        const response = await fetch('/api/graph', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: queries.GET_PETS_BY_CATEGORY_QUERY,
            variables: { category: activeTab },
          }),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        if (result.errors) throw new Error(result.errors[0].message);
        
        setCurrentPets(result.data.petsByCategory);
      } catch (error: any) {
        setPetsError(error);
      } finally {
        setPetsLoading(false);
      }
    };

    fetchPets();
  }, [activeTab]);

  return (
    <main className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="container mx-auto px-4 min-h-[90vh] flex flex-col items-center justify-center py-12">
        <div className="max-w-4xl text-center mb-12">
          <h1 className={`${josefin.className} text-4xl md:text-7xl font-bold leading-tight tracking-tight text-gray-900`}>
            Unwavering pet care for your <span className="text-purple-600">furry friend</span>, all day every day!
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="/about" className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all flex items-center group">
              Read More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/donations" className="px-8 py-4 bg-white border-2 border-gray-100 shadow-sm rounded-full font-bold text-black flex items-center hover:shadow-md transition-all">
              <HandCoins className="mr-2 text-purple-600" />
              Make Donation
            </Link>
          </div>
        </div>

        {/* Floating Image Gallery */}
        <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-5xl">
          <div className="w-1/3 aspect-square rounded-full bg-pink-100 p-2 md:p-4 animate-bounce-slow">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image alt="Pet 1" src="/images/landing1.png" fill className="object-cover" />
            </div>
          </div>
          <div className="w-1/3 aspect-square rounded-3xl bg-green-100 p-2 md:p-4 rotate-3">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <Image alt="Pet 2" src="/images/landing2.png" fill className="object-cover" />
            </div>
          </div>
          <div className="w-1/3 aspect-square rounded-t-full bg-purple-100 p-2 md:p-4 animate-bounce-slow delay-150">
            <div className="w-full h-full rounded-t-full overflow-hidden relative">
              <Image alt="Pet 3" src="/images/landing3.png" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ADOPTION TABS SECTION */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Pets Available For Adoption
          </h2>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-gray-100">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2.5 rounded-full text-sm md:text-base font-medium capitalize transition-all
                    ${activeTab === category 
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
                      : 'text-gray-500 hover:text-gray-800'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {petsLoading ? (
            <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div></div>
          ) : petsError ? (
            <p className="text-center text-red-500">Something went wrong. Please try again.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPets.map((pet) => (
                <PetCard key={pet.id} {...pet} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-3 items-center gap-12">
          <div className="space-y-12 order-2 md:order-1">
             <FeatureItem 
              icon={<Search className="text-green-500" />} 
              title="Search" 
              desc="Adopt a dog who's right for you. Simply pick one from the selections above and get started." 
              align="md:text-right"
             />
             <FeatureItem 
              icon={<Syringe className="text-purple-500" />} 
              title="Free Vet Consultation" 
              desc="We help your pet settle down in its new home once you complete the adoption requirements." 
              align="md:text-right"
             />
          </div>

          <div className="relative flex justify-center order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50 scale-125"></div>
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <Image alt="Featured" src="/images/landing3.png" fill className="object-contain z-10" />
              <div className="absolute inset-0 rounded-full border-[12px] border-purple-50 opacity-50"></div>
            </div>
          </div>

          <div className="space-y-12 order-3">
            <FeatureItem 
              icon={<Heart className="text-red-500 fill-red-500" />} 
              title="Adopt Love" 
              desc="The rescue or pet parents will walk you through the adoption process step by step." 
            />
             <FeatureItem 
              icon={<PawPrint className="text-orange-500" />} 
              title="Quick Process" 
              desc="Our automated system helps match you with local shelters faster than ever." 
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 min-h-[300px] relative">
            <Image src="/images/testimonial.jpeg" alt="Testimonial" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="font-bold">Jane Nitzsche</p>
              <p className="text-sm opacity-80">Adopted Olivia (Golden Retriever)</p>
            </div>
          </div>
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-purple-50/30">
            <span className="text-6xl text-purple-200 font-serif leading-none">&quot;</span>
            <h3 className="text-2xl font-bold mt-2">Absolutely wonderful!</h3>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              &quot;I am very happy to adopt Olivia. I was fortunate enough to find her on TinyWags. The process was smooth and the team was incredibly helpful throughout.&quot;
            </p>
            <div className="flex gap-2 mt-8">
               {[1,2,3].map(i => <div key={i} className={`h-2 rounded-full transition-all ${i === 1 ? 'w-8 bg-purple-600' : 'w-2 bg-gray-200'}`} />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureItem({ icon, title, desc, align = "text-left" }: { icon: any, title: string, desc: string, align?: string }) {
  return (
    <div className={`flex flex-col ${align === 'md:text-right' ? 'md:items-end' : 'items-start'} gap-3`}>
      <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center border border-gray-50">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
        <p className={`text-gray-500 text-sm leading-relaxed max-w-xs ${align}`}>{desc}</p>
      </div>
    </div>
  )
}