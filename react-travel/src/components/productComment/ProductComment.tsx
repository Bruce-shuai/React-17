import React from 'react';
import { Comment, Tooltip, List } from 'antd'

interface PropsType {
  // 这里的写法是非常有特点的 需注意！！ 因为data只是Props对象的一个属性
  data: {
    author: string,
    avatar: string,
    content: string | null | JSX.Element,
    createDate: string
  }[]
}
// 这里的Props data属性是怎么回事？
export const ProductComment:React.FC<PropsType> = ({data}) => {
  
  // const data = props.commentMockData;
  // console.log('data', data);
  
  return <>
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <li>
        <Comment
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.createDate}
        />
      </li>
    )}
  />
  </>
}