import titleImg from "../../../assets/silvertaxipro-merge-car-images.png";
import Container from "../../../components/shared/Container";
import {Link, useNavigate} from "react-router";
import {FaCheck, FaCheckCircle, FaPhoneAlt} from "react-icons/fa";
import {IoCarSport} from "react-icons/io5";
import FeatureFleet from "../../Home/FeatureFleet";
import Faq from "../../../components/shared/Faq";
import serviceBgImage from "../../../assets/services/taxi-sydney-airport-silver-taxi-pro.jpeg";
import {FaLocationDot} from "react-icons/fa6";
import bookTaxiImg from "../../../assets/services/taxi-sydney-airport-silver-taxi-pro.jpeg";
import React from "react";
import {serviceAreasData} from "../../../utils/serviceArea";
import PagesHero from "../../../components/shared/PagesHero";
const BookingForm = React.lazy(
  () => import("../../../components/shared/BookingForm"),
);
const faqs = [
  {
    question: "How Much Does A Taxi From Liverpool To Sydney Airport Cost?",
    answer:
      "Our Liverpool airport taxi fares range from $95-$130, depending on vehicle type and exact pickup location. We offer fixed pricing with no hidden fees. Maxi taxi Sydney Airport rates accommodate up to 11 passengers. All tolls are included in quotes upfront for complete transparency.",
  },
  {
    question: "Can I Book A Maxi Taxi Sydney Airport To The City For My Group?",
    answer:
      "Yes, our maxi taxi Sydney Airport to city service accommodates up to 11 passengers comfortably. Perfect for families or corporate groups traveling together. We provide ample luggage space and direct transfers. Book online or call 1300 788 313 for immediate confirmation.",
  },
  {
    question: "How Far In Advance Should I Book My Airport Taxi Sydney?",
    answer:
      "We recommend booking your airport taxi in Sydney at least 24 hours before departure for guaranteed availability. However, same-day bookings are accepted up to 30 minutes before pickup. Early bookings ensure preferred vehicle type selection and confirmed driver assignment for your transfer.",
  },
  {
    question:
      " Do You Provide Taxis To Sydney Airport From All Liverpool Suburbs?",
    answer:
      "Absolutely. Our taxi to Sydney Airport service covers all Liverpool suburbs, including Minto, Ingleburn, Camden, Eagle Vale, and surrounding areas. We operate across 50+ localities throughout the Macarthur region. Every neighborhood receives identical punctual service regardless of distance from our base.",
  },
  {
    question:
      "What Payment Methods Do You Accept For Taxi Sydney Airport Transfers?",
    answer:
      "We accept cash, all major credit cards, debit cards, and digital wallet payments for taxi Sydney Airport bookings. Corporate accounts receive monthly invoicing options with priority service. Make payment after journey completion. No prepayment required unless specifically requested for advance bookings.",
  },
  {
    question: " How Do I Find My Driver At Sydney Airport Arrivals?",
    answer:
      "Your airport taxi service Sydney driver waits at the designated terminal meeting point, holding a clear name board. We send SMS confirmation with driver details 60 minutes before pickup. For international arrivals at T1, drivers wait outside the customs exit. Domestic terminals T2/T3 have specified pickup zones.",
  },
  {
    question:
      "Are Your Maxi Taxi Sydney Airport Vehicles Suitable For Luggage?",
    answer:
      "Yes, our maxi taxi Sydney Airport fleet offers generous luggage capacity. Standard sedans hold 2-3 large suitcases. Maxi cabs accommodate 8+ bags comfortably. We handle oversized items like golf clubs, surfboards, and sports equipment. Roof racks are available upon request during booking for extra cargo.",
  },
  {
    question: " What Happens If My Flight To Sydney Airport Gets Delayed?",
    answer:
      "We monitor all flight schedules in real-time for your airport taxi Sydney booking. Flight delays trigger automatic driver notification without you calling us. No waiting charges apply for delays up to 60 minutes. Your taxi adjusts pickup timing automatically based on the actual landing time at Sydney Airport.",
  },
  {
    question: "Can I Book A Return Trip Taxi From Sydney Airport To Liverpool?",
    answer:
      "Certainly. Book both directions simultaneously when arranging your Liverpool airport taxi service. Return bookings receive a 10% discount on the combined fare. We confirm your return pickup after you provide the actual arrival time. Simply notify us once you land, and we'll dispatch immediately.",
  },
];
const features = [
  "Fully licensed by NSW transport authorities and covered by comprehensive insurance.",
  "Drivers complete regular advanced defensive driving and customer service training.",
  "Vehicle maintenance schedules exceed the manufacturer's standard requirements for added safety.​",
  "Meet-and-greet service available at all Sydney Airport terminals for a smoother arrival experience.​",
  "GPS-based dispatch systems help reduce average passenger wait times.​",
  "Fixed-rate and upfront pricing to make budgeting your trip simple and clear.​",
  "Multiple payment options, including cash, card, and approved corporate accounts.​",
  "Vehicles are sanitized after rides to maintain a clean, hygienic travel environment.​",
];

