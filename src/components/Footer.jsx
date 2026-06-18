import {Link} from "react-router";
import {
  FaCar,
  FaChevronDown,
  FaChevronUp,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaUserFriends,
} from "react-icons/fa";
import {MdOutlineMailOutline, MdOutlineMessage} from "react-icons/md";
import { useState} from "react";
import {IoLogoWhatsapp, IoShareSocial} from "react-icons/io5";
import {FaLocationDot, FaMapLocationDot, FaXTwitter} from "react-icons/fa6";

import {serviceAreasData} from "../utils/serviceArea";
import Container from "./shared/Container";
const services =[
        {
          id: 1,
          label: "Book Taxi Sydney Airport",
          pathname: "/services/book-taxi-sydney-airport",
      
          desc: "Quick rides to Sydney airport.",
        },
        {
          id: 2,
          label: "Baby Seat Taxi Sydney",
          pathname: "/services/baby-seat-taxi-sydney",
        
          desc: "Family-friendly taxi service.",
        },
        {
          id: 4,
          label: "Corporate Transport Services",
          pathname: "/services/corporate-transport-services",
        
          desc: "Professional transport for corporate clients.",
        },
        {
          id: 5,
          label: "Cruise Terminal Transfer",
          pathname: "/services/cruise-terminal-transfer",
     
          desc: "Timely transfers to cruise terminals.",
        },
        {
          id: 6,
          label: "Wedding Transfer",
          pathname: "/services/wedding-transfer",
      
          desc: "Comfortable wedding day transportation.",
        },
        {
          id: 7,
          label: "Event Transfer",
          pathname: "/services/event-transfer",
       
          desc: "Convenient transfers for events.",
        },
        {
          id: 8,
          label: "Parcel Delivery",
          pathname: "/services/parcel-delivery",
   
          desc: "Fast parcel pickup and delivery.",
        },
        {
          id: 9,
          label: "Taxi Maxi Service",
          pathname: "/services/maxi-taxi-service",
    
          desc: "Large group taxi service.",
        },
        {
          id: 10,
          label: "Luxury Transfer",
          pathname: "/services/luxury-transfer",
    
          desc: "Premium luxury travel experience.",
        },
        {
          id: 11,
          label: "Sydney CBD Transfer",
          pathname: "/services/sydney-cbd-transfer",
      
          desc: "Reliable Sydney CBD Transfer",
        },
        {
          id: 12,
          label: "Airport Shuttle",
          pathname: "/services/airport-shuttle",
       
          desc: "Comfortable airport shuttle rides.",
        },
        {
          id: 13,
          label: "Corporate Account trips",
          pathname: "/services/corporate-tips",
       
          desc: "Corporate Account trips",
        },
      ]
