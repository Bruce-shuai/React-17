import React, { useContext } from 'react';
import style from './Robot.module.css';
import { appContext, setStateAppContext } from '../AppState';
import { withAddToCart } from './AddToCart';
// 创建一个接口
export interface RobotProps {
  id: number,
  name: string,
  email: string,
  addToCart: (id, name) => void
}

const Robot : React.FC<RobotProps> = ({id, name, email, addToCart}) => {
  const appState = useContext(appContext);
  let appSetState = useContext(setStateAppContext);

  // const addToCart = () => {
  //   if (appSetState) {
  //     appSetState({
  //       ...appState,
  //       shoppingCart: {items: [...appState.shoppingCart.items, {id: id, name: name}]}
  //     })
  //   }
  // }
  return (
    <li className={style.cardContainer}>
      {/* 挺好的，直接使用img标签 但是要注意这里的{}的使用 */}
      {/* 这里的网站通过参数的不同能够获取不同的机器人图片(善于使用模板字符串) */}
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者名称：{appState.username}</p>
      <button
        onClick={() => addToCart(id, name)}    // 这点有些神奇，不能直接写成 addToCart
      >
        加入购物车
      </button>
    </li>
  )
}

export default withAddToCart(Robot);