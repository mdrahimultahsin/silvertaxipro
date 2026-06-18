import {
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaPhoneAlt,
  FaAward,
  FaUsers,
  FaStar,
  FaHeadset,
  FaCar,
  FaMoneyBillWave,
  FaCalendarCheck,
} from "react-icons/fa";
import {IoCarSport} from "react-icons/io5";
import {useNavigate} from "react-router";
import ButtonSecondary from "../../components/shared/ButtonSecondary";
import ButtonPrimary from "../../components/shared/ButtonPrimary";
import Container from "../../components/shared/Container";

const Commitment = () => {
  const navigate = useNavigate();

  const coreValues = [
    {
      title: "Quick Refunds",
      desc: "Processed within 3–10 business days",
      icon: FaMoneyBillWave,
    },
    {
      title: "No Hidden Fees",
      desc: "Transparent pricing for every ride",
      icon: FaDollarSign,
    },
    {
      title: "Flexible Rescheduling",
      desc: "Change your booking anytime before pickup",
      icon: FaCalendarCheck,
    },
    {
      title: "24/7 Support",
      desc: "We are always here to help you",
      icon: FaHeadset,
    },
    {
      title: "Safety First",
      desc: "Clean, inspected and licensed vehicles",
      icon: FaShieldAlt,
    },
    {
      title: "Best Price Guarantee",
      desc: "Affordable fares for all trips",
      icon: FaMoneyBillWave,
    },
  ];

  const trustItems = [
    {icon: FaShieldAlt, text: "Families trust us with safety-first transport"},
    {icon: FaClock, text: "Always on-time corporate & airport transfers"},
    {icon: FaDollarSign, text: "Fair pricing with no hidden charges"},
  ];

  const whyChooseStats = [
    {
      icon: FaStar,
      value: "4.9/5",
      label: "Customer Rating",
      color: "text-yellow-400",
    },
    {
      icon: FaUsers,
      value: "10,000+",
      label: "Happy Customers",
      color: "text-primary",
    },
    {
      icon: FaAward,
      value: "Award",
      label: "Winning Service",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-gray-50 to-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <FaStar className="text-sm" />
            <span className="text-sm font-semibold">Why Trust Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Commitment
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Silver Taxi Pro is committed to reliability and affordability. We
            ensure every journey is smooth from booking to drop-off.
          </p>
        </div>

        {/* ===== CORE VALUES GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreValues.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <item.icon className="text-xl" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ===== TRUST STRIP ===== */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <item.icon className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ===== WHY CHOOSE US SECTION ===== */}
        <div className="relative overflow-hidden bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4">
                <FaAward className="text-primary text-sm" />
                <span className="text-white text-sm font-semibold">
                  Why Choose Us?
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Trusted by Thousands
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {whyChooseStats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center bg-white/5 rounded-xl p-4 backdrop-blur-sm"
                >
                  <stat.icon
                    className={`text-3xl ${stat.color} mx-auto mb-2`}
                  />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-center">
              <ButtonPrimary
                onClick={() => navigate("/book-a-taxi")}
                className="flex items-center gap-2 px-8 py-3"
              >
                <FaCar />
                Book A Taxi Now
              </ButtonPrimary>
            </div>
          </div>
        </div>

        {/* ===== CTA SECTION ===== */}
        <div className="text-center bg-primary text-black rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Need a Ride Right Now?
          </h3>

          <p className="text-sm md:text-lg mb-6 text-black/90">
            Instant booking • 24/7 availability • Transparent pricing
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300788313" className="">
              <ButtonSecondary
                className={`flex justify-between! gap-2 items-center`}
              >
                {" "}
                Call Now <FaPhoneAlt />
              </ButtonSecondary>
            </a>

            <button
              onClick={() => navigate("/book-a-taxi")}
              className="border border-white px-6 py-3 rounded-full font-semibold bg-white text-primary hover:text-primary transition flex items-center justify-center gap-2"
            >
              <IoCarSport />
              Book Online
            </button>
          </div>

          <p className="text-sm mt-4 text-white/80">
            Average wait time: 8 minutes
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Commitment;
