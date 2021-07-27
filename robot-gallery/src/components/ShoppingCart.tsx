import React from 'react';
import style from './ShoppingCart.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { appContext } from '../AppState';

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

  // 有一个问题是为什么这里不能在函数前面加一个const呢？
  handleClickBtn = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('e.target', e.target);   // target 描述的是事件发生的元素 
    console.log('e.currentTarget', e.currentTarget); // currentTarget描述的是事件处理绑定的元素
    
    // 这里的用法有点高级了，目前还不怎么会呢！
    if((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }

  render() {
    return <div className={style.cartContainer}>
      {<appContext.Consumer>
          {(value) => 
          <>
          <button className={style.button}
            onClick={(e) => this.handleClickBtn(e)}   
          >
            <FiShoppingCart />
            <span>购物车{value.shoppingCart.items.length}(件)</span>
          </button>
          <div className={style.cartDropDown}
            // 这里的样式书写还算细节
            style={{display: this.state.isOpen ? "block" : "none"}}
          >
            <ul>
              {
                value.shoppingCart.items.map((item) => {
                  return <li>{item.name}</li>   
                })
              }
            </ul>
           </div>
           </>
          }
        </appContext.Consumer>
      }
      
    </div>
  }
}
export default ShoppingCart;