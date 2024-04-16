import React, { useState } from 'react';
import { Button , Modal} from 'antd';
import CardGrid from '../Components/CardGrid'; 
import CouponsForm from '../Components/CouponsForm';

const Coupons = () => {
  const [visible,setVisible]=useState(false)
 
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
  const handleClose = (newCoupons) => {
    setVisible(false); // Close the modal
    console.log("newCoupons",newCoupons);
    if(newCoupons.name!==null && newCoupons.name!==undefined){
    setCoupons([...coupons, newCoupons])
    console.log(coupons)
    }
  };

  return (
    <div>
      <div style={{ display: 'flex',justifyContent:'flex-end',  margin: '20px' }}>
          <Button type="primary" onClick={()=>setVisible(!visible)}>Add New</Button>
      </div>       
      <CardGrid data={coupons} onEdit={handleEdit} />
      <Modal
        title="Add Item"
        visible={visible}
        onCancel={handleClose}
        footer={null}
      >
        <CouponsForm data={{}} onClose={handleClose} />
      </Modal>
    </div>
  );
};

export default Coupons;
