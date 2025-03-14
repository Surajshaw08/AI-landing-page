import React from "react";
import {
  FiCpu,
  FiLayout,
  FiShield,
  FiEye,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi"; // Icons from react-icons

const Featues = () => {
  const features = [
    {
      icon: <FiCpu className="text-orange-500 w-8 h-8" />,
      title: "Drag-and-Drop Interface",
    },
    {
      icon: <FiLayout className="text-orange-500 w-8 h-8" />,
      title: "Multi-Platform Compatibility",
    },
    {
      icon: <FiShield className="text-orange-500 w-8 h-8" />,
      title: "Built-in Templates",
    },
    {
      icon: <FiEye className="text-orange-500 w-8 h-8" />,
      title: "Real-Time Preview",
    },
    {
      icon: <FiUsers className="text-orange-500 w-8 h-8" />,
      title: "Collaboration Tools",
    },
    {
      icon: <FiBarChart2 className="text-orange-500 w-8 h-8" />,
      title: "Analytics Dashboard",
    },
  ];

  return (
    <section className="py-16 bg-neutral-900 text-neutral-200">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase tracking-wider text-sm">
            Feature
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
            Easily build <span className="text-orange-500">your code</span>
          </h2>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-8 transition-transform"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-center">
                {feature.title} lorem15
              </h3>
              <p className="text-neutral-400 text-sm mt-3 text-center">
                {feature.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum cum veniam facere iusto, quos dolorem?
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featues;
