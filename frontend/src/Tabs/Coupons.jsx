import React, { useState } from 'react';
import { Button } from 'antd';
import CardGrid from '../Components/CardGrid'; 

const Coupons = () => {
  const initialCoupons = [
    {
      name: "Summer Sale",
      description: "Get discounts on summer products.",
      effectiveDate: "2024-06-01",
      expiryDate: "2024-08-31",
      couponCode: "SUMMER2024",
      type: "Percentage",
      discount: 20
    },
    {
      name: "Back to School",
      description: "Special discounts for back-to-school items.",
      effectiveDate: "2024-08-01",
      expiryDate: "2024-09-15",
      couponCode: "BTS2024",
      type: "Fixed Amount",
      discount: 10
    }
  ];

  const [coupons, setCoupons] = useState(initialCoupons);

  const handleEdit = (index, updatedCoupon) => {
    const updatedCoupons = [...coupons];
    updatedCoupons[index] = updatedCoupon;
    setCoupons(updatedCoupons);
  };

  const handleAdd = () => {
    const newCoupon = {
      name: "New Coupon",
      description: "Description",
      effectiveDate: "YYYY-MM-DD",
      expiryDate: "YYYY-MM-DD",
      couponCode: "COUPONCODE",
      type: "Percentage",
      discount: 0
    };
    setCoupons([...coupons, newCoupon]);
  };

  return (
    <div>
      <div style={{ display: 'flex',justifyContent:'flex-end',  margin: '20px' }}>
          <Button type="primary" onClick={handleAdd}>Add New</Button>
      </div>       
      <CardGrid data={coupons} onEdit={handleEdit} />
    </div>
  );
};

export default Coupons;
