import {FaInbox, FaPhoneAlt} from "react-icons/fa";
import {useEffect, useState} from "react";
import Container from "./shared/Container";

const TopHeader = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-AU", {
          timeZone: "Australia/Sydney",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" bg-primary text-black py-3 text-sm md:text-sm lg:text-base">
      <Container>
        <div className="flex flex-col items-center md:flex-row justify-between gap-2 md:gap-0">
          {/* Email */}
          <p className="flex items-center gap-2">
            <FaInbox />{" "}
            <a
              href="mailto:Silvertaxipro1@gmail.com"
              className="hover:underline font-bold "
            >
              Silvertaxipro1@gmail.com
            </a>
          </p>
          {/* Available Time — HIDDEN ON MOBILE (shown only on md and above) */}
          <p className="hidden md:flex items-center gap-2">
            We’re available
            <span className="bg-green-500 w-3 h-3 rounded-full inline-block"></span>
            <span className="font-semibold">{currentTime}</span>
          </p>

          {/* Phone */}

          <a
            className="text-2xl md:text-lg  font-bold text-shadow-sm flex items-center gap-2 cursor-pointer hover:underline"
            href="tel:1300788313"
          >
            <FaPhoneAlt /> 1300 788 313
          </a>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
