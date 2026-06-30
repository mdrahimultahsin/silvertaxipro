import { Link } from "react-router";
import { FaPhoneVolume } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import heroBg from "/hero.jpeg";
import Container from "../../components/shared/Container";
import BookingForm from "../../components/shared/BookingForm";

const Hero = () => {
  return (
    <section
      className="w-full bg-no-repeat bg-cover bg-position-[38%_25%] md:bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="w-full h-full bg-[#0b1320]/70">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 md:py-20 gap-5 md:gap-10 text-white">
            
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              
              {/* Top Tag */}
              <div className="inline-block border bg-[rgba(245,166,35,0.15)] border-primary text-primary font-playfair px-3 py-1 text-sm mb-3 md:mb-5 font-semibold uppercase">
                #1 Taxi Booking Service
              </div>

              {/* Heading */}
              <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
                  Silver Taxi Pro,  <br />
                <span className="text-primary">Ride in Comfort</span>
              </h1>

              {/* Description */}
              <p className="mt-3 md:mt-5 text-gray-300 text-sm md:text-lg">
                 Reliable taxi & transfer services across Sydney and Southwest Area — 
  airport pickups, corporate travel, and everyday rides. Available 24/7 for your convenience.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-4 md:mt-8">
                
                {/* Book Button */}
                <Link
                  to="/book-a-taxi"
                  className="flex items-center gap-2 bg-primary text-black px-6 py-2 md:py-3 font-semibold hover:scale-105 transition"
                >
                  <FaCalendarAlt />
                  Book Your Ride
                </Link>

                {/* Call Button */}
                <a
                  href="tel:1300788313"
                  className="flex items-center gap-2 border border-white px-6 py-2 md:py-3  font-semibold hover:bg-white hover:text-black transition"
                >
                  <FaPhoneVolume />
                  Call 1300 788 313
                </a>
              </div>
            </div>

            {/* RIGHT SIDE (FORM PLACEHOLDER) */}
            <div className="w-full ">
             <BookingForm />
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;