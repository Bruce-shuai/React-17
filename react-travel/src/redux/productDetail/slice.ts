import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductDetailState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState:ProductDetailState = {
  loading: true,
  error: null,
  data: null
}

export const productDetailSlice = createSlice({
  name: 'productDetail',    // 命名空间
  initialState,  // 初始化值
  // 这里的reducer 实质是把action和reducer捆绑在一起了，
  // 所以不需要再单独定义一个action了，并且这里的reducer是一个对象，而不是一个过程。每个对象对应着一个action，
  // 同时也对应着这个action的处理函数。 并且也不必再写switch语句了
  reducers: {
    // immer框架  会自动转化为 immutable
    // 这里的每个对象都对应着一个action
    fetchStart: (state) => {   // 这里是返回一个对象？ 不是！ 返回对象需要在{}外面再加一个()
      // 简单暴力  真香定律
      state.loading = true;
    },
    // action的类型已经被RTK提前定义好了
    fetchSuccess: (state, action) => {

      // console.log('action', action); action.type: productDetail/fetchSuccess  
      // action.payload 就是DetailPage页面通过dispatch 发送过来的api获取的数据
      
      state.data = action.payload;    
      state.loading = false; 
      state.error = null;
    },
    fetchFail: (state, action) => {
      // const ddd = action.payload;   // 这里的action.payload 有什么用呢？
      state.loading = false;
      state.error = action.payload;
    },
  }
})