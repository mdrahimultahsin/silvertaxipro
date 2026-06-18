import Container from "../../components/shared/Container";
import PagesHero from "../../components/shared/PagesHero";

import ConnectWithUs from "./ConnectWithUs";
import GetInTouchForm from "./GetInTouchForm";


const Contact = () => {
  return (
    <section>
     
     <PagesHero/>
      <Container>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {/* get in touch form */}
          <div className="flex-1 ">
            <GetInTouchForm />
          </div>

          {/* Contact with us section */}
          <div className="flex-1 ">
            <ConnectWithUs />
          </div>
        </div>
         <div className="mt-8 w-full h-80">
      <iframe
       src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6621.378387759434!2d150.9275889!3d-33.92339799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1295be890c5c5d%3A0x951e8dd4eaf8a273!2sLiverpool-Parramatta%20Transitway%2C%20Liverpool%20NSW%202170%2C%20Australia!5e0!3m2!1sen!2sbd!4v1781552982876!5m2!1sen!2sbd"}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Location"
      ></iframe>
    </div>
      </Container>
    </section>
  );
};

export default Contact;
