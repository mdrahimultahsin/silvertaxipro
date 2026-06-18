import {
  FaCar,
  FaCheck,
  FaClock,
  FaCreditCard,
  FaExchangeAlt,
  FaStar,
} from "react-icons/fa";

import HomeAreaCovered from "../Home/HomeAreaCovered";
import FeatureFleet from "../Home/FeatureFleet";
import Container from "../../components/shared/Container";
import Faq from "../../components/shared/Faq";
import PagesHero from "../../components/shared/PagesHero";
import React from "react";
const BookingForm = React.lazy(
  () => import("../../components/shared/BookingForm"),
);

const FeatureCard = ({icon, title, desc}) => (
  <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition">
    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  </div>
);

const BookATaxi = () => {
  const faqs = [
    {
      question: "How Early Can I Book a Silver Taxi Pro?",
      answer:
        "You can schedule a taxi at any time. Our Silver Taxi Pro operate 24/7 and respond quickly to all bookings. Early reservations help us secure the ideal vehicle and ensure a smooth pickup experience.",
    },
    {
      question: " Do You Track Flight Arrivals for Sydney Airport Pickups?",
      answer:
        " Yes. We monitor all Sydney Airport arrivals in real time to ensure timely pickups. Your driver adjusts their schedule if your flight is delayed or lands early, giving you a stress-free airport transfer.",
    },
    {
      question: " Can I Book a Silver Maxi Taxi for a Group?",
      answer:
        "Yes. Our Silver Maxi taxi service carries up to eleven passengers with ample luggage space. It is perfect for airport runs, family trips, business groups, and event transport.",
    },
    {
      question: "Do You Provide Baby Seats With Online Bookings?",
      answer:
        "Yes. We supply baby seats and boosters on request to ensure safe travel for your child. Simply mention your child’s age during booking, and we will prepare the correct seat before pickup.",
    },
    {
      question: " Do You Offer Fixed Fares for Long-Distance Travel?",
      answer:
        " Yes. We provide clear, upfront pricing for long-distance trips across Sydney and nearby regions. Our fixed fares ensure full transparency with no hidden charges or unexpected fees.",
    },
    {
      question: "Can I Pay With Card or Cabcharge During My Ride?",
      answer:
        "Yes. All our Silver Taxi Pro accept debit cards, credit cards, Cabcharge, and cash. Payments are processed securely, giving you a smooth and convenient end to your journey.",
    },

    {
      question: "Can I Book a Return Trip at the Same Time?",
      answer:
        " Yes. You can pre-book a return trip when scheduling your taxi. This ensures timely pickup for your return and allows our team to plan your travel with complete reliability.",
    },
    {
      question: "Do You Serve Suburbs Outside Liverpool?",
      answer:
        " Yes. We cover Macarthur, Ingleburn, Glenfield, Camden, Oran Park, Gregory Hills, and surrounding areas. Our Sydney taxi cabs provide reliable transport across all nearby suburbs.",
    },
    {
      question: "Will I Receive Confirmation After Booking Online?",
      answer:
        "Yes. You will receive a call or message once our team reviews your booking. We confirm your pickup details, assign a vehicle, and keep you updated before your driver arrives.",
    },
  ];
  return (
    <div>
      <PagesHero
        title={`  Fast and Easy Taxi Booking in Sydney and Suburbs`}
        description={`  Silver Taxi Pro offers safe and reliable travel across
                Sydney. Our service supports families, groups, and business
                travellers with clean cars and trained drivers. Choose from
                sedans, SUVs, luxury cars, maxi cabs. We operate 24/7 and cover airport transfers, cruise
                trips, events, and corporate travel. Book your ride now and
                enjoy smooth, stress-free transport.`}
      />
      <BookingForm
        formTitle={"Book Your Taxi/Maxi Cabs in Sydney and Suburbs"}
        className="py-15  bg-gray-100! px-4!"
      />
      <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
        <Container>
          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Book Silver Taxi Pro in Simple Steps
            </h2>

            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
              Schedule your taxi in seconds using our secure booking form. Share
              your trip details, choose your vehicle, and confirm your ride with
              our friendly team.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you need a fast trip or a long ride across Sydney, our
                  team is ready 24/7. We handle airport pickups, local travel,
                  events, and daily transport with safe and reliable service.
                </p>

                <div className="border-l-4 border-primary bg-white rounded-xl p-5 mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <FaCar className="text-primary" />
                    Looking to book a taxi in Sydney?
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Silver Taxi Pro offers reliable taxis, maxi cabs, and
                    airport transfers at affordable rates with professional
                    drivers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    Book Your Ride Online
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    Fill in your pickup details, choose your vehicle, and submit
                    your booking. Our team confirms quickly and assigns the
                    right driver for your trip.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                Why Our Booking Stands Out
              </h3>

              <div className="space-y-4">
                <FeatureCard
                  icon={<FaCar />}
                  title="Wide Range of Vehicles"
                  desc="Sedan, SUV, maxi cab, and luxury options available."
                />

                <FeatureCard
                  icon={<FaClock />}
                  title="Easy Trip Scheduling"
                  desc="Book instantly or schedule for later pickups."
                />

                <FeatureCard
                  icon={<FaCreditCard />}
                  title="Simple Payment Options"
                  desc="Cash, card, and Cabcharge supported."
                />

                <FeatureCard
                  icon={<FaExchangeAlt />}
                  title="Return Booking Available"
                  desc="Add return trips easily in one booking."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FeatureFleet
        className="bg-white!"
        fleetSectionTitle={"Reliable Taxi Vehicles Ready for Your Trip"}
      />

      <Faq faqs={faqs} />
      <HomeAreaCovered />
    </div>
  );
};

export default BookATaxi;
