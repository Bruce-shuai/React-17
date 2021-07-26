import React, { useRef, useEffect, useState } from 'react';

const RefDemo = () => {
  const btnRef = useRef(null);  // 初始值
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log('useEffect...', count);
  //   // 定时任务
  //   const timer = setInterval(() => {
  //     console.log('setInterval...', count);
  //     setCount(count + 1)
  //   }, 1000)
  //   // 只有在RefDemo 组件被销毁的时候，才会启动clearTimeout...
  //   return () => clearTimeout(timer)
  // })

  useEffect(() => {
    console.log('ref', btnRef.current);  // 获取 Dom 节点
  }, [])
  return <div>
    <button ref={btnRef}>RefDemo</button>
  </div>
}

export default RefDemo;