const BookTaxiSydneyAiport = () => {
  const navigate = useNavigate();
  const serviceAreas = serviceAreasData;
  return (
    <div>
      <PagesHero
        title={` Sydney Airport Taxi Service—Fast, Reliable & Affordable
                Transfers`}
        description={
          <>
            Need a dependable
            <Link to={`/`} className="px-1 underline font-semibold">
              Sydney Airport taxi service
            </Link>
            that runs day and night? Our team provides 24/7 premium airport
            transfers for families, solo travelers, and corporate groups. You
            can choose from modern sedans, spacious SUVs, and maxi cabs to match
            your luggage and group size. With professional local drivers and
            punctual pickups, your trip to or from Sydney Airport stays smooth
            and stress-free. Book today and enjoy a comfortable, on-time ride
            with a trusted local operator.
          </>
        }
      />

      {/*Booking Form */}
      <BookingForm
        formTitle={"Reserve Your Sydney Airport Taxi in Minutes"}
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
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-4 capitalize">
                Premium Sydney Airport Taxi Service
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                You deserve a smooth, stress-free airport transfer every time
                you travel. Our Sydney airport transfer service is built around
                comfort, safety, and punctuality. Whether you
                <Link
                  to={`/book-a-taxi`}
                  className="px-1 underline font-semibold"
                >
                  book a Sydney
                </Link>
                airport taxi for business or leisure, you receive reliable
                service from start to finish, including clean vehicles,
                professional drivers, and on-time pickups across all airport
                terminals. <br />
                When you choose our Sydney airport taxi transfers, you avoid
                delays, hidden costs, and last-minute confusion. Your driver
                knows the fastest airport routes and local traffic patterns,
                helping you reach your destination smoothly and without
                unnecessary stops. The booking process stays simple, fast, and
                secure. <br />
                We operate as a trusted
                <Link to={`/`} className="px-1 underline font-semibold">
                  Sydney taxi service
                </Link>
                with full licensing and insurance. You can book airport taxi
                transfers Sydney-wide at any time—day or night, weekdays or
                holidays. Your ride is always ready when you need it.
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-primary my-4 capitalize">
                {" "}
                Why Your Airport Transfer Works Better With Us
              </h2>
              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Experienced, licensed local drivers</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Clean, air-conditioned vehicles</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Fair, upfront pricing with no surprises</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>24/7 Sydney airport cab booking</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Real-time support for flight changes</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={bookTaxiImg}
                alt={
                  "Silver Taxi Pro airport taxi service providing reliable Sydney Airport transfers with local drivers, clean vehicles and luggage assistance."
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
              Real-Time Flight Tracking for Your Sydney Airport Taxi Service
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Flight changes can be stressful, but we help reduce that pressure
              with live flight monitoring. Our operations team tracks arrivals
              and departures at{" "}
              <Link
                to={`/book-taxi-sydney-airport`}
                className="px-1 underline font-semibold"
              >
                Sydney Airport's
              </Link>{" "}
              T1 International, T2 Domestic, and T3 Qantas terminals in real
              time. If your flight arrives early or is delayed, your pickup time
              is adjusted automatically so your driver is ready when you walk
              out. We follow all NSW airport access rules and wait at approved
              pickup zones for safe, compliant transfers.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              24/7 Sydney Airport Taxi Service
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Our Sydney Airport taxi service operates around the clock to
              support every type of flight schedule. Early morning departures,
              late-night arrivals, and red-eye flights are all handled by our
              dedicated 24/7 team. Even on weekends, public holidays, and peak
              seasons, we keep a full fleet available so you are never left
              without a ride. Large families and groups can travel together
              comfortably in our maxi taxis, which offer plenty of luggage room
              and flexible seating. Same-day bookings are accepted up to 30
              minutes before your required pickup time, subject to availability.
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
                  Why Choose us
                  <span className="text-primary px-1.5">
                    for Sydney Airport Taxi Service?
                  </span>{" "}
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
              Our Sydney Airport Taxi Service Area
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              Serving Liverpool and surrounding regions with reliable taxi and
              maxi cab services to Sydney Airport across NSW.
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
          "Premium Vehicle Options for Reliable Liverpool Airport Transfers"
        }
      />
      <Faq
        faqSectionTitle={`Frequently Asked Questions – Sydney Airport Taxi Service 
`}
        faqs={faqs}
      />
    </div>
  );
};

export default BookTaxiSydneyAiport;
