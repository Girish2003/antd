import React, { useState } from 'react';
import { Button } from 'antd';
import CardGrid from '../Components/CardGrid'; 

const Rewards = () => {
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

  const handleAdd = () => {
    const newReward = {
      name: "New Reward",
      earn: {
        purchaseAmount: 0,
        points: 0,
        referralPoints: 0
      },
      redeem: {
        redeemPoints: 0,
        cashValue: 0,
        minPoints: 0,
        displayMode: "Percentage"
      }
    };
    setRewards([...rewards, newReward]);
  };

  return (
    <div>
      <div style={{ display: 'flex',justifyContent:'flex-end',  margin: '20px' }}>
          <Button type="primary" onClick={handleAdd}>Add New</Button>
      </div>      
      <CardGrid data={rewards} onEdit={handleEdit} />
    </div>
  );
};

export default Rewards;
