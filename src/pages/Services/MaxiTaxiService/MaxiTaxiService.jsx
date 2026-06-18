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
import maxiImg from "../../../assets/services/Maxi-Taxi-service-SilverTaxiPro.jpeg";
import React from "react";
import {serviceAreasData} from "../../../utils/serviceArea";
import PagesHero from "../../../components/shared/PagesHero";
const BookingForm = React.lazy(
  () => import("../../../components/shared/BookingForm"),
);
const faqs = [
  {
    question: "Do Your Maxi Taxis Support Large Groups With Luggage?",
    answer:
      "Yes. Our maxi taxi sydney fleet handles groups with suitcases, prams, and equipment. Drivers load items safely and maintain stable movement, ensuring smooth travel for airport, hotel, and event trips.",
  },
  {
    question: "Can I Book A Maxi Taxi For Sydney Airport?",
    answer:
      "Yes. Our maxi taxi sydney airport service offers fast, spacious, coordinated transfers. We track traffic, plan early pickups, and support groups needing reliable movement during peak travel periods.",
  },
  {
    question: "Do You Offer Fixed Pricing For Maxi Taxi Bookings?",
    answer:
      "Yes. We provide fixed rates for all maxi taxi Liverpool and Sydney trips. Prices remain predictable with no surge fees, supporting stress-free booking during busy event days or airport travel.",
  },
  {
    question: "Can You Handle Event Transfers For Large Groups?",
    answer:
      "Yes. Our maxi cabs sydney service supports weddings, concerts, conferences, and stadium events. We coordinate timed pickups, group movement, and safe arrivals during heavy traffic conditions.",
  },
  {
    question: "Are Your Maxi Taxis Suitable For Long Trips Across NSW?",
    answer:
      "Yes. We support long-distance travel with wide seating, climate control, and secure luggage space. Groups enjoy safe, comfortable movement across Liverpool, Sydney, and regional NSW.",
  },
  {
    question: "Can I Schedule Multiple Stops During My Maxi Taxi Trip?",
    answer:
      "Yes. We manage multi-stop travel for sightseeing, business meetings, and family plans. Our system coordinates clear timing and route updates, keeping your group on schedule throughout Sydney.",
  },
  {
    question: "Are Your Drivers Trained For Group Safety And Comfort?",
    answer:
      "Yes. Drivers follow group-handling steps, safe loading rules, and steady driving techniques. They support families, tourists, and corporate groups needing reliable maxi taxi cabs sydney transport.",
  },
  {
    question: "Do You Provide Early-Morning Maxi Taxi Pickups?",
    answer:
      "Yes. We operate 24/7 and support early flights, morning events, and hotel check-ins. Drivers follow exact pickup times to maintain smooth travel.",
  },
  {
    question: "Can Your Maxi Taxis Handle Mobility Equipment?",
    answer:
      "Yes. Our vehicles support walkers, small mobility aids. Drivers assist with safe entry and secure placement for comfortable travel across Sydney and Liverpool.",
  },
  {
    question: "Do You Support Recurring Group Travel For Businesses?",
    answer:
      "Yes. We manage scheduled maxi taxi sydney transport for corporate teams. Businesses use our service for routine transfers, staff shuttles, and coordinated group movement across Liverpool and Sydney.",
  },
];
const features = [
  "Spacious maxi fleet designed for group comfort and smooth long-distance travel.",
  "Reliable support for airport runs, events, and family movements across Sydney.",
  "Clear, predictable fares for maxi taxi Liverpool and Sydney transfers.",
  "24/7 service coverage with fast response during peak hours.",
  "Real-time route monitoring to avoid delays during group travel.",
  "Multi-vehicle coordination for large teams, families, and event groups.",
  "Professional drivers trained in safe group loading and luggage handling.",
  "Priority booking access for early flights, late events, and urgent group travel.",
];

