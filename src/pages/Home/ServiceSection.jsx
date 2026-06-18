import {Link, useLoaderData} from "react-router";
import Container from "../../components/shared/Container";
import ButtonPrimary from "../../components/shared/ButtonPrimary";

const servicesLinks = [
  {
    id: 6,
    label: "Wedding Transfer",
    pathname: "/services/wedding-transfer",
  },
  {
    id: 10,
    label: "Luxury Transfer",
    pathname: "/services/luxury-transfer",
  },
  {
    id: 2,
    label: "Baby Seat Taxi Sydney",
    pathname: "/services/baby-seat-taxi-sydney",
  },
  {
    id: 4,
    label: "Corporate Transport Services",
    pathname: "/services/corporate-transport-services",
  },
  {
    id: 5,
    label: "Cruise Terminal Transfer",
    pathname: "/services/cruise-terminal-transfer",
  },
  {
    id: 7,
    label: "Event Transfer",
    pathname: "/services/event-transfer",
  },
  {
    id: 9,
    label: "Maxi Taxi Service",
    pathname: "/services/maxi-taxi-service",
  },
  {
    id: 11,
    label: "Sydney CBD Transfer",
    pathname: "/services/sydney-cbd-transfer",
  },
  {
    id: 13,
    label: "Corporate Trips",
    pathname: "/services/corporate-tips",
  },
];

const ServicesSection = ({
 
  className,
  locationServices,
}) => {
  const serviceData = useLoaderData() || [];

  const getServicePath = (title) => {
    const match = servicesLinks.find(
      (link) => link.label.toLowerCase() === title.toLowerCase(),
    );
    return match ? match.pathname : "#";
  };

  return (
    <section
      className={`py-20 bg-linear-to-br from-white via-light to-primary/10 ${className}`}
    >
      <Container>
         <div className="text-center mb-10">
          <div className="flex justify-center mb-4"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Premium Taxi & Maxi Services
          </h2>

          <p className="text-gray-color text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Experience reliable, comfortable, and affordable transportation with Silver Taxi Pro. Book your ride today!
          </p>
        </div>
     

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(locationServices || serviceData).map((service, index) => (
            <Link
              to={getServicePath(service.title)}
              key={service.service_id || index}
              className="group relative overflow-hidden rounded-3xl bg-white border border-primary/20 shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Area */}
              <div className="relative h-75 overflow-hidden bg-secondary">
                <img
                  src={service.service_img}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-secondary/80 via-secondary/20 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-secondary shadow-md">
                  Premium Ride
                </div>

                {/* Bottom Title on Image */}
                <h3 className="absolute bottom-4 left-5 right-5 text-2xl font-bold text-white leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <p className="text-gray-color leading-relaxed mb-5 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <ButtonPrimary className={`rounded-full!`}>
                    Book Now
                  </ButtonPrimary>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                    <svg
                      className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;