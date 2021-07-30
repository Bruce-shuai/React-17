import i18n from 'i18next';

interface defaultValueType {
  language: 'zh' | 'en';    // 这里的ts类型定义就用得非常好，限定了只能在这两种字符串中选择一个
  languageList: {name: string, language: string}[]
}

const defaultValue:defaultValueType = {
  language: 'zh',       // 默认是中文
  languageList: [
    {name: '中文', language: 'zh'},
    {name: 'English', language: 'en'}
  ]
}

export default (state = defaultValue, action) => {    // 直接用匿名函数就行
  let newState = state;
  switch(action.type) {
    case 'add_language':
      newState = {...state, languageList:[...state.languageList, action.payload]}
      console.log('newState', newState);
      
      return newState;
    case 'change_language':
      i18n.changeLanguage(action.payload);
      newState = {...state, language: action.payload}
      return newState;
    default:
      return newState;
  }
}