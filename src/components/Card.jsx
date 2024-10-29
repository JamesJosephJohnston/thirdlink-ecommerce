import React from 'react';

const Card = ({ name, link, image, description, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-contain object-center" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        {/* <p className="text-lg font-bold text-gray-800 mb-4">{price}</p> */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 font-medium"
        >
          Buy on Amazon
        </a>
      </div>
    </div>
  );
};

export default Card;