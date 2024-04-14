import React from 'react';
import { Card, Col, Row, Button } from 'antd';

const CardGrid = ({ data, onEdit }) => {
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
            extra={<Button onClick={() => onEdit(item)}>Edit</Button>}
          >
            {Object.entries(item).map(([key, value]) => (
              <div key={key} style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                {key}: {renderValue(value)}
              </div>
            ))}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardGrid;
