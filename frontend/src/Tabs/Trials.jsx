import React, { useState } from 'react';
import { Button,Modal } from 'antd';
import CardGrid from '../Components/CardGrid'; 
import TrialsForm from '../Components/TrialsForm';

const Trials = () => {
  const [visible,setVisible]=useState(false)
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
  const handleClose = (newTrial) => {
    setVisible(false); // Close the modal
    if(newTrial.name!==null && newTrial.name!==undefined){
    setTrials([...trials, newTrial])
    }
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

          <Button type="primary" onClick={()=>setVisible(!visible)}>Add New</Button>
      </div>
      <CardGrid data={trials} onEdit={handleEdit} />
      <Modal
        title="Add Item"
        visible={visible}
        onCancel={handleClose}
        footer={null}
      >
        <TrialsForm data={{}} onClose={handleClose} />
      </Modal>
    </div>
  );
};

export default Trials;
