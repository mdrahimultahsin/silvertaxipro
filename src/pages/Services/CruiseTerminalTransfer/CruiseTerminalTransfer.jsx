import titleImg from "../../../assets/silvertaxipro-merge-car-images.png";
import Container from "../../../components/shared/Container";
import {Link, useNavigate} from "react-router";
import {FaCheck, FaCheckCircle, FaPhoneAlt} from "react-icons/fa";
import {IoCarSport} from "react-icons/io5";
import FeatureFleet from "../../Home/FeatureFleet";
import Faq from "../../../components/shared/Faq";
import serviceBgImage from "/kia-silvertaxipro.png";
import {FaLocationDot} from "react-icons/fa6";
import useSEO from "../../../hooks/useSEO";
import cruiseImg from "../../../assets/services/Sydney-Cruise-Transfers-SilverTaxipro.png";
import React from "react";
import {serviceAreasData} from "../../../utils/serviceArea";
import PagesHero from "../../../components/shared/PagesHero";
const BookingForm = React.lazy(
  () => import("../../../components/shared/BookingForm"),
);
const faqs = [
  {
    question: "Do You Offer Transfers To Both Major Sydney Cruise Terminals?",
    answer:
      "Yes. We provide Sydney cruise terminal transfers to the Overseas Passenger Terminal and White Bay. Our team follows port access rules and manages smooth arrival for travellers needing cruise transfers Sydney with steady timing and reliable support.",
  },
  {
    question: "Can You Handle Early Morning Departures From Liverpool?",
    answer:
      "Yes. We manage early travel for cruise transfers Liverpool with planned routes and timely pickups. Our team monitors road conditions and adjusts travel time to ensure smooth arrival for scheduled boarding windows at Sydney cruise terminals.",
  },
  {
    question: "Do You Support Large Groups Travelling To Cruise Terminals?",
    answer:
      "Yes. We assign suitable vehicles for group travel and manage luggage space carefully. This helps passengers needing cruise transfers Sydney travel together comfortably, especially during peak sailings and seasonal departures.",
  },
  {
    question: "Are Your Drivers Trained In Port Access Procedures?",
    answer:
      "Yes. Drivers follow NSW port guidelines and understand entry lanes for Sydney cruise terminal transfers. This ensures smooth navigation through security-controlled areas and reduces delays during busy cruise boarding periods.",
  },
  {
    question: "Can You Manage Transport For Carnival Cruise Line Departures?",
    answer:
      "Yes. We support carnival cruise transfers Sydney with timed pickups aligned to the cruise line’s boarding instructions. Passengers receive steady, well-planned transport with predictable arrival at the required terminal.",
  },
  {
    question: "Do You Adjust Pickup Times If Cruise Schedules Change?",
    answer:
      "Yes. We confirm schedule updates and adjust arrival times when cruise departures shift. This helps travellers using cruise transfers Liverpool maintain accurate timing for check-in and avoid unnecessary waiting at the terminal.",
  },
  {
    question: "Can I Book A Same-Day Cruise Transfer From Liverpool?",
    answer:
      "Yes. Same-day bookings are available when vehicles are free. We assign the nearest driver for immediate support, helping passengers secure rapid cruise transfers Sydney on short notice.",
  },
  {
    question: "Do You Provide Luggage Assistance For Cruise Travellers?",
    answer:
      "Yes. Drivers help with luggage handling and position vehicles close to approved drop-off zones. This offers smooth movement for travellers using Sydney cruise terminal transfers with multiple bags or cruise equipment.",
  },
  {
    question:
      "Are Your Vehicles Suitable For Long-Distance Travel To Sydney Ports?",
    answer:
      "Yes. Our vehicles support long routes from Liverpool with stable seating and ample storage. This keeps the cruise transfers Liverpool comfortable and steady throughout the journey to OPT or White Bay.",
  },
  {
    question: "Can You Manage Transport For Returning Cruise Passengers?",
    answer:
      "Yes. We provide return pickups with precise timing based on ship arrival data. This service helps travellers using Carnival Cruise Transfers Sydney leave the terminal quickly with reliable transport back to Liverpool or nearby suburbs.",
  },
];
const features = [
  "Drivers trained in NSW port access and cruise terminal entry.",
  "Vehicles selected for long routes from Liverpool to Sydney ports.",
  "Timed arrivals aligned with cruise boarding windows.",
  "Clear pricing for both terminals without hidden fees.",
  "Reliable support for early morning and peak-season sailings.",
  "Smooth access at OPT Circular Quay and White Bay Rozelle.",
  "Luggage-friendly space for cruise bags and travel equipment.",
  "Trusted service built for Liverpool families and cruise groups.",
];

