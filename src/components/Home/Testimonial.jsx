import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {

    const reviews = [
        { id: 1, rating: 4, details: "Excellent service and support!", name: "Jane Smith" },
        { id: 2, rating: 5, details: "Very professional and efficient.", name: "John Doe" },
        { id: 3, rating: 3, details: "Good experience overall.", name: "Alice Johnson" }
    ];

    return (
        <section className="my-20">
            <h5 className="text-yellow-400 text-2xl mb-1">-- What Our Clients Say --</h5>
            <h2  className="text-center text-4xl font-bold mb-6">TESTIMONIALS</h2>
            <Swiper navigation modules={[Navigation]} className="mySwiper">
                {reviews.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8 text-center">{review.details}</p>
                            <h3 className="text-2xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonial;