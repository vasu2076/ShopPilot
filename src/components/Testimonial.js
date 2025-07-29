import React from "react";

const testimonials = [
  {
    name: "Aarav Mehta",
    rating: 5,
    feedback:
      "Excellent service and user experience. The team was very responsive and the product quality exceeded expectations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    feedback:
      "Absolutely love the intuitive design! It helped our business grow. Great support as well.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan Patel",
    rating: 5,
    feedback:
      "Professional, efficient, and creative. Would definitely recommend to others looking for quality results.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-left">
        <h4>REVIEW & RATINGS</h4>
        <h2>
          Positive <br /> Customers <br /> Feedback
        </h2>
        <p>
          Discover how our clients feel about our services. Real experiences,
          real feedback, and real success stories that speak for themselves.
        </p>
      </div>

      <div className="testimonial-right">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h5>{item.name}</h5>
            <div className="stars">
              {"★".repeat(item.rating)}{" "}
            </div>
            <p>{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
