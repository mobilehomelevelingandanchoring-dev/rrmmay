'use client';

import Link from 'next/link';
import { surfaces } from '../data/surfaces';
import { Layout } from '@/components/layout/Layout';
import { ContactInfo } from '@/components/ContactInfo';

const SurfacesIndex = () => {
  const surfacesList = Object.values(surfaces);

  return (
    <Layout>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Material & Surface Types</h1>
          <p className="text-xl mb-4">
            Expert cleaning for every exterior surface
          </p>
          <p className="text-lg text-green-100">
            Learn how to properly maintain your specific surfaces
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Understanding Your Surfaces</h2>
          <p className="text-gray-700 mb-4">
            Different exterior materials have different cleaning requirements. Using the wrong techniques or pressure can cause damage that's more expensive to repair than the original problem.
          </p>
          <p className="text-gray-700">
            Click on your surface type to learn about proper maintenance, common problems, and the best cleaning approaches.
          </p>
        </div>
      </section>

      {/* Surfaces Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfacesList.map((surface) => (
              <Link
                key={surface.slug}
                href={`/surfaces/${surface.slug}`}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-green-600"
              >
                <h3 className="text-xl font-bold mb-3 text-green-600">
                  {surface.name}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">{surface.description}</p>
                <div className="text-green-600 font-semibold">
                  Explore â†’
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Surface Categories */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Material Categories</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Hard Porous Surfaces</h3>
              <p className="text-gray-700 mb-4">
                These surfaces are porous and absorb stains readily, but can tolerate moderate pressure washing.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>â€¢ Concrete</li>
                <li>â€¢ Tarmac/Asphalt</li>
                <li>â€¢ Block Paving</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Masonry Materials</h3>
              <p className="text-gray-700 mb-4">
                Traditional and valuable materials that require careful, low-pressure soft washing.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>â€¢ Brick and Stone</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Delicate Materials</h3>
              <p className="text-gray-700 mb-4">
                These materials are vulnerable to water damage and require very gentle cleaning techniques.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>â€¢ Timber and Wood</li>
                <li>â€¢ Roof Tiles and Gutters</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Modern Materials</h3>
              <p className="text-gray-700 mb-4">
                Low-maintenance materials that still benefit from professional care and maintenance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>â€¢ uPVC and Plastic</li>
                <li>â€¢ Glass and Glazing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Cleaning for Each Material */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Why Material-Specific Cleaning?</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 text-white font-bold">
                  âœ“
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold mb-2">Prevent Damage</h3>
                <p className="text-gray-700">
                  High-pressure washing damages some materials. Professional technicians know the appropriate pressure for each surface type.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 text-white font-bold">
                  âœ“
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold mb-2">Extend Life</h3>
                <p className="text-gray-700">
                  Proper maintenance extends material lifespan. Improper cleaning accelerates deterioration.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 text-white font-bold">
                  âœ“
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold mb-2">Save Money</h3>
                <p className="text-gray-700">
                  Professional cleaning prevents expensive damage repairs that cost far more than regular maintenance.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 text-white font-bold">
                  âœ“
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold mb-2">Maintain Value</h3>
                <p className="text-gray-700">
                  Well-maintained surfaces keep your property looking its best, protecting its value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips Across Materials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Universal Maintenance Principles</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold mb-2">Regular Inspection</h4>
              <p className="text-gray-700">Catch problems early before they become expensive.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold mb-2">Professional Assessment</h4>
              <p className="text-gray-700">Let experts determine the best approach for your specific surfaces.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold mb-2">Preventative Care</h4>
              <p className="text-gray-700">Regular professional cleaning prevents problems from developing.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold mb-2">Prompt Treatment</h4>
              <p className="text-gray-700">Address problems immediately when they appear.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold mb-2">Appropriate Methods</h4>
              <p className="text-gray-700">Use the right technique for your material type.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Unsure About Your Surfaces?</h2>
          <p className="text-xl mb-6">Our experts can assess your property and recommend the best approach</p>
          <div className="flex gap-4 justify-center">
            <a
              href="tel:+447845463877"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
            >
              Call for Advice
            </a>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-green-700">
              Free Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Expert Surface Care
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get professional advice for cleaning and maintaining your specific surfaces.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default SurfacesIndex;
