import React from 'react';
import { Button } from 'antd';
import CardGrid from '../Components/CardGrid';
import { rewardsData } from '../Dummy';
const Rewards = () => {
  const handleEdit = (item) => {
    console.log("Edit", item);
    // Logic to handle edit
  };

  return (
    <div>
      <div style={{ display: 'flex',justifyContent:'flex-end',  margin: '20px' }}>
      <Button  type="primary" onClick={() => console.log('Add New')}>Add New</Button>
      </div>
      <CardGrid data={rewardsData} onEdit={handleEdit} />
    </div>
  );
};

export default Rewards;
