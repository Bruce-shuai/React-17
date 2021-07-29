import React from 'react';
// RouteComponentProps 用于给组件props定义match的接口
import { RouteComponentProps } from 'react-router-dom';

// 给match定义一下参数的类型
interface MatchParams {
  touristRouteId: string
}

export const DetailPage:React.FC<RouteComponentProps<MatchParams>> = (props) => {
  return <h1>旅游路线详情页面，路线ID: {props.match.params.touristRouteId}</h1>
}