
import Faq from "../../components/shared/Faq";
import FeatureFleet from "./FeatureFleet";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeAreaCovered from "./HomeAreaCovered";
import Reviews from "./Reviews";
import ServicesSection from "./ServiceSection";
import SimpleProcess from "./SimpleProcess";
import StatsAndFeatures from "./StatsAndFeatures ";
import WhyChooseUs from "./WhyChooseUs";


const HomePage = () => {
        const faqs = [
    {
      question: "How do I book a taxi in Silver Taxi Pro?",
      answer:
        "Booking is easy: call us, use the online booking form on our website, or send us a message via WhatsApp. Our taxi service in Sydney, NSW, is available 24/7, and we confirm each booking promptly.",
    },
    {
      question: "Are your fares fixed or metered?",
      answer:
        "Most of our rides have fixed, transparent fares, so you always know what you'll pay. For on-demand and long-distance trips, we may use metered fares, but we always provide an estimate up front. There are no surprises when you ride with our Silver Taxi Pro.",
    },

    {
      question: "What areas do you serve?",
      answer:
        "We serve the entire Liverpool area, Macarthur region, and surrounding suburbs. Our Silver Taxi Pro services also extend to greater Sydney, including airport and cruise terminal transfers, weddings, events, and more. Wherever you need to go, our taxis Silver Taxi Pro can get you there.",
    },
    {
      question: "How can I track my taxi arrival?",
      answer:
        "We understand the importance of being on time. Once you've booked your taxi in Silver Taxi Pro, you'll receive a confirmation message with the details of your ride and estimated arrival time. For added convenience, we offer live tracking so you can see when your Silver Taxi Pro is on its way.",
    },
    {
      question: "Can I book a taxi in advance?",
      answer:
        "Absolutely! Whether you’re planning a ride for the next day or scheduling a future airport transfer, our Silver Taxi Pro service allows you to book in advance for guaranteed peace of mind. Book your ride online, by phone, or through WhatsApp.",
    },
    {
      question: "Do you charge extra for luggage or large items?",
      answer:
        "We believe in transparent pricing. Our fares include a reasonable allowance for luggage, so you don’t have to worry about hidden fees for small bags. For large items like bikes or oversized luggage, a small surcharge may apply, but we'll inform you of any additional costs upfront.",
    },
    {
      question: "Are your taxis available for long-distance travel?",
      answer:
        "Yes! Silver Taxi Pro offers long-distance travel to nearby cities, regional areas, and even interstate trips. Whether it’s a corporate journey, family vacation, or special event, our taxi service Silver Taxi Pro will provide a comfortable ride for your extended trips. Book now for a seamless long-distance experience.",
    },
    {
      question: "How can I cancel or change my booking?",
      answer:
        "We offer flexible booking options. If you need to cancel or modify your taxi Silver Taxi Pro reservation, simply call us or send us a message through WhatsApp. We’ll assist you promptly to make any necessary changes. Please note that cancellations or changes made within a short time frame may be subject to a small fee, which will be communicated upfront.",
    },
    {
      question: "Can I pay by card or through mobile payment?",
      answer:
        "Yes! We accept a variety of payment methods, including credit/debit cards, mobile payments (like Apple Pay or Google Pay), and cash. Our goal is to make paying for your taxi Silver Taxi Pro ride as convenient and seamless as possible.",
    },
  ];
        return (
                <>
                      <Hero/> 
                    
                      
                      <ServicesSection/>
                      <HomeAbout/>
                      <StatsAndFeatures/> 
                      <WhyChooseUs/>
                      <FeatureFleet/>
                     
                      <SimpleProcess/>
                      <Reviews/>
                           <Faq faqs={faqs}/>
                      <HomeAreaCovered/>
                </>
        );
};

export default HomePage;