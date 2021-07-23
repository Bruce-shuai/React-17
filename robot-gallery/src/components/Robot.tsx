import React from 'react';

// 创建一个接口
interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot : React.FC<RobotProps> = ({id, name, email}) => {
  return <li>
    {/* 挺好的，直接使用img标签 但是要注意这里的{}的使用 */}
    {/* 这里的网站通过参数的不同能够获取不同的机器人图片(善于使用模板字符串) */}
    <img src={`https://robohash.org/${id}`} alt="robot" />
    <h2>{name}</h2>
    <p>{email}</p>
  </li>
}

export default Robot;