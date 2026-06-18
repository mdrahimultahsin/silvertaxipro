import Container from "../../components/shared/Container";


const HomeAreaCovered = () => {
  return (
    <section className={`pt-15`}>
      <Container>

        <iframe
        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424141.6978944982!2d150.93197474999997!3d-33.84824395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sbd!4v1780778995454!5m2!1sen!2sbd"}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sydney Airport Map"
      />
      
        </Container>
    </section>
  );
};

export default HomeAreaCovered;
