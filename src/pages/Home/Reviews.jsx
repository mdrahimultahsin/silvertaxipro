import {useRef, useState} from "react";
import Container from "../../components/shared/Container";
import googleLogo from "../../assets/google-logo.webp";
import {IoMdStar, IoIosStarHalf} from "react-icons/io";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Loading from "../../components/shared/Loading";
import {FaChevronLeft, FaChevronRight, FaQuoteLeft} from "react-icons/fa";

const fakeReviews = [
  {
    author_name: "John Smith",
    profile_photo_url: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    relative_time_description: "2 days ago",
    text: "Fantastic service! Driver was on time, very polite and the ride was smooth. Highly recommend Silver Taxi Pro for anyone needing reliable transport in Sydney.",
  },
  {
    author_name: "Emily Johnson",
    profile_photo_url: "https://i.pravatar.cc/100?img=2",
    rating: 5,
    relative_time_description: "1 week ago",
    text: "Very reliable taxi service. Booking was easy and the car was clean and comfortable. Will definitely use again for airport transfers.",
  },
  {
    author_name: "Michael Brown",
    profile_photo_url: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    relative_time_description: "3 days ago",
    text: "Best taxi service in Sydney! Friendly driver and affordable pricing. The vehicle was spotless and the driver was very professional.",
  },
  {
    author_name: "Sarah Williams",
    profile_photo_url: "https://i.pravatar.cc/100?img=4",
    rating: 5,
    relative_time_description: "5 days ago",
    text: "Good experience overall. Arrived on time and very professional service. Communication was excellent throughout the booking process.",
  },
  {
    author_name: "David Wilson",
    profile_photo_url: "https://i.pravatar.cc/100?img=5",
    rating: 5,
    relative_time_description: "1 day ago",
    text: "Amazing service! Will definitely book again for airport transfers. The driver was waiting for us even though our flight was delayed.",
  },
];

const Reviews = () => {
  const [reviews] = useState(fakeReviews);
  const swiperRef = useRef();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<IoMdStar key={i} className="text-yellow-500" size={18} />);
      } else if (rating >= i - 0.5) {
        stars.push(
          <IoIosStarHalf key={i} className="text-yellow-500" size={18} />,
        );
      } else {
        stars.push(<IoMdStar key={i} className="text-gray-300" size={18} />);
      }
    }
    return stars;
  };

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-color text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied customers who trust us for reliable and
            comfortable taxi services across Sydney.
          </p>
        </div>

        {/* Google Rating Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-16 md:w-20"
                  src={googleLogo}
                  alt="Google Logo"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Excellent
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      <IoMdStar size={22} className="text-yellow-500" />
                      <IoMdStar size={22} className="text-yellow-500" />
                      <IoMdStar size={22} className="text-yellow-500" />
                      <IoMdStar size={22} className="text-yellow-500" />
                      <IoMdStar size={22} className="text-yellow-500" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      5.0
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Based on 430+ reviews
                  </p>
                </div>
              </div>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Write a Review</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="relative px-4 md:px-8">
          {reviews.length > 0 ? (
            <>
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={24}
                breakpoints={{
                  0: {slidesPerView: 1},
                  640: {slidesPerView: 2},
                  1024: {slidesPerView: 3},
                }}
                autoplay={{delay: 4000, disableOnInteraction: false}}
                pagination={{clickable: true, dynamicBullets: true}}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="pb-12"
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 relative">
                      {/* Quote Icon */}
                      <FaQuoteLeft className="text-primary/20 text-4xl absolute top-4 right-4" />

                      {/* Review Text */}
                      <p className="text-gray-700 leading-relaxed mb-4 line-clamp-4 min-h-25">
                        "{review.text}"
                      </p>

                      {/* Rating */}
                      <div className="flex mb-4">
                        {renderStars(review.rating)}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <img
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {review.author_name}
                          </h4>
                          <p className="text-gray-500 text-xs">
                            {review.relative_time_description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-primary text-primary hover:text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10 border border-gray-200"
                aria-label="Previous review"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-primary text-primary hover:text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10 border border-gray-200"
                aria-label="Next review"
              >
                <FaChevronRight />
              </button>
            </>
          ) : (
            <div className="flex justify-center py-12">
              <Loading />
            </div>
          )}
        </div>
      </Container>

      {/* Custom Styles for Swiper Pagination */}
      <style jsx>{`
        :global(.swiper-pagination-bullet-active) {
          background-color: #fbbf24 !important;
        }
        :global(.swiper-pagination-bullet) {
          width: 8px;
          height: 8px;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
