import React, { useState } from "react";

const Payments = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ cardNumber, expiryDate, cvv, name });
    alert("Payment Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black p-8 rounded-2xl shadow-md w-full max-w-md border-4 border-amber-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Card Holder Name */}
          <div>
            <label className="block mb-1 font-medium">Card Holder Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
            />
          </div>
          
          {/* Card Number */}
          <div>
            <label className="block mb-1 font-medium">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              maxLength="16"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="1234 5678 9101 1121"
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block mb-1 font-medium">Expiry Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              maxLength="5"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="MM/YY"
            />
          </div>

          {/* CVV */}
          <div>
            <label className="block mb-1 font-medium">CVV</label>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
              maxLength="3"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="123"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payments;
