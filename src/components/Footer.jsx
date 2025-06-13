import React from 'react';
import back from '../assets/Footer.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{ height: 350, backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="footer-class"
    >
      <div className="mx-auto w-full">
        <div className="mx-auto w-full max-w-screen-xl p-3 py-6 lg:py-8">
          <div className='flex justify-between'>
            <div className="mb-6 md:mb-0">
              <p style={{ marginTop: 20, fontSize: 30, fontWeight: 'bold', color: 'white' }}>
                <i>IETE THAPAR</i>
              </p>
              <p
                style={{ fontFamily: 'ABeeZee', fontSize: 22, color: 'white', width: 'fit-content', marginTop: 20 }}
              >
                Companies that can help you in<br />
                developing your company for the<br />
                future
              </p>
            </div>
            <div className='grid gap-12 sm:grid-cols-12'>
              <div className="sm:col-span-6">
                <p style={{ marginTop: 20, fontSize: 30, fontWeight: 'bold', color: 'white' }}>
                  <i>PROJECTS</i>
                </p>
                <ul className="text-gray-500 font-medium mt-4">
                  <li>
                    <Link to="/web-development" className="text-white text-lg transition-colors duration-300 hover:text-purple-700">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/ui-ux" className="text-white text-lg transition-colors duration-300 hover:text-purple-700">
                      UI/UX Designer
                    </Link>
                  </li>
                  <li>
                    <Link to="/branding" className="text-white text-lg transition-colors duration-300 hover:text-purple-700">
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link to="/shopify" className="text-white text-lg transition-colors duration-300 hover:text-purple-700">
                      Shopify
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sm:col-span-6">
                <p style={{ marginTop: 20, fontSize: 30, fontWeight: 'bold', color: 'white' }}>
                  <i>BOOTCAMPS</i>
                </p>
                <ul className="text-gray-500 font-medium mt-4">
                  <li>
                    <Link to="/chatbot-training" className="text-white text-lg transition-colors duration-300 hover:text-purple-700">
                      Data-Based Chatbot Training
                    </Link>
                  </li>
                  <li>
                    <Link to="/model-fine-tuning" className="text-white text-lg transition-colors duration-300 hover:text-purple-700">
                      Model Fine-Tuning
                    </Link>
                  </li>
                  <li>
                    <Link to="/sales-customer-service" className="text-white text-lg transition-colors duration-300 hover:text-purple-700">
                      Sales & Customer Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:flex sm:items-center sm:justify-between">
            <span className="text-lg text-white sm:text-center">
              IETE THAPAR © 2024
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link to="https://www.instagram.com/iete_thapar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white hover:text-purple-500" aria-label="Facebook page">
              <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link to="#" className="text-white hover:text-purple-500" aria-label="Whatsapp group">
              <i class="fa-brands fa-whatsapp"></i>
              </Link>
              <Link to="https://www.linkedin.com/company/iete-thapar/mycompany/" className="text-white hover:text-purple-500" aria-label="LinkedIn page">
              <i class="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link to="#" className="text-white hover:text-purple-500" aria-label="Twitter page">
              <i class="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
