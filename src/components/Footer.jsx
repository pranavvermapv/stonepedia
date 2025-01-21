import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">StonePedia</h3>
            <p className="text-gray-400">Your ultimate guide to premium and popular stones</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="text-gray-400">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex justify-end space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 StonePedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

