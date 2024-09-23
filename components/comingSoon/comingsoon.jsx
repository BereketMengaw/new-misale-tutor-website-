import React from "react";
import Image from "next/image";

function ComingSoon() {
  const features = [
    {
      title: "Instant Tutor Access",
      description:
        "Connect with qualified tutors anytime, anywhere from your mobile device.",
    },
    {
      title: "Flexible Scheduling",
      description: "Easily book and manage your tutoring sessions on the go.",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your learning journey and track your progress effortlessly.",
    },
    {
      title: "Interactive Learning Tools",
      description:
        "Engage with interactive quizzes and resources tailored to your needs.",
    },
  ];

  return (
    <div className="flex flex-col  lg:flex-row items-center justify-center bg-blue-950 text-center  p-5 pb-10 h-1/2">
      <div className="flex flex-col items-center lg:mr-16">
        <h1 className="text-5xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-500 mb-8">
          Stay tuned for the launch of our new mobile app!
        </p>
        <Image
          src="/coming/coming.jpg"
          alt="Coming Soon"
          width={500}
          height={400}
          className="rounded-lg shadow-lg max-w-md mb-8 animate-bubble-jump h-52 w-32"
        />

        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex items-center">
            <Image
              src="/coming/playstore.png"
              alt="Play Store icon"
              className="h-4"
              width={500}
              height={400}
            />
            <h4 className="pl-2 text-lg font-semibold">Play Store</h4>
          </div>
          <div className="flex items-center">
            <Image
              width={500}
              height={400}
              src="/coming/one.png"
              alt="App Store icon"
              className="h-4"
            />
            <h4 className="pl-2 text-lg font-semibold">App Store</h4>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 mt-10 lg:mt-0 hidden lg:flex flex-col">
        <h2 className="text-3xl font-bold text-white mb-6">App Features</h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
