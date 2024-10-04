"use client";
import React, { useState } from "react";

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

  const [activeCard, setActiveCard] = useState(0); // Default to first card

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index); // Toggle content
  };

  return (
    <section className="bg-blue-950 py-12 px-0 md:px-8 lg:px-16">
      <h2 className="text-center text-white text-3xl font-bold mb-8 animate-fade-in">
        Why Choose Us for Home Tutor Service
      </h2>
      <div className="lg:flex lg:space-x-8">
        {/* List Section */}
        <ul className="list-none space-y-4 lg:w-1/2">
          {cards.map((card, index) => (
            <li
              key={index}
              className={`relative cursor-pointer p-3 pl-6 rounded-lg transition-all duration-300 ease-in-out
              ${
                activeCard === index
                  ? "bg-green-100 text-green-700 border-l-4 border-green-500"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              }`}
              onClick={() => handleCardClick(index)}
            >
              {card.title}
            </li>
          ))}
        </ul>

        {/* Card Display Section */}
        <div className="mt-6 lg:mt-0 lg:w-1/2">
          {activeCard !== null && (
            <div className="card bg-green-100 rounded-lg p-6 shadow-lg transition-transform transform-gpu scale-100 hover:scale-105 duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                {cards[activeCard].title}
              </h3>
              <p className="text-gray-700">
                {activeCard === 0 && (
                  <>
                    <span className="block lg:hidden">
                      Our tutors have over a decade of combined teaching
                      experience, focusing on personalized education.
                    </span>
                    <span className="hidden lg:block">
                      Our tutors have accumulated over a decade of combined
                      teaching experience, focusing on personalized education
                      that adapts to each student's unique learning style. This
                      extensive background allows our tutors to implement
                      effective teaching strategies that not only improve
                      understanding but also foster a love for learning. They
                      are committed to ensuring that every student feels
                      supported and motivated, creating a positive learning
                      environment that encourages academic success. Parents
                      often remark on the transformative impact our tutors have
                      on their children's confidence and enthusiasm for school,
                      making education an enjoyable journey.
                    </span>
                  </>
                )}
                {activeCard === 1 && (
                  <>
                    <span className="block lg:hidden">
                      We have tailored learning plans for over 1,000 students,
                      each crafted to meet their specific needs.
                    </span>
                    <span className="hidden lg:block">
                      We take pride in having developed tailored learning plans
                      for over 1,000 students, each crafted to meet the specific
                      needs and goals of individual learners. This personalized
                      approach has led to significant improvements in students'
                      academic performance across various subjects. Our
                      experienced educators assess each student's strengths and
                      weaknesses to create a customized roadmap that guides them
                      through their learning journey. The success stories we
                      have accumulated over the years highlight the importance
                      of recognizing that every student learns differently and
                      requires a unique plan to achieve their best potential.
                    </span>
                  </>
                )}
                {activeCard === 2 && (
                  <>
                    <span className="block lg:hidden">
                      95% of our students report noticeable grade improvements
                      within three months.
                    </span>
                    <span className="hidden lg:block">
                      A remarkable 95% of our students have reported noticeable
                      improvements in their grades within just three months of
                      receiving our tutoring services. This statistic is a
                      testament to the effectiveness of our teaching methods and
                      the dedication of our tutors. By establishing a supportive
                      learning environment, we enable students to engage
                      actively with the material, ask questions, and explore
                      topics at their own pace. This proactive approach not only
                      enhances their academic performance but also builds
                      essential skills such as critical thinking and
                      problem-solving that are valuable for lifelong learning.
                    </span>
                  </>
                )}
                {activeCard === 3 && (
                  <>
                    <span className="block lg:hidden">
                      Over 90% of our clients schedule tutoring sessions at
                      their preferred times.
                    </span>
                    <span className="hidden lg:block">
                      We understand the importance of flexibility in education,
                      which is why we offer a variety of scheduling options to
                      accommodate the busy lives of our families. Over 90% of
                      our clients have successfully scheduled tutoring sessions
                      at their preferred times, allowing for a seamless
                      integration of education into their daily routines. Our
                      commitment to flexibility means that we can meet the needs
                      of students and parents alike, ensuring that learning
                      continues without interruptions. This adaptability has
                      proven essential in building lasting relationships with
                      our families and contributing to their overall
                      satisfaction.
                    </span>
                  </>
                )}
                {activeCard === 4 && (
                  <>
                    <span className="block lg:hidden">
                      80% of parents report increased student engagement and
                      motivation.
                    </span>
                    <span className="hidden lg:block">
                      We actively engage parents in their children's learning
                      process, resulting in 80% of parents reporting increased
                      student engagement and motivation. Our approach encourages
                      regular communication between tutors and parents, ensuring
                      that they are informed about their child's progress and
                      any areas that may require additional support. By
                      fostering this collaborative relationship, we empower
                      parents to take an active role in their child's education,
                      creating a supportive home environment that complements
                      our tutoring sessions. This holistic approach not only
                      enhances academic performance but also promotes positive
                      attitudes toward learning.
                    </span>
                  </>
                )}
                {activeCard === 5 && (
                  <>
                    <span className="block lg:hidden">
                      We have an average rating of 4.9 out of 5 from parents and
                      students.
                    </span>
                    <span className="hidden lg:block">
                      Our service has consistently received an impressive
                      average rating of 4.9 out of 5 from both parents and
                      students, reflecting our unwavering commitment to
                      excellence in education. This high level of satisfaction
                      is a direct result of our dedicated tutors, comprehensive
                      curriculum, and personalized approach to learning. We
                      believe in continuous improvement and actively seek
                      feedback from our clients to enhance our services further.
                      By maintaining these high standards, we ensure that every
                      student receives the quality education they deserve and
                      that parents feel confident in their choice of tutoring
                      service.
                    </span>
                  </>
                )}
                {activeCard === 6 && (
                  <>
                    <span className="block lg:hidden">
                      We offer tutoring in a diverse range of subjects for all
                      grade levels.
                    </span>
                    <span className="hidden lg:block">
                      Our diverse range of subjects covered ensures that we can
                      assist students across all grade levels in achieving their
                      academic goals. Whether a student requires support in
                      mathematics, science, languages, or test preparation, our
                      team of qualified tutors is equipped with the expertise to
                      guide them through their studies effectively. This
                      comprehensive approach to tutoring allows us to cater to
                      the unique needs of each student, helping them to build a
                      solid foundation in their studies while developing
                      confidence in their abilities. Our goal is to make
                      education accessible and enjoyable for all learners.
                    </span>
                  </>
                )}
                {activeCard === 7 && (
                  <>
                    <span className="block lg:hidden">
                      We have positively impacted over 500 families through
                      local partnerships.
                    </span>
                    <span className="hidden lg:block">
                      We take pride in our strong community ties and have
                      partnered with local schools and organizations to provide
                      essential educational resources to families in need.
                      Through these collaborations, we have positively impacted
                      over 500 families, providing them with access to tutoring
                      services and learning materials that might otherwise be
                      unavailable. Our commitment to community engagement
                      reflects our belief in the importance of education as a
                      cornerstone for success. We strive to create opportunities
                      for all students, fostering an inclusive environment where
                      everyone can thrive and achieve their full potential.
                    </span>
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