const CruiseTerminalTransfer = () => {
  const navigate = useNavigate();
  const serviceAreas = serviceAreasData;
  return (
    <div>
      {useSEO({
        title: "Cruise Transfers Sydney, Liverpool | Sydney Cruise Shuttles",
        description:
          "Enjoy hassle-free cruise transfers Liverpool to Sydney terminals with punctual drivers, spacious vehicles and luggage help. Pre-book your ride today.",
        keywords:
          "Cruise Transfers Sydney, cruise transfers Liverpool,sydney cruise terminal transfers,carnival cruise transfers sydney",
        canonical:
          "https://silvertaxipro.com.au/services/cruise-terminal-transfer",
      })}
      <PagesHero
        title={` Reliable Cruise Transfers Sydney for Smooth Terminal Travel`}
        description={
          <>
            {" "}
            Silver Taxi Pro offers premium cruise transfers across Sydney and
            NSW. We support fast travel from Liverpool to the Overseas Passenger
            Terminal and White Bay. Our drivers follow port access rules and
            manage smooth drop-offs. You enjoy steady transport designed for
            cruise departure schedules.
          </>
        }
      />

      {/*Booking Form */}
      <BookingForm
        formTitle={"Schedule Your Cruise Terminal Pickup Online"}
        className="py-15  bg-gray-100! px-4!"
      />

      {/* ---------------------------------------- */}
      {/* SECTION: Service Details Dynamic */}
      {/* ---------------------------------------- */}

      <section className="py-12 bg-white">
        <Container>
          <div className="flex flex-col-reverse md:flex-row gap-5 items-center">
            {/* LEFT SIDE — Content */}
            <div className="flex-1">
              {/* Title */}
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-4 capitalize">
                Trusted Liverpool, Sydney Cruise Transfer Service
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Silver Taxi Pro delivers safe, timely cruise transfers to Sydney
                terminals. Our trained drivers manage port access rules and
                support smooth drop-offs at the Overseas Passenger Terminal and
                White Bay. Your travel stays simple, steady, and well-planned
                for cruise departure needs.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Professional drivers trained in cruise terminal procedures
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Vehicles suited for luggage, groups, and long-route travel
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Clear, upfront pricing for Liverpool to Sydney cruise trips
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    Available 24/7 for cruise departures and early check-ins
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={cruiseImg}
                alt={"Cruise transfers Silver Taxi taking travellers"}
                className="rounded-xl shadow-lg w-full "
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Safe & Travel */}
      <section className="mt-10 bg-light py-10">
        <Container>
          <div>
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Our Dedicated Cruise Transfer Support Liverpool
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Silver Taxi Pro provides dedicated support for Sydney cruise
              terminal transfers with specialized maritime logistics expertise.
              Our drivers navigate NSW Port Authority protocols managing secure
              access at Circular Quay's Overseas Passenger Terminal and White
              Bay Cruise Terminal efficiently. We monitor real-time vessel
              boarding schedules adjusting pickup timing for embarkation delays
              automatically. You receive luggage assistance from vehicle to
              check-in counters streamlining the boarding process. We coordinate
              with cruise line representatives ensuring seamless passenger
              handover. Early morning departures accommodate pre-dawn sailings
              departing Sydney Harbour reliably.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              We Offer Timed Pickup Based on Cruise Schedules
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Our team schedules each pickup based on official cruise boarding
              windows. We calculate travel time from Liverpool using live
              traffic data and port congestion patterns. This ensures accurate
              arrival for Sydney cruise terminal transfers. You avoid early
              waiting areas and late check-ins at the Overseas Passenger
              Terminal or White Bay. We confirm your cruise line, deck time, and
              document checks so timing aligns with the terminal entry process.
              This support helps travellers boarding major operators, including
              Carnival Cruise Transfers Sydney, reach the port without stress.
              Our system updates your pickup if cruise schedules shift. You
              travel with steady planning built around exact boarding
              requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION: Why Choose Us */}
      <section className="relative py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{backgroundImage: `url(${serviceBgImage})`}}
        ></div>

        {/* Overlay with primary color */}
        <div className="absolute inset-0 bg-secondary/80"></div>

        {/* Content with zigzag clip-path */}
        <div
          className="relative "
          style={{clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)"}}
        >
          <Container>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT COLUMN */}
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
                  Why We’re the Preferred Choice in
                  <span className="text-primary px-1">
                    Silver Taxi Pro
                  </span>{" "}
                  Sydney Cruise Transfers
                </h2>
                <ul className="space-y-3 text-lg">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-1 text-white" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex justify-center">
                <img
                  src={titleImg}
                  alt="Silver Taxi Pro"
                  className=" w-full "
                />
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* SECTION: Coverage Area */}

      <section className="py-16 bg-linear-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <Container>
          <div className="text-center mb-8">
            <h2 className="section-title">
              Our Cruise Transfer Coverage Across Sydney and NSW
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              We support cruise transfers from Liverpool to Sydney’s major
              terminals, including the Overseas Passenger Terminal and White
              Bay. Our team covers nearby suburbs and business corridors for
              reliable cruise-day travel.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Link
                to={`/book-a-taxi`}
                className="flex flex-col md:flex-row text-center md:text-left items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group cursor-pointer"
              >
                <FaLocationDot size={20} className="text-primary" />
                <span className="text-gray-700 font-medium group-hover:text-primary transition-colors duration-300">
                  Sydney
                </span>
              </Link>
              {serviceAreas.map((serviceArea, idx) => (
                <Link
                  to={`/book-a-taxi`}
                  key={idx}
                  className="flex flex-col md:flex-row text-center md:text-left items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group cursor-pointer"
                >
                  <FaLocationDot size={20} className="text-primary" />
                  <span className="text-gray-700 font-medium group-hover:text-primary transition-colors duration-300">
                    {serviceArea.split(" NSW").join("")}
                  </span>
                </Link>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center border-b md:border-b-0 py-4 border-border-color border-r md:border-r-2 ">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Service</div>
              </div>
              <div className="text-center border-b py-4 border-border-color md:border-b-0 md:border-r-2">
                <div className="text-2xl font-bold text-primary">Quick</div>
                <div className="text-sm text-gray-600">Response</div>
              </div>
              <div className="text-center py-4 border-r md:border-r-2 border-border-color">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Areas</div>
              </div>
              <div className="text-center py-4">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">Reliable</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section>
        <Container>
          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Need a Taxi Without the Wait?
            </h3>

            <p className="text-gray-300 mb-6">
              Fast pickup • 24/7 service • Transparent pricing
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1300788313"
                className="bg-primary text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <button
                onClick={() => navigate("/book-a-taxi")}
                className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition flex items-center justify-center gap-2"
              >
                <IoCarSport />
                Book Online
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              Average wait time: 8 minutes
            </p>
          </div>
        </Container>
      </section>

      <FeatureFleet
        fleetSectionTitle={
          "Premium Fleet Supporting Seamless Cruise Terminal Travel"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default CruiseTerminalTransfer;
