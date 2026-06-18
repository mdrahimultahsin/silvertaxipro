import about2 from "../../assets/silvertaxipro-merge-car-images.png";

const WhoWeAre = () => {
  return (
    <section className="py-16 md:py-24 bg-white">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Who We Are
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SIDE */}
        <div className="space-y-6">

       

          {/* Highlight Cards */}
          <div className="space-y-4">
  <div className="p-5 rounded-xl bg-gray-50 border-l-4 border-primary shadow-sm hover:shadow-md transition">
            
              <p className="text-gray-600 text-sm md:text-base">
                Silver Taxi Pro was started to fill a gap in the Sydney
            transport market. Passengers wanted affordable group transport with
            professional drivers and simple booking. We built a fleet that
            includes sedans, SUVs, 7 seat maxi vans, 11 seat maxi vans, luxury
            vehicles.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border-l-4 border-primary shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-gray-900 mb-1">Our Mission</h4>
              <p className="text-gray-600 text-sm md:text-base">
                To provide safe, reliable, and affordable maxi cab services for every customer.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gray-50 border-l-4 border-primary shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-gray-900 mb-1">Our Vision</h4>
              <p className="text-gray-600 text-sm md:text-base">
                To be Sydney’s most trusted name for airport, cruise, and group transfers.
              </p>
            </div>

          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src={about2}
            alt="Silver Taxi Pro"
            className="w-full object-contain drop-shadow-xl rounded-xl"
          />

          {/* decorative glow */}
          <div className="absolute -z-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full top-10 right-10"></div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;