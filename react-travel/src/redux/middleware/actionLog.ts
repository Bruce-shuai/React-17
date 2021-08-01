import { Middleware } from 'redux';

// 自定义一个中间件 根据公式来

export const actionLog : Middleware = (store) => (next) => (action) => {
  console.log('state 当前', store.getState());
  console.log('fire action', action);
  // 分发action，让reducer对state 进行更改 (next 其实就是传入的dispatch函数)
  next(action);
  console.log('state 更新', store.getState());
}