const Footer = () => {


  const [showServiceAreas, setShowServiceAreas] = useState(false);
  const [showServices, setShowServices] = useState(false);
  
  const serviceAreas = serviceAreasData;

  return (
    <footer className=" text-white pt-5 pb-5 bg-secondary">
      <Container className="relative z-10">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
          <div>
            <Link to="/">
              <img
                className="w-25 md:w-40"
                src="/footer-logo.png"
                alt="Silver Taxi Pro"
              />
            </Link>
            <h3 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl mt-4 mb-3 text-primary">
              <FaUserFriends />
              About Us
            </h3>
            <p className="mt-2 text-accent">
              Our fleet of professional drivers provides Taxi Cab services in
              Sydney, Sydney Airport transfers, Taxi Cabs with car seats, and
              Maxi Cabs equipped.
            </p>
            <div className="mt-2">
              <h3 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl mt-4 mb-3 text-primary">
                <IoShareSocial />
                Social
              </h3>
              <ul className="mt-3  flex items-center gap-4 ">
                <li className="flex items-center gap-2">
                  <a
                    href="https://maps.app.goo.gl/9ZzwaiZkmfLdusak9?g_st=ic"
                    target="_blank"
                    className="hover:underline flex items-center gap-2 "
                  >
                    <FaGoogle
                      className="text-accent hover:text-primary"
                      size={20}
                    />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="hover:underline flex items-center gap-2"
                  >
                    <FaFacebook
                      className="text-accent hover:text-primary"
                      size={20}
                    />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="hover:underline flex items-center gap-2"
                  >
                    <FaInstagram
                      className="text-accent hover:text-primary"
                      size={20}
                    />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://x.com/"
                    target="_blank"
                    className="hover:underline flex items-center gap-2"
                  >
                    <FaXTwitter
                      className="text-accent hover:text-primary"
                      size={20}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
         {/* premium services section */}
<div>
  {/* Desktop title */}
  <h2 className="hidden md:flex font-bold font-playfair gap-2 items-center uppercase text-xl text-primary">
    <FaCar /> Premium Services
  </h2>

  {/* Mobile dropdown button */}
  <button
    type="button"
    onClick={() => setShowServices(!showServices)}
    className="md:hidden w-full font-bold font-playfair flex justify-between gap-2 items-center uppercase text-xl mb-3 text-primary"
  >
    <span className="flex items-center gap-2">
      <FaCar /> Premium Services
    </span>

    <span className="text-2xl">
      {showServices ? <FaChevronUp /> : <FaChevronDown />}
    </span>
  </button>

  {/* Desktop services list */}
  <div className="hidden md:block">
    <ul className="mt-5 space-y-2">
     {
     
          services.slice(0,9).map((singleService) => (
            <li key={singleService.service_id}>
              <Link
                to={`${singleService.pathname}`}
                onClick={() => setShowServices(false)}
               className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2 text-accent"
                >
                {singleService.label}
              </Link>
            </li>
          
          )
                 
        )}
    </ul>
  </div>

  {/* Mobile services dropdown */}
  {showServices && (
    <div className="md:hidden mt-3">
      <ul className="space-y-2">
        {
     
          services.map((singleService) => (
            <li key={singleService.service_id}>
              <Link
                to={`${singleService.pathname}`}
                onClick={() => setShowServices(false)}
                className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2 text-accent"
                >
                {singleService.label}
              </Link>
            </li>
          
          )
                 
        )}
      </ul>
    </div>
  )}
</div>

      
         {/* location we coverer section */}
<div className="">
  {/* Desktop title */}
  <h2 className="hidden md:flex font-bold font-playfair gap-2 items-center uppercase text-xl mb-3 text-primary">
    <FaMapLocationDot /> Covered Area
  </h2>

  {/* Mobile dropdown button */}
  <button
    type="button"
    onClick={() => setShowServiceAreas(!showServiceAreas)}
    className="md:hidden w-full font-bold font-playfair flex justify-between gap-2 items-center uppercase text-xl mb-3 text-primary"
  >
    <span className="flex items-center gap-2">
      <FaMapLocationDot /> Covered Area
    </span>

    <span className="text-2xl">
      {showServiceAreas ? <FaChevronUp /> : <FaChevronDown />}
    </span>
  </button>

  {/* Desktop covered area */}
  <div className="hidden md:grid grid-cols-2 gap-1">
    {serviceAreas.slice(0, 18).map((area, index) => (
      <Link
        to={`/area-covered`}
        key={index}
        className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2"
      >
        <span className="text-sm md:text-base text-accent">
          {area.split(" NSW").join("")}
        </span>
      </Link>
    ))}

    <Link
      to={`/area-covered`}
      className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2"
    >
      <span className="text-sm md:text-base text-accent">Sydney</span>
    </Link>

    <Link
      to={`/area-covered`}
      className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2"
    >
      <span className="text-sm md:text-base text-accent">More Areas</span>
    </Link>
  </div>

  {/* Mobile covered area dropdown */}
  {showServiceAreas && (
    <div className="grid grid-cols-2 gap-1 md:hidden mt-3">
      {serviceAreas.map((area, index) => (
        <Link
          to={`/area-covered`}
          key={index}
          onClick={() => setShowServiceAreas(false)}
          className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2"
        >
          <span className="text-sm md:text-base text-accent">
            {area.split(" NSW").join("")}
          </span>
        </Link>
      ))}

      <Link
        to={`/area-covered`}
        onClick={() => setShowServiceAreas(false)}
        className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2"
      >
        <span className="text-sm md:text-base text-accent">Sydney</span>
      </Link>

      <Link
        to={`/area-covered`}
        onClick={() => setShowServiceAreas(false)}
        className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-2"
      >
        <span className="text-sm md:text-base text-accent">More Areas</span>
      </Link>
    </div>
  )}
</div>

          {/* contact information */}
          <div>
            <h2 className="font-bold font-playfair flex gap-2 items-center uppercase text-xl text-primary">
              <FaPhone /> Contact
            </h2>
            <div>
              <ul className="mt-5 space-y-3">
                <li className="flex items-center gap-2">
                  <a
                    href="https://maps.app.goo.gl/9ZzwaiZkmfLdusak9?g_st=ic"
                    target="_blank"
                    className="hover:underline flex items-center gap-2 text-accent"
                  >
                    <FaLocationDot className="text-primary" size={20} /> Liverpool-parramatta Transitway 
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="mailto:Silvertaxipro1@gmail.com"
                    className="hover:underline flex items-center gap-2 break-all text-accent"
                  >
                    <MdOutlineMailOutline className="text-primary" size={20} />
                    Silvertaxipro1@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:1300788313"
                    className="flex items-center gap-2 text-accent"
                  >
                    <FaPhone className="text-primary" size={20} /> 1300 788 313
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/0489181919"
                    className="flex items-center gap-2 text-accent"
                    target="blank"
                  >
                    <IoLogoWhatsapp className="text-primary" size={20} /> 048
                    918 1919
                  </a>
                </li>
                <li>
                  <a
                    href="sms:+0489181919"
                    className="flex items-center gap-2 text-accent"
                    target="blank"
                  >
                    <MdOutlineMessage className="text-primary" size={20} /> Send
                    Message
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      
        <div className="border-t border-primary flex flex-col-reverse  md:flex-row md:justify-between md:items-center mt-5 pt-5">
          <p className="text-center mt-3  md:mt-0 text-accent">
            © 2025 Silver Taxi Pro. All Rights Reserved.
          </p>
          <div className="text-center">
            <Link to={`/terms-and-condition`} className="text-primary">
              Terms And Conditions
            </Link>
            <span> | </span>
            <Link to={`privacy-policy`} className="text-primary">
              Privacy Policy
            </Link>
            <span> | </span>
            <Link to={`cancellation-and-refunds`} className="text-primary">
              Cancellation And Refunds
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
