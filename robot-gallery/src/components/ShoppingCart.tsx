import React from 'react';
import style from './ShoppingCart.module.css';

interface Props {

}
interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  // 这里的props是咋出现的？应该是继承于Component
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    return <div className={style.cartContainer}>
      <button className={style.button}
        onClick={(e) => this.setState({
          isOpen: !this.state.isOpen
        })}   // 直接在这里添加事件,放的需要是函数才行
      >
        购物车 2 (件)
      </button>
      <div className={style.cartDropDown}
        // 这里的样式书写还算细节
        style={{display: this.state.isOpen ? "block" : "none"}}
      >
        <ul>
          <li>robot1</li>
          <li>robot2</li>
        </ul>
      </div>
    </div>
  }
}
export default ShoppingCart;