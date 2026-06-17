import React from 'react';
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa';

interface SocialLink {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const SocialSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      id: 'youtube',
      name: 'YouTube',
      icon: <FaYoutube className="w-8 h-8 sm:w-10 sm:h-10" />,
      url: 'https://www.youtube.com/@yourchannel',
      color: 'hover:text-red-600',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10" />,
      url: 'https://www.instagram.com/yourprofile',
      color: 'hover:text-pink-600',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: <FaTwitter className="w-8 h-8 sm:w-10 sm:h-10" />,
      url: 'https://www.twitter.com/yourprofile',
      color: 'hover:text-blue-500',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <FaFacebook className="w-8 h-8 sm:w-10 sm:h-10" />,
      url: 'https://www.facebook.com/yourprofile',
      color: 'hover:text-blue-700',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10" />,
      url: 'https://www.linkedin.com/in/yourprofile',
      color: 'hover:text-blue-800',
    },
  ];

  return (
    <section className="w-full bg-primary text-white py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Follow Us On Social Media
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Stay connected and get the latest updates from our community
          </p>
        </div>

        {/* Social Icons Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.name}`}
              className={`
                inline-flex items-center justify-center
                p-3 sm:p-4
                rounded-full
                bg-white/10 hover:bg-white/20
                ${social.color}
                text-white
                transition-all duration-300
                hover:scale-110
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white
              `}
              title={`Follow us on ${social.name}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-white/80 mb-4">
            Join our growing community
          </p>
          <button className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-highlight text-primary font-semibold rounded-lg hover:bg-highlight/90 transition-colors duration-200">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
