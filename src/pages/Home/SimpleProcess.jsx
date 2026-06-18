import ButtonPrimary from "../../components/shared/ButtonPrimary";


const SimpleProcess = () => {
  const steps = [
  {
    number: "01",
    title: "Enter Your Details",
    description: "Fill in your name, phone number, email, and passenger count."
  },
  {
    number: "02",
    title: "Choose Pickup & Dropoff",
    description: "Enter your pickup location, destination, and select pickup date & time."
  },
  {
    number: "03",
    title: "Select Vehicle & Payment",
    description: "Choose your vehicle type, payment mode, and add any special instructions."
  },
  {
    number: "04",
    title: "Confirm Booking",
    description: "Review your details and submit your booking request instantly."
  }
];

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
                <div className="flex justify-center mb-4">

                <ButtonPrimary className={`px-2! py-2! text-sm!`}> Simple Process</ButtonPrimary>
                </div>
          <h2 className="section-title  leading-5! ">
            How to Works
          </h2>
          <p className="mt-0 text-white">
            Book your ride in minutes - no apps, no hassle.
          </p>
        </div>

        {/* Steps Grid */}
       <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">

  {/* ONE continuous line behind all steps */}
  <div className="hidden lg:block absolute top-10 left-0 right-0 z-0">
    <div className="h-0.5 bg-primary w-full"></div>
  </div>

  {steps.map((step, index) => (
    <div key={index} className=" text-center z-10 relative">

      {/* Circle */}
      <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center text-3xl font-bold text-black border-8 border-[#2b2b2b]">
        {index + 1}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mt-6 mb-3">
        {step.title}
      </h3>

      <p className="text-accent leading-relaxed">
        {step.description}
      </p>
    </div>
  ))}
</div>

      
      </div>
    </section>
  );
};

export default SimpleProcess;