const MaxiTaxiService = () => {
  const navigate = useNavigate();
  const serviceAreas = serviceAreasData;
  return (
    <div>
      {useSEO({
        title: "Book Maxi Taxi CabsSydney | Silver Taxi Pro",
        description:
          "Maxi taxi Liverpool for fast group rides across Sydney, with roomy vehicles, luggage space and 24/7 pick-ups from Liverpool. Call now to reserve.",
        keywords:
          "Maxi Taxi Sydney, maxi taxi cabs sydney,maxi taxi Liverpool,maxi cabs sydney,maxi taxi sydney airport,Silver Taxi & maxi service,maxi taxi Liverpool",
        canonical: "https://silvertaxipro.com.au/services/maxi-taxi-service",
      })}
      <PagesHero
        title={`          Spacious Maxi Taxi Liverpool for Large Travel Groups`}
        description={`     Silver Taxi Pro delivers reliable maxi taxi Sydney
                transport for groups needing space, comfort, and smooth travel.
                Our maxi taxi Liverpool fleet supports airport trips, events,
                hotel runs, and tours. Our experienced drivers follow safe
                loading rules and steady timing, giving you secure group
                movement across Sydney and NSW.`}
      />

      {/*Booking Form */}
      <BookingForm
        formTitle={"Book Your Spacious Maxi Taxi Sydney Today"}
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
                Premium Maxi Taxi Services for Comfortable Group Transport
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Silver Taxi Pro provides high-capacity maxi cabs sydney
                transport built for comfort and group mobility. We support
                family outings, corporate groups, airport transfers, and events
                with reliable planning and safe loading.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    {" "}
                    Drivers trained for group safety and smooth handling.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Spacious, clean, climate-controlled maxi taxis.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>
                    {" "}
                    Reliable timing for busy schedules and large groups.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Fixed pricing with no hidden charges.</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>24/7 service for airport and event transport.</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={maxiImg}
                alt={
                  "Silver Taxi Maxi group transport for airport, cruise, event and family trips with spacious seating and luggage capacity."
                }
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
              How Our Maxi Taxi System Delivers Smooth and Timely Group Travel
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Our maxi taxi cabs sydney team follows structured pickups, clear
              loading steps, and live traffic checks to keep group travel
              steady. We design fast routes across Liverpool and Sydney using
              updated road data and venue access rules. Drivers manage luggage,
              prams, and equipment with safe handling methods. You enjoy
              reliable movement ideal for airport transfers, family outings,
              corporate travel, and event schedules that needs dependable maxi
              cabs. Our system adapts in all delays to keep trips timely
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              Organised Multi-Stop Maxi Taxi Transport for Groups Across Sydney
              and Liverpool
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Silver Taxi Pro supports multi-stop maxi taxi Liverpool transport
              built for large groups. We manage hotel pickups, event stops,
              restaurant visits, business meetings, and airport connections with
              structured planning. Drivers follow mapped routes created from
              traffic forecasts, venue rules, and timing needs. We handle
              luggage, prams, equipment, and travel bags with secure placement
              and smooth movement. Our maxi cabs sydney fleet offers wide
              seating, climate control, and easy entry for comfortable travel.
              Our system tracks every vehicle and adjusts routes during delays.
              You gain steady maxi taxi sydney service with clear communication,
              flexible timing, and reliable support for groups needing
              coordinated transport, including fast maxi taxi sydney airport
              transfers.
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
                  Why Choose
                  <span className="text-primary px-1">Silver Taxi Pro</span> for
                  Maxi Taxi Services
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
              Maxi Taxi Coverage Across Liverpool, Sydney, and Key NSW Corridors
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              We provide maxi taxi travel across Liverpool, Greater Sydney, and
              NSW. Our routes cover hotels, suburbs, stadiums, airports,
              conference centres, and event spaces. We support smooth group
              movement across major corridors used for daily travel.
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
          "Premium Travel Options for Maxi Taxi Liverpool Transfers"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default MaxiTaxiService;
