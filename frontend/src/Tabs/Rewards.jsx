import React, { useState } from 'react';
import { Button,Modal } from 'antd';
import CardGrid from '../Components/CardGrid'; 
import RewardForm from '../Components/RewardForm';

const Rewards = () => {
  const [visible,setVisible]=useState(false)
  
  const initialRewards = [
    {
      name: "Discount on Next Purchase",
      earn: {
        purchaseAmount: 50,
        points: 10,
        referralPoints: 5
      },
      redeem: {
        redeemPoints: 100,
        cashValue: 10,
        minPoints: 50,
        displayMode: "Percentage"
      }
    },
    {
      name: "Referral Bonus",
      earn: {
        purchaseAmount: 0,
        points: 0,
        referralPoints: 50
      },
      redeem: {
        redeemPoints: 200,
        cashValue: 20,
        minPoints: 100,
        displayMode: "Fixed Amount"
      }
    }
  ];

  const [rewards, setRewards] = useState(initialRewards);

  const handleEdit = (index, updatedReward) => {
    const updatedRewards = [...rewards];
    updatedRewards[index] = updatedReward;
    setRewards(updatedRewards);
  };

  const handleClose = (newReward) => {
    setVisible(false); 
    console.log(newReward);
    if(newReward.name!==null && newReward.name!==undefined ){
    setRewards([...rewards, newReward])
    }
  };


  return (
    <div>
      <div style={{ display: 'flex',justifyContent:'flex-end',  margin: '20px' }}>
          <Button type="primary" onClick={()=>setVisible(!visible)}>Add New</Button>
          
      </div>      
      <CardGrid data={rewards} onEdit={handleEdit} />
      <Modal
        title="Add Item"
        visible={visible}
        onCancel={handleClose}
        footer={null}
      >
        <RewardForm data={{}} onClose={handleClose} />
      </Modal>
    </div>
  );
};

export default Rewards;
