import {FaShieldAlt, FaCar, FaMapMarkerAlt} from "react-icons/fa";
import Container from "../../components/shared/Container";
import aboutCarImg from "../../assets/Book-black-SilverTaxiPro-car.png";
const HomeAbout = () => {
  const services = [
    {
      id: 1,
      title: "Point-to-point and door-to-door transport",
      icon: FaMapMarkerAlt,
    },
    {
      id: 2,
      title: "Modern and well-maintained vehicles",
      icon: FaCar,
    },
    {
      id: 3,
      title: "Commitment to passenger safety and security",
      icon: FaShieldAlt,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/about-bg.webp')",
        }}
      ></div>
      <Container>
       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-6">
    <div className="max-w-2xl md:w-1/2">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight font-playfair">
              TRUSTED AND RELIABLE
              <br />
              <span className="text-primary">SILVER TAXI PRO</span>
            </h2>

            {/* Description */}
            <p className="text-gray-color text-base md:text-lg leading-relaxed mb-6">
              At Silver Taxi Pro, we prioritise your comfort and
              safety. We offer point-to-point and door-to-door transport with
              modern vehicles and skilled drivers. We ensure a safe, comfortable
              journey every time.
            </p>

            {/* Services List */}
            <div className="space-y-3 mb-8">
              {services.map((service) => (
                <div key={service.id} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <service.icon className="text-primary text-sm" />
                  </div>
                  <span className="text-gray-color text-base md:text-lg">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Know More Button */}
            <button className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>KNOW MORE</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
         <div className="flex justify-center md:justify-end items-center w-full md:w-1/2 mt-10 md:mt-0 overflow-visible">
  <img
    src={aboutCarImg}
    alt="Car Image Silver Taxi Pro"
    className="w-full max-w-130 md:max-w-162.5 lg:max-w-195 xl:max-w-225 object-contain drop-shadow-xl scale-125 md:scale-135 lg:scale-150"
  />
</div>
        </div>
      </Container>
      {/* Content */}
    </section>
  );
};

export default HomeAbout;
