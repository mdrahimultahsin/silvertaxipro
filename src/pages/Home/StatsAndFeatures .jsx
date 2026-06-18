
import { FaTaxi, FaSmile, FaRoad, FaClock } from "react-icons/fa";

const StatsAndFeatures = () => {
 const stats = [
  {
    id: 1,
    number: "1K+",
    label: "COMPLETED TRIPS",
    icon: FaRoad,
  },
  {
    id: 2,
    number: "5+",
    label: "SERVICE AREAS",
    icon: FaTaxi,
  },
  {
    id: 3,
    number: "98%",
    label: "ON-TIME ARRIVAL",
    icon: FaClock,
  },
  {
    id: 4,
    number: "4.9",
    label: "CUSTOMER RATING",
    icon: FaSmile,
  },
];



  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-6 rounded-2xl bg-linear-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-2xl text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm font-semibold text-gray-color tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      

        
      </div>
    </section>
  );
};

export default StatsAndFeatures;