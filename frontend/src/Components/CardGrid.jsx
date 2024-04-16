import React ,{useEffect, useState} from 'react';
import { Card, Col, Row, Button, Modal } from 'antd';
import RewardForm from './RewardForm';
import TrialsForm from './TrialsForm';
import CouponsForm from './CouponsForm';

const CardGrid = ({ data, onEdit }) => {
  const [visible,setVisible]=useState(false)
  const [dataItem,setDataItem]=useState({});
  const handleEdit=(item)=>{
    setVisible(!visible)
    setDataItem(item)
    onEdit(item)
  }
  const handleClose = (item) => {
    setVisible(!visible); // Close the modal
    
  };
  const renderValue = (value) => {
    if (typeof value === 'object') {
      return Object.entries(value).map(([subKey, subValue]) => (
        <p key={subKey} style={{ marginBottom: '4px', fontWeight: 'normal' }}>
          {subKey}: {subValue}
        </p>
      ));
    }
    return <span style={{ fontWeight: 'normal' }}>{value}</span>;
  };

  return (
    <Row gutter={[16, 16]}>
      {data.map((item, index) => (
        <Col span={8} key={index}>
          <Card
            title={item.name}
            extra={<Button onClick={()=>handleEdit(item)}>Edit</Button>
          }
          >
            {Object.entries(item).map(([key, value]) => (
              <div key={key} style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                {key.charAt(0).toUpperCase()+key.slice(1)}: {renderValue(value)}
              </div>
            ))}
          </Card>
        </Col>
      ))}
      <Modal
        title="Edit Item"
        visible={visible}
        onCancel={handleClose}
        footer={null}
      >
        {dataItem.redeem!==null && dataItem.redeem!==undefined ?<RewardForm data={dataItem} onClose={handleClose} />:
        dataItem.trial!==null && dataItem.trial!==undefined?<TrialsForm data={dataItem} onClose={handleClose}/>:
        <CouponsForm data={dataItem} onClose={handleClose}/>}
      </Modal>
    </Row>
  );
};

export default CardGrid;
