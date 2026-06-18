import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/Home";
import Loading from "../components/shared/Loading";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import BookATaxi from "../pages/BookATaxi/BookATaxi";
import AreaCovered from "../pages/AreaWeCovered/AreaWeCovered";
import TermsAndCondition from "../pages/TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CancellationAndRefunds from "../pages/CancellationAndRefunds/CancellationAndRefunds";
import Services from "../pages/Services/Services";
import BookTaxiSydneyAiport from "../pages/Services/BookTaxiSydneyAiport/BookTaxiSydneyAiport";
import BabySeatTaxi from "../pages/Services/BabySeatTaxi/BabySeatTaxi";
import CorporateTransportService from "../pages/Services/CorporateTransportService/CorporateTransportService";
import CruiseTerminalTransfer from "../pages/Services/CruiseTerminalTransfer/CruiseTerminalTransfer";
import WeddingTransfer from "../pages/Services/WeddingTransfer/WeddingTransfer";
import EventTransfer from "../pages/Services/EventTransfer/EventTransfer";
import PercelDelivery from "../pages/Services/PercelDelivery/PercelDelivery";
import MaxiTaxiService from "../pages/Services/MaxiTaxiService/MaxiTaxiService";
import LuxuryTransfer from "../pages/Services/LuxuryTransfer/LuxuryTransfer";

import AirportShuttle from "../pages/Services/AirportShuttle/AirportShuttle";
import CorporateTips from "../pages/Services/CorporateTips/CorporateTips";
import SydneyCBDTransfer from "../pages/Services/SydneyCBDTransfer/SydneyCBDTransfer";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: async () => {
          const res = await fetch("/service.json");
          return res.json();
        },
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "/about",
        Component: About,
      },
 {
        path: "/services",
        Component: Services,
        children: [
          {
            index: true,
            Component: BookTaxiSydneyAiport,
          },
          {
            path: "book-taxi-sydney-airport",
            Component: BookTaxiSydneyAiport,
          },
          {
            path: "baby-seat-taxi-sydney",
            Component: BabySeatTaxi,
          },

          {
            path: "corporate-transport-services",
            Component: CorporateTransportService,
          },
          {
            path: "cruise-terminal-transfer",
            Component: CruiseTerminalTransfer,
          },
          {
            path: "wedding-transfer",
            Component: WeddingTransfer,
          },
          {
            path: "event-transfer",
            Component: EventTransfer,
          },
          {
            path: "parcel-delivery",
            Component: PercelDelivery,
          },
          {
            path: "maxi-taxi-service",
            Component: MaxiTaxiService,
          },
          {
            path: "luxury-transfer",
            Component: LuxuryTransfer,
          },
          {
            path: "sydney-cbd-transfer",
            Component: SydneyCBDTransfer,
          },
          {
            path: "airport-shuttle",
            Component: AirportShuttle,
          },
          {
            path: "corporate-tips",
            Component: CorporateTips,
          },
        ],
      },
      {
        path: "/book-a-taxi",
        Component: BookATaxi,
      },
      {
        path: "/area-covered",
        Component: AreaCovered,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/terms-and-condition",
        Component: TermsAndCondition,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/cancellation-and-refunds",
        Component: CancellationAndRefunds,
      },
    ],
  },
]);
export default router;
