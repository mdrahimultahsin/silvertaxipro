import { Outlet} from "react-router";
import HomeAreaCovered from "../Home/HomeAreaCovered";

const Services = () => {
  return (
    <>
    <Outlet />
    <HomeAreaCovered/>
    </>
  );
};

export default Services;
