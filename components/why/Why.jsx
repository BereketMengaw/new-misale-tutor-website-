import React from "react";

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Experienced Tutors",
      description:
        "Our tutors are highly qualified and experienced educators who are passionate about helping students succeed.",
    },
    {
      title: "Personalized Learning",
      description:
        "We tailor our tutoring sessions to meet the individual needs and learning styles of each student.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "We offer flexible scheduling options to accommodate your busy lifestyle.",
    },
    {
      title: "Affordable Rates",
      description: "We offer competitive rates for our tutoring services.",
    },
    {
      title: "Proven Results",
      description:
        "Our students consistently achieve excellent results in their studies.",
    },
    {
      title: "Satisfaction Guarantee",
      description: "We guarantee your satisfaction with our tutoring services.",
    },
  ];

  return (
    <section className="why-choose-us py-12 px-0 md:px-8 lg:px-16">
      <h2 className="text-center text-3xl font-bold mb-8 ">
        Why Choose Us for Home Tutor Service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto w-70">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card bg-green-200 rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
          >
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-gray-700 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
