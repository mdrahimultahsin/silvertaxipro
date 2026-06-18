import {IoCallSharp} from "react-icons/io5";
import {MdEmail} from "react-icons/md";
import {FaLocationDot, FaWhatsapp} from "react-icons/fa6";

const ConnectWithUs = () => {
  const contactInfo = [
    {
      id: 1,
      title: "PHONE",
      value: "1300 788 313",
      subtext: "Call anytime — 24/7",
      Icon: IoCallSharp,
      href: "tel:1300788313",
    },
    {
      id: 2,
      title: "WHATSAPP",
      value: "Message us on WhatsApp",
      subtext: "Fastest response",
      Icon: FaWhatsapp,
      href: "https://wa.me/0489181919",
    },
    {
      id: 3,
      title: "BOOKINGS EMAIL",
      value: "Silvertaxipro1@gmail.com",
      subtext: "For booking confirmations",
      Icon: MdEmail,
      href: "mailto:Silvertaxipro1@gmail.com",
    },
    {
      id: 4,
      title: "ADDRESS",
      value: "Liverpool-Parramatta Transitway",
      subtext: "Liverpool NSW 2170, Australia",
      Icon: FaLocationDot,
      href: "https://maps.app.goo.gl/9ZzwaiZkmfLdusak9?g_st=ic",
    },
  ];

  return (
    <div>
      <h3 className="text-3xl font-bold text-slate-900 mb-8">
        Contact Details
      </h3>

      <div className="space-y-4">
        {contactInfo.map((info) => (
          <a
            key={info.id}
            href={info.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-md"
          >
            {/* Icon Box */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500">
              <info.Icon className="text-lg text-white" />
            </div>

            {/* Content */}
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {info.title}
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900 break-all">
                {info.value}
              </p>

              <p className="mt-1 text-sm text-gray-400">{info.subtext}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConnectWithUs;
