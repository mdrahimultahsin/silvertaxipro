import ButtonSecondary from "./ButtonSecondary";
import {Link} from "react-router";
import {FaHandPointer} from "react-icons/fa";
import {IoCallSharp} from "react-icons/io5";
import {MdSecurity, MdAccessTime} from "react-icons/md";
import Container from "./Container";
import titleImg from "/silvertaxipro-page-hero-car.png";
import ButtonPrimary from "./ButtonPrimary";

const PagesHero = ({title, description}) => {
  return (
    <div className="relative overflow-hidden bg-secondary">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 py-10 md:py-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">
              {title || "Contact Silver Taxi Pro"}
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              {description ||
                "Silver Taxi Pro provides safe and reliable transport across Sydney. Our licensed drivers offer clean cars, fast pickups, and friendly service. We handle airport transfers, local trips, and corporate travel. We accept cards, cash, and Cabcharge. Contact our 24/7 team for trusted, professional taxi support."}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-300">
                <MdSecurity className="text-primary text-xl" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MdAccessTime className="text-primary text-xl" />
                <span className="text-sm">24/7 Service</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <IoCallSharp className="text-primary text-xl" />
                <span className="text-sm">Instant Booking</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/book-a-taxi">
                <ButtonPrimary className="flex gap-2 items-center justify-center  hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
                  <FaHandPointer />
                  Book Online
                </ButtonPrimary>
              </Link>
              <a href="tel:1300788313">
                <ButtonSecondary className="flex gap-2 items-center justify-center bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-secondary transition-all duration-300 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
                  <IoCallSharp /> 1300 788 313
                </ButtonSecondary>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-2xl"></div>
              <img
                className="w-full max-w-md relative z-10 scale-110 lg:scale-145"
                src={titleImg}
                alt="Silver Taxi Pro"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PagesHero;
