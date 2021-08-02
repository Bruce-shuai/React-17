import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`, {
      headers: {
        "x-icode": "B451FB0CC5BDB4D5"
      }
    });
  return data; 
  }
  // 自动会给我们提供一个 pending、project、fulfilled。 所以就不用自己再写什么try……catch了
)



export const productDetailSlice = createSlice({
  name: 'productDetail',    // 命名空间
  initialState,  // 初始化值
  // 这里的reducer 实质是把action和reducer捆绑在一起了，
  // 所以不需要再单独定义一个action了，并且这里的reducer是一个对象，而不是一个过程。每个对象对应着一个action，
  // 同时也对应着这个action的处理函数。 并且也不必再写switch语句了
  reducers: {
  },
  extraReducers: {
    // immer框架  会自动转化为 immutable
    // 这里的每个对象都对应着一个action
    [getProductDetail.pending.type]: (state) => {   // 这里是返回一个对象？ 不是！ 返回对象需要在{}外面再加一个()
      // 简单暴力  真香定律
      state.loading = true;
    },
    // action的类型已经被RTK提前定义好了
    [getProductDetail.fulfilled.type]: (state, action) => {

      // console.log('action', action); action.type: productDetail/fetchSuccess  
      // action.payload 就是DetailPage页面通过dispatch 发送过来的api获取的数据
      
      state.data = action.payload;    
      state.loading = false; 
      state.error = null;
    },
    [getProductDetail.rejected.type]: (state, action) => {
      // const ddd = action.payload;   // 这里的action.payload 有什么用呢？
      state.loading = false;
      state.error = action.payload;
    },
  }
})