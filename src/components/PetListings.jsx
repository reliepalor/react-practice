import React, { useState, useEffect } from 'react';
import PetListing from './PetListing';

const PetListings = ({ isHome = false }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      const apiUrl = isHome ? '/api/pets?_limit=3' : '/api/pets';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setPets(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchPets();
  }, [isHome]);

  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'New Pets' : 'Browse Pets'}
        </h2>

        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <PetListing key={pet.id} pet={pet} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PetListings;
