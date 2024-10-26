import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-8 py-6">
      <div className="container mx-auto px-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Winter Supplements UK. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;