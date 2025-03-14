import React from "react";
import user1 from '../assets/profile-pictures/user1.jpg'
import user2 from '../assets/profile-pictures/user2.jpg'
import user3 from '../assets/profile-pictures/user3.jpg'
import user4 from '../assets/profile-pictures/user4.jpg'
import user5 from '../assets/profile-pictures/user5.jpg'
import user6 from '../assets/profile-pictures/user6.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Software Engineer",
      feedback: "This platform has transformed the way I work. The features are amazing and super easy to use!",
      image: user1, // Replace with actual image URL
    },
    {
      name: "John Smith",
      role: "Product Manager",
      feedback: "I love how intuitive and efficient this service is. It saves me hours every day!",
      image: user2, // Replace with actual image URL
    },
    {
      name: "Alice Johnson",
      role: "Designer",
      feedback: "Fantastic experience! The user interface is sleek, and the performance is outstanding.",
      image: user3, // Replace with actual image URL
    },
    {
      name: "Jane Doe",
      role: "Software Engineer",
      feedback: "This platform has transformed the way I work. The features are amazing and super easy to use!",
      image: user4, // Replace with actual image URL
    },
    {
      name: "John Smith",
      role: "Product Manager",
      feedback: "I love how intuitive and efficient this service is. It saves me hours every day!",
      image: user5, // Replace with actual image URL
    },
    {
      name: "Alice Johnson",
      role: "Designer",
      feedback: "Fantastic experience! The user interface is sleek, and the performance is outstanding.",
      image: user6, // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-neutral-900 text-white py-16 px-6">
      <h2 className="text-center text-3xl font-bold mb-12">What Our Users Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-neutral-800 p-6 rounded-xl shadow-lg text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-orange-500">{testimonial.role}</p>
            <p className="text-gray-300 mt-4">{`"${testimonial.feedback}"`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
