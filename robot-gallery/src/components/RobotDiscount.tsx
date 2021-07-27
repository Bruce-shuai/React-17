import React, { useContext } from 'react';
import style from './Robot.module.css';
import { appContext, setStateAppContext } from '../AppState';
import { withAddToCart } from './AddToCart'

// 创建一个接口
interface RobotProps {
  id: number,
  name: string,
  email: string,
  addToCart: (id, name) => void
}

const RobotDiscount : React.FC<RobotProps> = ({id, name, email, addToCart}) => {
  const appState = useContext(appContext);
  let appSetState = useContext(setStateAppContext);

  return (
    <li className={style.cardContainer}>
      {/* 挺好的，直接使用img标签 但是要注意这里的{}的使用 */}
      {/* 这里的网站通过参数的不同能够获取不同的机器人图片(善于使用模板字符串) */}
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品</h2>
      <p>{email}</p>
      <p>作者名称：{appState.username}</p>
      <button
        onClick={() => addToCart(id, name)}
      >
        加入购物车
      </button>
    </li>
  )
}

export default withAddToCart(RobotDiscount);