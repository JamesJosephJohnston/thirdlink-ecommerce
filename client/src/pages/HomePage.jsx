import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import supplementsData from '../data/supplements.json';

const HomePage = () => {
  const [supplements, setSupplements] = useState([]);

  useEffect(() => {
    setSupplements(supplementsData);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Top 10 Supplements for Winter</h2>
      <p className="mb-4">
        Winter is here, and with it comes the struggle to stay healthy, energetic, and resilient. Many people suffer unnecessarily during these colder months simply because they aren't giving their bodies the right nutritional support. Don't let the lack of proper supplements leave you tired, rundown, and vulnerable to colds.
      </p>
      <p className="mb-4">
        Imagine feeling stronger, more energetic, and avoiding those pesky winter colds. With the right supplements, you can boost your immunity, support your overall wellness, and keep your energy levels high, even on the dreariest days. Take control of your winter health and see the benefits of a body that has what it needs to thrive.
      </p>
      <p className="mb-8">
        Our top selection of winter supplements is curated to keep you in peak health. From Vitamin D3 to boost your mood, to Elderberry for immune support, and Omega-3s for overall wellness—each product is carefully chosen to give your body the exact boost it needs during winter. Stay healthy, stay happy, and enjoy the winter season at your best!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {supplements.map((supplement, index) => (
          <Card
            key={index}
            name={supplement.name}
            link={supplement.link}
            image={supplement.image}
            description={supplement.description}
            price={supplement.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;