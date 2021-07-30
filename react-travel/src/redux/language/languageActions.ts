export const CHANGE_LANGUAGE = 'change_language';
export const ADD_LANGUAGE = 'add_language';


interface changeLanguageAction {
  type: typeof CHANGE_LANGUAGE,       // 这个typeof的用法有点迷啊
  payload: 'zh' | 'en'
}

interface addLanguageAction {
  type: typeof ADD_LANGUAGE,
  payload: {language: string, name: string}
}

// 混合类型 <--> 这里的用法有点迷啊
// ts的用法还得再研究研究啊
export type LanguageActionTypes = changeLanguageAction | addLanguageAction;

export const changeLanguageActionCreator = (language: 'zh' | 'en'):changeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  }
}

export const addLanguageActionCreator = (language: string, name: string):addLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: {language, name}
  }
}