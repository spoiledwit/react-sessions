import React, { useState, useEffect } from "react";

const App2 = () => {
  const [properties, setProperties] = useState([]);

  console.log(properties);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = () => {
    // API call to fetch properties
    const data = [
      {
        id: 1,
        name: "Property 1",
        location: "Location 1",
      },
      {
        id: 2,
        name: "Property 2",
        location: "Location 2",
      },
    ];

    setProperties(data);
  };

  return (
    <div>
        <h1>
            Properties
        </h1>
        {properties.map((property)=>{
            return (
                <div key={property.id}>
                    <h2>{property.name}</h2>
                    <p>{property.location}</p>
                </div>
            )
        })}
    </div>
  );
};

export default App2;
