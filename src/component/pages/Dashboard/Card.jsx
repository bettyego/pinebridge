import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow p-6 rounded-lg ">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 text-lg">{value}</p>
    </div>
  );
};

export default Card;
