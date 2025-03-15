import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from "react-icons/fi";

const Pricing = () => {
  return (
    <div className="bg-neutral-900 text-white py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-12">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="bg-neutral-800 p-8 rounded-xl text-center border border-neutral-700">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="text-4xl font-bold my-4">
            $0 <span className="text-lg font-normal">/Month</span>
          </p>
          <ul className="space-y-3 text-left">
            <Feature text="Private board sharing" />
            <Feature text="5 Gb Storage" />
            <Feature text="Web Analytics" />
            <Feature text="Private Mode" />
          </ul>
          <Link to='/Payments'>
          <button className="mt-6 px-6 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition">
            Subscribe
          </button>
          </Link>
        </div>

        {/* Pro Plan */}
        <div className="bg-neutral-800 p-8 rounded-xl text-center border border-orange-600">
          <h3 className="text-xl font-semibold">
            Pro <span className="text-orange-500 text-sm">(Most Popular)</span>
          </h3>
          <p className="text-4xl font-bold my-4">
            $10 <span className="text-lg font-normal">/Month</span>
          </p>
          <ul className="space-y-3 text-left">
            <Feature text="Private board sharing" />
            <Feature text="10 Gb Storage" />
            <Feature text="Web Analytics (Advanced)" />
            <Feature text="Private Mode" />
          </ul>
          <Link to='/Payments'>
          <button className="mt-6 px-6 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition">
            Subscribe
          </button>
          </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-neutral-800 p-8 rounded-xl text-center border border-neutral-700">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="text-4xl font-bold my-4">
            $200 <span className="text-lg font-normal">/Month</span>
          </p>
          <ul className="space-y-3 text-left">
            <Feature text="Private board sharing" />
            <Feature text="Unlimited Storage" />
            <Feature text="High Performance Network" />
            <Feature text="Private Mode" />
          </ul>
          <Link to='/Payments'>
          <button className="mt-6 px-6 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition">
            Subscribe
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Feature Component
const Feature = ({ text }) => (
  <li className="flex items-center">
    <FiCheckCircle className="text-green-500 mr-2" /> {text}
  </li>
);

export default Pricing;
