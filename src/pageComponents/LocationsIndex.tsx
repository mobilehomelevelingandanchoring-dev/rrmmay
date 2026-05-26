'use client';

import Link from 'next/link';
import { locations } from '../data/locations';
import type { Location } from '../types';
import { Layout } from '@/components/layout/Layout';
import { ContactInfo } from '@/components/ContactInfo';

const LocationsIndex = () => {
  // Group locations by county
  const locationsByRegion = locations.reduce(
    (acc, location) => {
      const region = location.county;
      if (!acc[region]) acc[region] = [];
      acc[region].push(location);
      return acc;
    },
    {} as Record<string, Location[]>
  );

  const regions = Object.keys(locationsByRegion).sort();

  return (
    <Layout>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Exterior Cleaning Locations — North West England</h1>
          <p className="text-xl mb-4">
            R.R.M External Cleaning Specialist covers 21 locations across Merseyside, Greater
            Manchester, Cheshire, and West Lancashire — 47 five-star reviews, est. 2016.
          </p>
          <p className="text-lg text-blue-100">
            Find your area below to see available services, local pricing, and same-week availability.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Exterior Cleaning Services Near You</h2>
          <p className="text-gray-700 mb-4">
            Based in Newton-le-Willows (WA12) since 2016, R.R.M External Cleaning Specialist
            covers driveways, roofs, render, gutters, patios, and 35 more exterior cleaning
            services across the North West. Whether you&apos;re in Warrington, Liverpool,
            Manchester, or anywhere between Merseyside and Greater Manchester — your property
            is within our regular service area.
          </p>
          <p className="text-gray-700">
            Select your location to see all 40 services available in your area, local pricing
            context, and to request a free no-obligation quote with same-week availability.
          </p>
        </div>
      </section>

      {/* Locations by Region */}
      {regions.map((region) => (
        <section key={region} className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">{region}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationsByRegion[region].map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-blue-600"
                >
                  <h3 className="text-2xl font-bold mb-2 text-blue-600">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      40 services available
                    </span>
                    <span className="text-blue-600 font-semibold">
                      View services →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Coverage Map Info */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Areas We Cover for Exterior Cleaning</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Merseyside</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Newton-le-Willows (Home base)</li>
                <li>• Widnes</li>
                <li>• St Helens</li>
                <li>• Wavertree</li>
                <li>• Halewood</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Cheshire & Greater Manchester</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Warrington</li>
                <li>• Lymm</li>
                <li>• Golborne</li>
                <li>• Huyton</li>
                <li>• Manchester</li>
                <li>• Irlam</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-3">Lancashire & Beyond</h3>
            <ul className="space-y-2 text-gray-700 grid md:grid-cols-2 gap-4">
              <li>• Ormskirk</li>
              <li>• Skelmersdale</li>
              <li>• Woolton</li>
              <li>• Aigburth</li>
              <li>• Litherland</li>
              <li>• Great Sankey</li>
              <li>• Leigh</li>
              <li>• Uppermill</li>
              <li>• Childwall</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">What Exterior Cleaning Services Are Available in Your Area?</h2>
          <p className="text-gray-700 mb-8">
            Wherever you are in the North West, you get access to all 40 professional exterior
            cleaning services — from a single jet wash to a full exterior restoration. Every
            service is carried out by R.R.M directly — no subcontracting, ever.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">• Pressure Washing</div>
            <div className="bg-gray-50 p-4 rounded-lg">• Driveway Cleaning</div>
            <div className="bg-gray-50 p-4 rounded-lg">• Roof Cleaning</div>
            <div className="bg-gray-50 p-4 rounded-lg">• Gutter Cleaning</div>
            <div className="bg-gray-50 p-4 rounded-lg">• Patio Cleaning</div>
            <div className="bg-gray-50 p-4 rounded-lg">• Render Cleaning</div>
            <div className="bg-gray-50 p-4 rounded-lg">• Window Cleaning</div>
            <div className="bg-gray-50 p-4 rounded-lg">• Conservatory Cleaning</div>
            <div className="bg-gray-50 p-4 rounded-lg">• Commercial Cleaning</div>
            <div className="bg-gray-50 p-4 rounded-lg">• Soft Washing</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Location? We Likely Cover It.</h2>
          <p className="text-xl mb-6">Call 07845 463877 — we cover most of the North West and can usually confirm same-day.</p>
          <div className="flex gap-4 justify-center">
            <a
              href="tel:+447845463877"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
            >
              Call Us
            </a>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Book Your Free Exterior Cleaning Quote
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            R.R.M covers 21 locations across the North West. Call 07845 463877 — we respond
            the same day and can typically be with you within the week.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default LocationsIndex;
