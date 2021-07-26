import React, { useState, useEffect } from 'react';

interface Props {
  id: number
}

const FriendStatus:React.FC<Props> = (props) => {

  useEffect(() => {
    console.log(`好友${props.id}在线状态`);
    return () => {
      console.log(`好友${props.id} 已下线`);
    }
  })
  return (
    <div>FriendStatus</div>
  )
}
export default FriendStatus;