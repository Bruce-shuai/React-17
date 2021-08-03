import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface ProductSearchState {
  loading: boolean;
  error: string | null;
  data: any;
  pagination: any;      // 分页信息
}

const initialState:ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null
}

export const searchProduct = createAsyncThunk(
  "productSearch/searchProduct",
  async (paramaters: {
    keywords: string,
    nextPage: number | string,
    pageSize: number | string,
  }, thunkAPI) => {
    // 这里的pageNumber 应该是后端人家已经定好了的
    let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`
    if (paramaters.keywords) {
      url += `&keyword=${paramaters.keywords}`;
    }
    const response = await axios.get(   // {data} 是获取的body的数据， response 取得的是所有的响应数据
      url, {
      headers: {
        "x-icode": "B451FB0CC5BDB4D5"
      }
    });
  return {
    data: response.data,   // body 的数据
    pagination: JSON.parse(response.headers['x-pagination'])  // pagination的数据是从response的header里面获取到的(并且将字符串转化为js对象)
  }; 
  }
  // 自动会给我们提供一个 pending、project、fulfilled。 所以就不用自己再写什么try……catch了
)

// 分页信息竟然是放在header上的

export const productSearchSlice = createSlice({
  name: 'productSearch',    // 命名空间
  initialState,  // 初始化值
  // 这里的reducer 实质是把action和reducer捆绑在一起了，
  // 所以不需要再单独定义一个action了，并且这里的reducer是一个对象，而不是一个过程。每个对象对应着一个action，
  // 同时也对应着这个action的处理函数。 并且也不必再写switch语句了
  reducers: {
  },
  extraReducers: {
    // immer框架  会自动转化为 immutable
    // 这里的每个对象都对应着一个action
    [searchProduct.pending.type]: (state) => {   // 这里是返回一个对象？ 不是！ 返回对象需要在{}外面再加一个()
      // 简单暴力  真香定律
      state.loading = true;
    },
    // action的类型已经被RTK提前定义好了
    [searchProduct.fulfilled.type]: (state, action) => {

      // console.log('action', action); action.type: productDetail/fetchSuccess  
      // action.payload 就是DetailPage页面通过dispatch 发送过来的api获取的数据
      
      state.data = action.payload.data;  
      state.pagination = action.payload.pagination;  
      state.loading = false; 
      state.error = null;
    },
    [searchProduct.rejected.type]: (state, action) => {
      // const ddd = action.payload;   // 这里的action.payload 有什么用呢？
      state.loading = false;
      state.error = action.payload;
    },
  }
})