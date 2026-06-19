import {Outlet} from "react-router";
import HomeAreaCovered from "../Home/HomeAreaCovered";
import useSEO from "../../hooks/useSEO";

const Services = () => {
  return (
    <>
      {useSEO({
        title:
          "Taxi Services – Airport Transfers, Corporate & Local Rides | Silver Taxi Pro Sydney",
        description:
          "Explore professional taxi services by Silver Taxi Pro including airport transfers, corporate travel, local rides, long-distance trips, and 24/7 taxi booking across Sydney, Campbelltown, and surrounding areas. Enjoy safe, fast, and affordable transport with experienced drivers.",
        keywords:
          "taxi services sydney, airport transfer sydney taxi, corporate taxi service sydney, local taxi service campbelltown, long distance taxi australia, 24/7 taxi service sydney, silver taxi services, professional cab service sydney, airport taxi campbelltown, business travel taxi sydney, reliable taxi services nsw, luxury taxi service sydney, affordable taxi services australia, private hire taxi sydney, silver taxi pro services",
        canonical: "https://silvertaxipro.com.au/services",
      })}
      <Outlet />
      <HomeAreaCovered />
    </>
  );
};

export default Services;
