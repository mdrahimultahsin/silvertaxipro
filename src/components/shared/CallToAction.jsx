
import {Link} from "react-router";
import Container from "./Container";
import ButtonPrimary from "./ButtonPrimary";

const CallToAction = () => {
  return (
    <div className="mt-15 bg-[url('/src/assets/black-car-silvertaxipro.png')] w-full  bg-no-repeat bg-cover bg-fixed bg-bottom ">
        <div className="w-full h-full bg-[#0b1320]/80">
        <div className="text-white py-8 md:py-10">

      <Container>
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-center gap-4  md:gap-15">
          <h2 className="font-playfair font-semibold text-base md:text-lg lg:text-2xl">
            We offer Silver Taxi Pro Sydney bookings across more than 50
            suburbs.
          </h2>
          <Link to="/book-a-taxi">
            <ButtonPrimary className={`px-2! md:px-4! text-sm`}>
              Book Online
            </ButtonPrimary>
          </Link>
        </div>
      </Container></div>
        </div>
    </div>
  );
};

export default CallToAction;
