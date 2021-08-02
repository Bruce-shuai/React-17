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
  name: 'productDetail',    // 签名
  initialState,
  reducers: {
    // immer框架  会自动转化为 immutable
    // 好像没有action.type了，所以这里就没第二个参数action
    fetchStart: (state) => {
      // 简单暴力  真香定律
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFail: (state, action: PayloadAction<string | null>) => {
      // const ddd = action.payload;   // 这里的action.payload 有什么用呢？
      state.loading = false;
      state.error = action.payload;
    },
  }
})