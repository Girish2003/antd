import React from 'react';
import { Button } from 'antd';
import CardGrid from '../Components/CardGrid';
import { couponsData } from '../Dummy';
const Coupons = () => {
  const handleEdit = (item) => {
    console.log("Edit", item);
    // Logic to handle edit
  };

  return (
    <div>
<div style={{ display: 'flex',justifyContent:'flex-end',  margin: '20px' }}>
      <Button  type="primary" onClick={() => console.log('Add New')}>Add New</Button>
      </div>      <CardGrid data={couponsData} onEdit={handleEdit} />
    </div>
  );
};

export default Coupons;
