import React, {useContext} from 'react';
import { appContext, setStateAppContext } from '../AppState';
import {RobotProps} from './Robot'


export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  // props 代表的是 ChildComponent 的 props 
  return (props) => {  
    console.log('props', props);
    // return class AddToCart extends React.Component{};
    // 要注意一个问题，钩子函数不能用在非函数组件里
    const appState = useContext(appContext);
    let appSetState = useContext(setStateAppContext);

    const addToCart = (id, name) => {
      if (appSetState) {
        appSetState({
          ...appState,
          shoppingCart: {items: [...appState.shoppingCart.items, {id: id, name: name}]}
        })
      }
    }
    // 返回的这个组件是在原来组件的基础上增加了addToCart属性
    // 为什么要写成{...props} 而 不直接写成 props呢？
    console.log('...props', {...props});
    return <ChildComponent {...props} addToCart={addToCart} />  
  }
}

