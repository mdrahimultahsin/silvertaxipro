import {useState} from "react";
import Container from "./Container";
import {FaPlus, FaMinus, FaQuestionCircle} from "react-icons/fa";

const Faq = ({faqs, faqSectionTitle}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-white">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {faqSectionTitle ? faqSectionTitle : "Frequently Asked Questions"}
          </h2>

          <p className="text-gray-color text-base md:text-lg max-w-3xl mx-auto">
            Find answers to common questions about our services, booking
            process, and more.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Grid */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group rounded-xl transition-all duration-300 ${
                  openIndex === index
                    ? "bg-white shadow-xl border-l-4 border-primary"
                    : "bg-white shadow-md hover:shadow-lg border border-gray-100"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 focus:outline-none"
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openIndex === index
                            ? "bg-primary text-black"
                            : "bg-gray-100 text-primary group-hover:bg-primary/20"
                        }`}
                      >
                        <FaQuestionCircle className="text-sm" />
                      </div>
                      <h3
                        className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                          openIndex === index ? "text-primary" : "text-gray-900"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? "bg-primary text-black"
                          : "bg-gray-100 text-primary group-hover:bg-primary/20"
                      }`}
                    >
                      {openIndex === index ? (
                        <FaMinus className="text-sm" />
                      ) : (
                        <FaPlus className="text-sm" />
                      )}
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pl-16">
                    <div className="h-px bg-gray-100 mb-4"></div>
                    <p className="text-gray-color leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
