import Container from "../../components/shared/Container";
import {FaMapMarkerAlt, FaTaxi, FaStar, FaPhoneAlt} from "react-icons/fa";
import {IoCarSport, IoTime} from "react-icons/io5";

import QuickLinks from "./QuickLinks";
import {useNavigate} from "react-router";
import {serviceAreasData} from "../../utils/serviceArea";
import PagesHero from "../../components/shared/PagesHero";
import useSEO from "../../hooks/useSEO";

const AreaCovered = () => {
  const navigate = useNavigate();
  const serviceAreas = serviceAreasData;
  const serviceFeatures = [
    {
      icon: IoTime,
      title: "24/7 Service",
      description: "Round the clock availability",
    },
    {
      icon: FaStar,
      title: "Rated 5.0/5",
      description: "By 2000+ customers",
    },
    {
      icon: IoCarSport,
      title: "Modern Fleet",
      description: "Clean & comfortable vehicles",
    },
    {
      icon: FaPhoneAlt,
      title: "Instant Booking",
      description: "Quick & easy reservations",
    },
  ];

  const popularRoutes = [
    {from: "Campbelltown", to: "Sydney Airport", time: "45 min"},
    {from: "Camden", to: "Campbelltown", time: "25 min"},
    {from: "Bowral", to: "Campbelltown", time: "35 min"},
    {from: "Oran Park", to: "Parramatta", time: "40 min"},
  ];

  return (
    <>
      {useSEO({
        title:
          "Areas We Cover – Silver Taxi Pro Sydney, Serving Sydney Southwest, Liverpool and surrounding areas",
        description:
          "Silver Taxi Pro proudly provides reliable taxi services across Sydney, Campbelltown, and surrounding suburbs. We offer fast airport transfers, local rides, and corporate travel in all major residential, business, and airport zones. Check our full service coverage areas and book your ride anywhere in our network.",
        keywords:
          "areas covered silver taxi pro, taxi service areas sydney, campbelltown taxi coverage, sydney taxi service areas, airport taxi sydney suburbs, taxi near me sydney, cab service areas australia, silver taxi service locations, local taxi areas campbelltown, sydney transport coverage, taxi service near sydney airport, western sydney taxi service, south west sydney taxi, reliable taxi areas nsw, taxi booking coverage australia",
        canonical: "https://silvertaxipro.com.au/area-covered",
      })}
      <div className="pb-15">
        <PagesHero
          title={`Service Areas We Cover`}
          description={`  Silver Taxi Pro provides safe and reliable transport
                  across Sydney and the Macarthur region. We support families,
                  groups, and business travellers with clean vehicles and
                  trained drivers. Our fleet includes sedans, SUVs, maxi cabs,
                  luxury cars. We operate 24/7
                  and cover airport transfers, corporate trips, cruise pickups,
                  and daily travel needs.`}
        />

        <Container>
          <div className="pt-16 md:pt-24">
            {/* HEADER */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Proudly Serving Sydney Suburbs
              </h2>

              <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>

              <p className="text-gray-600 max-w-3xl mx-auto mt-5 text-sm md:text-lg leading-relaxed">
                We connect travellers across{" "}
                <span className="text-primary font-semibold">44+ suburbs</span>{" "}
                with safe, fast, and comfortable taxi services including airport
                transfers, local rides, and daily travel across Sydney.
              </p>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-light border border-gray-100 rounded-2xl p-5 text-center hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <feature.icon className="text-xl" />
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* MAIN SECTION */}
            <div className="grid lg:grid-cols-3 gap-8 mb-14">
              {/* SERVICE AREAS */}
              <div className="lg:col-span-2 bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                      All Service Areas
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                      Full taxi coverage across Sydney suburbs
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {/* Sydney */}
                  <div className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-primary/30 hover:shadow-md transition">
                    <FaTaxi className="text-primary mx-auto mb-2" />
                    <span className="text-gray-800 text-sm font-medium">
                      Sydney
                    </span>
                  </div>

                  {/* Other Areas */}
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-primary/30 hover:shadow-md transition"
                    >
                      <FaTaxi className="text-primary mx-auto mb-2" />
                      <span className="text-gray-800 text-sm font-medium">
                        {area.replace(" NSW", "")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <div className="space-y-6 lg:sticky lg:top-24 lg:self-start h-fit">
                {/* ROUTES */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <IoCarSport className="text-primary" />
                    Popular Routes
                  </h3>

                  <div className="space-y-3">
                    {popularRoutes.map((route, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition"
                      >
                        <div className="flex justify-between text-sm font-medium text-gray-800">
                          <span>{route.from}</span>
                          <span className="text-primary">{route.time}</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">
                          → {route.to}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* STATS */}
                <div className="bg-primary text-black rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Why Choose Us?</h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Response Time</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">
                        Under 10 min
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Fleet Size</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">
                        50+ Vehicles
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Experience</span>
                      <span className="bg-white px-2 py-1 rounded-full text-xs">
                        Since 2010
                      </span>
                    </div>
                  </div>
                </div>

                <QuickLinks />
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Need a Taxi Without the Wait?
              </h3>

              <p className="text-gray-300 mb-6">
                Fast pickup • 24/7 service • Transparent pricing
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:1300788313"
                  className="bg-primary text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>

                <button
                  onClick={() => navigate("/book-a-taxi")}
                  className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition flex items-center justify-center gap-2"
                >
                  <IoCarSport />
                  Book Online
                </button>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                Average wait time: 8 minutes
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AreaCovered;
