import React, { useState } from 'react';

interface State {
  username: string;
  shoppingCart: { items: {id: number, name: string}[] }  // 这里的接口定义很有意思
}

const defaultValue:State = {
  username: '帅得歪瓜裂枣',
  shoppingCart: { items:[] }
}
export const appContext = React.createContext(defaultValue);
export const setStateAppContext = React.createContext<React.Dispatch<React.SetStateAction<State>> | undefined>(undefined)
const AppContext: React.FC = (props) => {
  const [state, setState] = useState(defaultValue)
  return <appContext.Provider value={state}>
    <setStateAppContext.Provider value={setState}>
      {props.children}   {/* props.children 用法不太清楚啊！ */}
    </setStateAppContext.Provider>
  </appContext.Provider>
}

export default AppContext;