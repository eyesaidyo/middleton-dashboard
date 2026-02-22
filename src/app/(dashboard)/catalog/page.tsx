'use client';

import Image from 'next/image';
import { MapPin, Bed, Bath, Maximize, Heart } from 'lucide-react';

export default function CatalogPage() {
  const apartments = [
    {
      id: 1,
      title: "Modern Loft in Lekki",
      location: "Lekki Phase 1, Lagos",
      price: "\u20A62,500,000",
      period: "per year",
      beds: 3,
      baths: 2,
      sqft: 1200,
      image: "/house.jpg",
      tag: "Featured"
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      location: "Ikoyi, Lagos",
      price: "\u20A68,000,000",
      period: "per year",
      beds: 5,
      baths: 4,
      sqft: 3500,
      image: "/house3.jpg",
      tag: "New"
    },
    {
      id: 3,
      title: "Cozy Apartment in Yaba",
      location: "Yaba, Lagos",
      price: "\u20A61,200,000",
      period: "per year",
      beds: 2,
      baths: 1,
      sqft: 900,
      image: "/house4.jpg",
      tag: null
    },
    {
      id: 4,
      title: "Executive Suite",
      location: "Victoria Island, Lagos",
      price: "\u20A64,500,000",
      period: "per year",
      beds: 2,
      baths: 2,
      sqft: 1500,
      image: "/house5.jpg",
      tag: null
    },
     {
      id: 5,
      title: "Family Home",
      location: "Ikeja GRA, Lagos",
      price: "\u20A63,000,000",
      period: "per year",
      beds: 4,
      baths: 3,
      sqft: 2200,
      image: "/house6.jpg",
      tag: "Popular"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-middleton-green font-figtree">Available Apartments</h1>
          <p className="text-gray-500 mt-1">Find your perfect home from our curated list.</p>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search location..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-middleton-green focus:border-middleton-green w-full md:w-64"
          />
          <button className="bg-middleton-green text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90">
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apartments.map((apt) => (
          <div key={apt.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src={apt.image}
                alt={apt.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors">
                <Heart size={18} />
              </button>
              {apt.tag && (
                <span className="absolute top-3 left-3 px-3 py-1 bg-middleton-green text-middleton-neon text-xs font-bold uppercase tracking-wide rounded-md">
                  {apt.tag}
                </span>
              )}
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{apt.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    {apt.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 py-4 border-b border-gray-100 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <Bed size={16} className="mr-1.5 text-middleton-green" />
                  {apt.beds} Beds
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Bath size={16} className="mr-1.5 text-middleton-green" />
                  {apt.baths} Baths
                </div>
                 <div className="flex items-center text-gray-600 text-sm">
                  <Maximize size={16} className="mr-1.5 text-middleton-green" />
                  {apt.sqft} sqft
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-middleton-green">{apt.price}</span>
                  <span className="text-gray-500 text-sm">/{apt.period.replace('per ', '')}</span>
                </div>
                <button className="px-4 py-2 bg-middleton-denim text-middleton-green text-sm font-semibold rounded-md hover:bg-middleton-green hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
