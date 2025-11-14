
import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="hover:text-white">
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white">
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white">
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base">
              &copy; {new Date().getFullYear()} Les Amants Bandits. Tous droits réservés.
            </p>
          </div>
        </div>
         <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-center">
            <div className="flex space-x-4 justify-center">
                 <a href="#" className="text-sm hover:text-white">À propos de nous</a>
                 <a href="#" className="text-sm hover:text-white">Termes et Conditions</a>
                 <a href="#" className="text-sm hover:text-white">Politique de confidentialité</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
