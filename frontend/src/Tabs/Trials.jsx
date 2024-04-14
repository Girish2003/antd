import React from 'react';
import { Button } from 'antd';

import { trialsData } from '../Dummy';   
import CardGrid from '../Components/CardGrid';

const Trials = () => {
  const handleEdit = (item) => {
    console.log("Edit", item);
    // Logic to handle edit
  };

  return (
    <div>
    <div style={{ display: 'flex',justifyContent:'flex-end',  margin: '20px' }}>
      <Button  type="primary" onClick={() => console.log('Add New')}>Add New</Button>
      </div>      
      <CardGrid data={trialsData} onEdit={handleEdit} />
    </div>
  );
};

export default Trials;
