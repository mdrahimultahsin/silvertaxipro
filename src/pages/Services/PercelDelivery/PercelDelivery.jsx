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
import parcelImg from "../../../assets/services/percel-delivery-silvertaxipro.png";
import React from "react";
import {serviceAreasData} from "../../../utils/serviceArea";
import PagesHero from "../../../components/shared/PagesHero";
const BookingForm = React.lazy(
  () => import("../../../components/shared/BookingForm"),
);
const faqs = [
  {
    question: "Do You Handle Urgent Same-Day Parcel Deliveries?",
    answer:
      "Yes. We provide fast same-day parcel delivery Sydney-wide using structured dispatch, live route checks, and priority handling steps. Our team ensures time-sensitive documents, boxes, and business items reach their destination within the required delivery window.",
  },
  {
    question: "Can Your Service Handle Multiple Parcel Pickups?",
    answer:
      "Yes. Our parcel delivery Liverpool system manages multi-stop pickups from offices, warehouses, and suppliers. Drivers follow planned routes built from timing windows and location order to keep deliveries efficient and delay-free.",
  },
  {
    question: "Do You Transport Fragile Or Sensitive Parcels?",
    answer:
      "Yes. We protect fragile parcels with secure placement, stable vehicle positioning, and careful handling. Drivers follow strict movement steps designed for delicate items, electronics, samples, or paperwork requiring controlled transport across Sydney.",
  },
  {
    question: "Is Your Pricing Affordable For Regular Business Deliveries?",
    answer:
      "Yes. We offer cheap parcel delivery Sydney businesses depend on for routine transport. Our fixed-rate structure supports bulk or repeat deliveries without hidden charges, helping companies control logistics costs during busy periods.",
  },
  {
    question: "Do You Offer Tracking Updates For Deliveries?",
    answer:
      "Yes. We provide live tracking updates through our dispatch system. You receive clear progress information from pickup to drop-off, allowing accurate planning for business tasks and home deliveries across Liverpool and Sydney.",
  },
  {
    question: "Can You Deliver Parcels During Late-Night Hours?",
    answer:
      "Yes. Our team operates 24/7 and supports night deliveries for urgent items. We manage secure pickups and controlled drop-offs, ensuring reliable parcel movement even during after-hours requirements in Sydney and Liverpool.",
  },
  {
    question: "Do You Handle Large Or Bulky Parcel Items?",
    answer:
      "Yes. We allocate vehicles suited for bulky boxes or equipment. Drivers secure items properly and follow stable transport steps, ensuring safe delivery across busy commercial routes in Sydney and surrounding NSW regions.",
  },
  {
    question: "Are Your Drivers Trained For Secure Parcel Handling?",
    answer:
      "Yes. Our drivers follow verified handling procedures, pickup checks, and identification steps. Their training ensures reliable movement for business parcels, personal packages, and commercial loads across Liverpool and Sydney.",
  },
  {
    question: "Can I Schedule Deliveries For Specific Time Windows?",
    answer:
      "Yes. We support timed delivery windows for offices, retail stores, homes, and commercial locations. Our system coordinates precise drop-offs across Sydney to match customer availability and business operating hours.",
  },
  {
    question: "Do You Support Recurring Parcel Deliveries For Businesses?",
    answer:
      "Yes. We manage recurring parcel delivery Sydney services with structured schedules. Businesses can book routine pickups for inventory, documents, or supplies, ensuring stable logistics support throughout Liverpool and Greater Sydney.",
  },
];
const features = [
  "Drivers trained in venue-access and event-traffic control.",
  "Vehicles sized for groups and event equipment.",
  "Clear pricing with no surge fees on event days.",
  "24/7 support for late-night concerts and sports events.",
  "Trusted by local Sydney and Liverpool venues",
  "Structured dispatch for busy calendar days.",
  "Live route optimisation to bypass high-density event zones.",
  "Coordinated multi-vehicle planning for large groups.",
];

