import React, { useState } from 'react';
import { Button } from 'antd';
import CardGrid from '../Components/CardGrid'; 

const Trials = () => {
  const initialTrials = [
    {
      name: "Free Trial",
      type: "Basic",
      attach: "Online",
      trial: "30 days"
    },
    {
      name: "Extended Trial",
      type: "Premium",
      attach: "In-person",
      trial: "60 days"
    },
    {
      name: "Yearly Trial",
      type: "Enterprise",
      attach: "Hybrid",
      trial: "1 year"
    }
  ];

  const [trials, setTrials] = useState(initialTrials);

  const handleEdit = (index, updatedTrial) => {
    const updatedTrials = [...trials];
    updatedTrials[index] = updatedTrial;
    setTrials(updatedTrials);
  };

  const handleAdd = () => {
    const newTrial = {
      name: "New Trial",
      type: "Type",
      attach: "Attach",
      trial: "30 days"
    };
    setTrials([...trials, newTrial]);
  };

  return (
    <div>
      <div style={{ display: 'flex',justifyContent:'flex-end',  margin: '20px' }}>

          <Button type="primary" onClick={handleAdd}>Add New</Button>
      </div>
      <CardGrid data={trials} onEdit={handleEdit} />
    </div>
  );
};

export default Trials;
