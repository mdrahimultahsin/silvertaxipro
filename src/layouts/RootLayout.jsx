import {Outlet} from "react-router";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/shared/CallToAction";
import FloatingSidebar from "../components/shared/FloatingSidebar";
import ScrollToTop from "../utils/ScrollToTop";

const RootLayout = () => {
  return (
    <div>
       <ScrollToTop />
      <FloatingSidebar/>
      <TopHeader />
      <Header />
      <Outlet />
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default RootLayout;