const PercelDelivery = () => {
  const navigate = useNavigate();
  const serviceAreas = serviceAreasData;
  return (
    <div>
      {useSEO({
        title: "Cheap Parcel Delivery Sydney | Silver Taxi Pro",
        description:
          "Need urgent parcel delivery sydney? Get fast same-day drops from Liverpool, live driver contact and secure handling. Call now to book.",
        keywords:
          "Parcel Delivery Sydney, cheap parcel delivery sydney,parcel delivery Liverpool",
        canonical: "https://silvertaxipro.com.au/services/parcel-delivery",
      })}

      <PagesHero
        title={` Affordable Express Parcel Delivery Sydney`}
        description={`Silver Taxi Pro offers fast parcel delivery Sydney
                residents trust daily. We handle documents, boxes, packages, and
                business items with secure transport across Liverpool, Sydney
                and NSW. Our drivers follow strict handling rules and
                time-focused delivery steps for safe, smooth, affordable parcel
                movement.`}
      />

      {/*Booking Form */}
      <BookingForm
        formTitle={"Secure Your Parcel Delivery Sydney Now"}
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
                Exclusive Parcel Delivery Benefits Across Liverpool, Sydney
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                Silver Taxi Pro delivers reliable parcel delivery Sydney
                customers trust. We support urgent packages, business
                deliveries, and same-day transport across Sydney and NSW. Our
                team manages safe handling, route control, and time-focused
                delivery steps.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Event-trained and logistics-aware drivers.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span>Clean, secure, and monitored vehicles.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Fast delivery timing for urgent parcels.</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Fixed pricing with no hidden fees.</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-secondary" />
                  <span> Available 24/7 for last-minute deliveries.</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={parcelImg}
                alt={
                  "Parcel delivery sydney from Liverpool shops to Sydney suburbs with secure handling, direct routes and prompt arrivals.."
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
              How Our Parcel Delivery Process Ensures Timely Drop-Offs?
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Our parcel delivery team follows strict pickup checks and
              real-time tracking steps. We plan fast routes across Liverpool and
              Sydney using current traffic updates. Drivers protect every parcel
              with controlled handling methods. We manage urgent documents,
              business items, and customer packages with secure movement and
              steady timing. You receive consistent delivery support designed
              for time-critical transport needs. We adjust routes instantly when
              unexpected delays appear. Our team maintain clear communication to
              keep you updated throughout the delivery.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg md:text-2xl text-primary font-bold font-playfair">
              We Manage Multi-Stop Parcel Transport Smoothly
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Silver Taxi Pro supports multi-stop parcel delivery Liverpool
              businesses use for daily operations. We manage office pickups,
              warehouse dispatch cycles, supplier transfers, and doorstep
              deliveries across Sydney. Drivers follow structured schedules
              built from traffic forecasts, timing windows, and handling
              requirements. We move documents, fragile parcels, equipment,
              product samples, and light inventory with secure placement and
              stable transport. Our system tracks driver progress, monitors
              delays, and updates routes when roadworks appear. You gain smooth
              parcel movement with flexible timing, fast communication, and
              reliable service patterns that protect your items during every
              stage of transport across Liverpool and Sydney. We support repeat
              delivery cycles for ongoing business needs. Expect coordinate
              grouped drop-offs to maintain speed and accuracy.
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
                  Percel Delivery
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
              Parcel Delivery Service Areas Across Liverpool and Sydney
            </h2>

            <p className="text-gray-600 md:text-lg md:max-w-6xl mx-auto">
              We deliver parcels across Liverpool, Sydney CBD, and surrounding
              suburbs, offering fast pickups, secure handling, and reliable
              same-day and next-day delivery options.
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
          "Reliable Fleet Supporting Safe Parcel Transport in Liverpool"
        }
      />
      <Faq faqs={faqs} />
    </div>
  );
};

export default PercelDelivery;
