import React from 'react';
import { Typography } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
export const UserLayout:React.FC = ({children}) => {
  return <div style={{backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )", minHeight: "100vh"}}>
    {/* 自己补充，后面弄好看点 */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh", flexDirection: "column"}}>
      <Typography.Title level={2} style={{color: '#5390f0'}}>
      <TeamOutlined />携程旅游网
      </Typography.Title>
      {children}
    </div>
  </div>
}