import {useEffect, useState} from "react";
import {Link} from "react-router";
import Container from "../../components/shared/Container";
import {IoPeopleSharp} from "react-icons/io5";
import {GiConcreteBag} from "react-icons/gi";
import {FaCar} from "react-icons/fa";
import {MdAirportShuttle} from "react-icons/md";
import ButtonPrimary from "../../components/shared/ButtonPrimary";
import Loading from "../../components/shared/Loading";

const FeatureFleet = ({
  fleetSectionTitle,
  fleetSectionSubTitle,
  fleetSectionVehicles,
  className
}) => {
  const [fleets, setFleets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    fetch("/fleet.json")
      .then((res) => res.json())
      .then((data) => {
        setFleets(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const vehicleIcons = {
    sedan: <FaCar className="text-3xl" />,
    suv: <MdAirportShuttle className="text-3xl" />,
    luxury: <FaCar className="text-3xl" />,
    maxi: <MdAirportShuttle className="text-3xl" />,
  };

  const getVehicleIcon = (name) => {
    if (name?.toLowerCase().includes("sedan")) return vehicleIcons.sedan;
    if (name?.toLowerCase().includes("suv")) return vehicleIcons.suv;
    if (name?.toLowerCase().includes("luxury")) return vehicleIcons.luxury;
    if (name?.toLowerCase().includes("maxi")) return vehicleIcons.maxi;
    return <FaCar className="text-3xl" />;
  };

  return (
    <section className={`py-20  ${className}`}>
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {fleetSectionTitle
              ? fleetSectionTitle
              : "Our Premium Fleet: Travel in Comfort and Style"}
          </h2>

          <p className="text-gray-color text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            {fleetSectionSubTitle
              ? fleetSectionSubTitle
              : "Choose the right vehicle for your journey with Silver Taxi & Maxi Cabs. Whether you travel alone or with a group, our fleet offers comfort, safety, and reliability. Our drivers are local experts and know the fastest routes around Sydney."}
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full flex justify-center">
              <Loading />
            </div>
          ) : (
            (fleetSectionVehicles || fleets).map((fleet, idx) => (
              <div
                key={fleet.id || idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden ">
                  <img
                    className="w-full h-full object-contain  transition-transform duration-500 "
                    src={fleet.image}
                    alt={`${fleet.name} - Silver Taxi Pro`}
                  />
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                    Available Now
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-4 py-4">
                  {/* Vehicle Name */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {fleet.name}
                    </h3>
                    <div className="text-primary">
                      {getVehicleIcon(fleet.name)}
                    </div>
                  </div>

                  {/* Capacity Icons */}
                  <div className="flex items-center gap-6 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-gray-700">
                      <IoPeopleSharp className="text-xl text-primary" />
                      <span className="font-semibold">
                        {fleet.passengerCapacity} Passengers
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <GiConcreteBag className="text-xl text-primary" />
                      <span className="font-semibold">
                        {fleet.bagsCapacity} Bags
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-color leading-relaxed mb-4 ">
                    {fleet.description}
                  </p>

                  {/* Book Now Button */}
                  <Link to="/book-a-taxi">
                    <ButtonPrimary className="w-full py-3 text-base font-semibold justify-center! ">
                      Book Now
                    </ButtonPrimary>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

export default FeatureFleet;
