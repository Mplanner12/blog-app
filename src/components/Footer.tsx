import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#151015] text-white pt-12 pb-7 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <Link href="/" className="w-fit flex items-center">
            <Image
              width={100}
              height={100}
              src="/tobams-logo.png"
              alt="Tobams Group Logo"
              className="h-12 mb-2.5 w-32"
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Tobams Group is an innovative consultancy firm reshaping the future
            of tech talent development in Africa, specializing in talent
            acquisition, internships, and skill development with a global
            perspective.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <a href="#" className="bg-white hover:bg-gray-600 p-2 rounded-full">
              <FaLinkedinIn className="text-[#571244]" />
            </a>
            <a href="#" className="bg-white hover:bg-gray-600 p-2 rounded-full">
              <RiInstagramFill className="text-[#571244]" />
            </a>
            <a href="#" className="bg-white hover:bg-gray-600 p-2 rounded-full">
              <RiTwitterXFill className="text-[#571244]" />
            </a>
          </div>
        </div>

        {/* Links - What We Do */}
        <div>
          <h3 className="text-lg font-semibold mb-4">What We Do</h3>
          <ul className="space-y-2 text-gray-400  text-sm">
            <li className="hover:font-medium hover:text-white">
              <a href="#">Sustainability Services</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Strategy Planning and Implementation</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Tech Talent Solutions</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Training and Development</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">IT Consulting Services</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Social Impact</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Talent Recruitment</a>
            </li>
          </ul>
        </div>

        {/* Links - Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400  text-sm">
            <li className="hover:font-medium hover:text-white">
              <a href="#">About</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Jobs</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Projects</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Our Founder</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Business Model</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">The Team</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Contact Us</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Blog</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">FAQs</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>

        {/* Links - Solution */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Solution</h3>
          <ul className="space-y-2 text-gray-400  text-sm">
            <li className="hover:font-medium hover:text-white">
              <a href="#">Tobams Group Academy</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Help a Tech Talent</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Campus Ambassadors Program</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Join Our Platform</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Book a Consultation</a>
            </li>
            <li className="hover:font-medium hover:text-white">
              <a href="#">Join Our Slack Community</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Registered Offices and Contact Information */}
      <div className="max-w-7xl mx-auto mt-12 bg-[#211921] px-6 py-5 rounded-md grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-2">Registered Offices</h4>
          <p className="text-red-500 font-semibold">United Kingdom</p>
          <p>07451196 (Registered by Company House)</p>
          <p>
            Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1
            4QA
          </p>
        </div>
        <div>
          <p className="text-red-500 font-semibold">Nigeria</p>
          <p>RC 1048722 (Registered by the Corporate Affairs Commission)</p>
          <p>4, Muaz Close, Angwar-Rimi</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact Information</h4>
          <p className="flex items-center">
            <span className="text-red-500 mr-2">✉</span> theteam@tobamsgroup.com
          </p>
          <p className="flex items-center">
            <span className="text-red-500 mr-2">📞</span> +447886600748
          </p>
        </div>
      </div>

      {/* Copyright and Links */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Cookies Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
