import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.number.trim()) newErrors.number = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    let message = `
      <b style="font-weight:bold; font-size:20px">Customer Name:</b> ${formData.name} <br/>
      <b style="font-weight:bold; font-size:20px">Phone:</b> +${formData.number} <br/>
      <b style="font-weight:bold; font-size:20px">Email:</b> ${formData.email} <br/>
      <b style="font-weight:bold; font-size:20px">Message:</b> ${formData.message} <br/>
    `;

    const templateParams = {
      name: formData.name,
      message,
    };

    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    }, 1000);

    // Uncomment when emailjs is configured
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 5000);
          setFormData({
            name: "",
            email: "",
            number: "",
            message: "",
          });
        },
        () => {
          setLoading(false);
        }
      );
  };

  return (
    <div className="relative max-w-lg mx-auto">
      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-fadeIn flex items-center gap-3">
          <FaCheckCircle className="text-xl" />
          <div>
            <p className="font-semibold">Message Sent!</p>
            <p className="text-sm opacity-90">We'll get back to you soon.</p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-primary p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-800 text-sm mt-2">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              <FaUser className="inline mr-2 text-primary" />
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              <FaEnvelope className="inline mr-2 text-primary" />
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              <FaPhoneAlt className="inline mr-2 text-primary" />
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="number"
              placeholder="Enter your phone number"
              value={formData.number}
              onChange={handleChange}
              className={`w-full border ${errors.number ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition`}
            />
            {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Tell us how we can help you..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-gray-900 font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </button>

          {/* Trust Text */}
          <p className="text-center text-xs text-gray-500 mt-4">
            We'll never share your information with anyone else.
          </p>
        </form>
      </div>
    </div>
  );
};

export default GetInTouchForm;