import {
  FaPlane,
  FaBaby,
  FaBriefcase,
  FaShip,
  FaGift,
  FaStar,
  FaBox,
  FaUsers,
  FaCrown,
} from "react-icons/fa";
import Container from "../../components/shared/Container";

const services = [
  {
    id: 1,
    label: "Book Taxi Sydney Airport",
    pathname: "/services/book-text-sydney-airport",
    icon: FaPlane,
    desc: "Quick and reliable airport transfers anytime.",
  },
  {
    id: 2,
    label: "Baby Seat Taxi Sydney",
    pathname: "/services/baby-seat-taxi-sydney",
    icon: FaBaby,
    desc: "Safe and comfortable rides for families with kids.",
  },
  {
    id: 3,
    label: "Luxury Transfer",
    pathname: "/services/luxury-transfer",
    icon: FaStar,
    desc: "Premium vehicles for luxury travel experience.",
  },
  {
    id: 4,
    label: "Corporate Transport",
    pathname: "/services/corporate-transport-services",
    icon: FaBriefcase,
    desc: "Professional transport for business meetings and events.",
  },
  {
    id: 5,
    label: "Cruise Transfer",
    pathname: "/services/cruise-terminal-transfer",
    icon: FaShip,
    desc: "On-time transfers to cruise terminals.",
  },
  {
    id: 6,
    label: "Wedding Transfer",
    pathname: "/services/wedding-transfer",
    icon: FaGift,
    desc: "Elegant transportation for your special day.",
  },
  {
    id: 7,
    label: "Event Transfer",
    pathname: "/services/event-transfer",
    icon: FaCrown,
    desc: "Reliable rides for concerts, parties, and events.",
  },
  {
    id: 8,
    label: "Parcel Delivery",
    pathname: "/services/percel-transfer",
    icon: FaBox,
    desc: "Fast and secure parcel pickup and delivery.",
  },
  {
    id: 9,
    label: "Maxi Taxi Service",
    pathname: "/services/airport-shuttle",
    icon: FaUsers,
    desc: "Spacious taxis for group travel and tours.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-10 bg-white">

      <Container>

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-sm md:text-lg">
            We provide reliable, safe, and comfortable transportation across Sydney with professional drivers and modern vehicles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary/30  rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl group-hover:bg-primary group-hover:text-black transition">
                <service.icon />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg md:text-xl font-semibold text-gray-900 group-hover:text-primary transition">
                {service.label}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default WhatWeDo;