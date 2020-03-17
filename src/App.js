import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const cardData = [{
        nama: "inaf",
        job: "analist"
    },
    {
        nama: "Nafisah",
        job: "data scientist"
    },
    {
        nama: "Karimah",
        job: "Koki"
    },
]

function App() {
    return (
      <div className="site-card-wrapper">
      {cardData.map (data=> (
        <Row gutter={16}>
        <Col span={8}>
      <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={data.nama}
      description={data.job}
    />
  </Card>,
      
          </Col>
        </Row> 
          ))}  
      </div>
    );
}
export default App;