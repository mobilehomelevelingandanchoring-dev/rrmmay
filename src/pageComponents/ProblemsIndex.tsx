'use client';

import Link from "next/link";
import { problems } from "../data/problems";
import { Layout } from "@/components/layout/Layout";
import { ContactInfo } from "@/components/ContactInfo";

const ProblemsIndex = () => {
  const problemsList = Object.values(problems);

  return (
    <Layout>
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Exterior Property Problems & Solutions in North West UK
          </h1>
          <p className="text-xl mb-4">
            Identify common exterior property issues and get professional, safe, and long-lasting solutions
          </p>
          <p className="text-lg text-orange-100">
            Serving Newton-le-Willows, St Helens, Warrington, Liverpool, Manchester, and surrounding areas
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            Common Exterior Challenges We Solve
          </h2>
          <p className="text-gray-700 mb-4">
            Damp North West weather, pollution, and neglect can create moss, algae, lichen, and stubborn stains on your property's surfaces. Recognizing these problems early ensures proper treatment, preserves property value, and prevents costly damage.
          </p>
          <p className="text-gray-700">
            Explore each problem below to understand causes, risks, and professional solutions from our certified exterior cleaning team.
          </p>
        </div>
      </section>

      {/* Problems Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemsList.map((problem) => (
              <Link
                key={problem.slug}
                href={`/problems/${problem.slug}`}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border-t-4 border-orange-600"
              >
                <h3 className="text-xl font-bold mb-3 text-orange-600">
                  {problem.name}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">{problem.description}</p>
                <span className="inline-block text-orange-600 font-semibold">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Problem Categories</h2>

          <article className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-700">
                Biological Growth
              </h3>
              <p className="text-gray-700 mb-4">
                Moss, algae, and lichen thrive in damp climates across Newton-le-Willows and North West UK. They can cause slippery surfaces, block drains, and degrade roof tiles, driveways, and renders.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Moss growth on roofs and driveways</li>
                <li>Algae and discoloration on render & patios</li>
                <li>Lichen growth on roofs, walls, and gutters</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-700">
                Staining & Discoloration
              </h3>
              <p className="text-gray-700 mb-4">
                Environmental pollutants, traffic, and weather create stubborn stains on exteriors. Regular cleaning preserves aesthetics and property value.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Pollution and weather staining on walls and drives</li>
                <li>Oil and vehicle stains on driveways</li>
                <li>Black spots and mold growth on hard surfaces</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-700">
                General Grime & Surface Dirt
              </h3>
              <p className="text-gray-700 mb-4">
                Dirt accumulation dulls surfaces and can lead to surface erosion over time. Professional exterior cleaning removes grime safely.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Accumulated dirt on patios, driveways, and walls</li>
                <li>General surface grime on roofs and renders</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Why Professional Help */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Why Choose Professional Solutions?</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Safety First",
                description: "High-pressure equipment and roof cleaning can be dangerous. Our trained team ensures safe and compliant work on all surfaces."
              },
              {
                step: "2",
                title: "Prevent Further Damage",
                description: "Incorrect cleaning can worsen damage. Our professional expertise avoids costly mistakes."
              },
              {
                step: "3",
                title: "Long-Term Solutions",
                description: "Treatments prevent rapid regrowth of moss, algae, and grime, reducing maintenance frequency."
              },
              {
                step: "4",
                title: "Maintain Property Value",
                description: "Regular maintenance keeps your home or business looking its best and preserves its investment value."
              }
            ].map(({ step, title, description }) => (
              <div className="flex items-start" key={step}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-600 text-white font-bold">
                    {step}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Professional Exterior Cleaning Services</h2>
          <p className="text-gray-700 mb-6">
            We provide specialized solutions to address every exterior problem safely and effectively:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Soft Washing",
              "Pressure Washing",
              "Roof Cleaning",
              "Gutter Cleaning",
              "Driveway Cleaning",
              "Render Cleaning",
              "Patio Cleaning",
              "Window Cleaning"
            ].map((service) => (
              <div key={service} className="bg-white p-4 rounded-lg shadow">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Facing an Exterior Problem?</h2>
          <p className="text-xl mb-6">
            Contact our expert team for professional advice and long-lasting solutions in Newton-le-Willows and North West UK
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:+447845463877"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
            >
              Call for Advice
            </a>
            <Link
              href="/contact"
              className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700"
            >
              Request Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Expert Solutions for Your Property
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get professional advice and personalized solutions for your exterior cleaning needs.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
      </main>
    </Layout>
  );
};

export default ProblemsIndex;
