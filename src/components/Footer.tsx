import React from 'react';
import { TradeIcon } from '@/components/icons';

const Footer = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto flex justify-between">
        <div className="max-w-70">
          <div className="flex items-center mb-4">
            <TradeIcon />
          </div>
          <p className="text-white text-sm">
            The most advanced Trade Finance Platform built specifically for
            Emerging Markets that lets you access capital on your own terms.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-white my-4 font-bold">Contact Us</h2>
          <div className="text-white text-sm">
            Address: DD-15-134-004-007, Level 15, <br />
            Webwork Hub71, AI Khatem Tower, ADGM <br />
            Square, AI Maryah Island, Abu Dhabi, United <br />
            Arab Emirates;
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-white my-4 font-bold">Links</h2>
          <ul className="text-sm text-white">
            <li>
              <a href="https://test.com" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://test.com" target="_blank" rel="noreferrer">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="https://test.com" target="_blank" rel="noreferrer">
                Website
              </a>
            </li>
            <li>
              <a href="https://test.com" target="_blank" rel="noreferrer">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
