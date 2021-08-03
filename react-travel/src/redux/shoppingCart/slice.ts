import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface ShoppingCartState {
  loading: boolean;
  error: string | null;
  items: any[];
}

const initialState:ShoppingCartState = {
  loading: false,
  error: null,
  items: [],
}
// 展示购物车
export const getShoppingCart = createAsyncThunk(
  'shoppingCart/getShoppingCart',
  async (jwt: string, thunkAPI) => {
    const {data} = await axios.get(`http://123.56.149.216:8080/api/shoppingCart`, {
     headers: {    // 这样才是定义header的信息
      Authorization: `bearer ${jwt}`
     }
    });  
    return data.shoppingCartItems;
  }
)

// 添加购物车
export const addShoppingCart = createAsyncThunk(
  'shoppingCart/addShoppingCart',
  async (parameters: {jwt: string, touristRouteId: string}, thunkAPI) => {
    // 添加信息用post请求
    const {data} = await axios.post(`http://123.56.149.216:8080/api/shoppingCart/items`, {
      // 这里又为啥变成body了呢？
      touristRouteId: parameters.touristRouteId
    },{
    headers: {    // 这样才是定义header的信息
      Authorization: `bearer ${parameters.jwt}`
     }
    });  
    return data.shoppingCartItems;
  }
)

// 清空购物车
export const clearShoppingCart = createAsyncThunk(
  'shoppingCart/clearShoppingCart',
  async (paramaters: {jwt: string; itemIds: number[]}, thunkAPI) => {
    // 注意，这里是一个delete请求
    return await axios.delete(`http://123.56.149.216:8080/api/shoppingCart/items/(${paramaters.itemIds.join(',')})`, {
     headers: {    // 这样才是定义header的信息
      Authorization: `bearer ${paramaters.jwt}`
     }
    });  
  }
)
export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,  
  reducers: {
  },
  extraReducers: {
    [getShoppingCart.pending.type]: (state) => {   
      state.loading = true;
    },
    [getShoppingCart.fulfilled.type]: (state, action) => {
      state.items = action.payload;    
      state.loading = false; 
      state.error = null;
    },
    [getShoppingCart.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addShoppingCart.pending.type]: (state) => {   
      state.loading = true;
    },
    [addShoppingCart.fulfilled.type]: (state, action) => {
      state.items = action.payload;    
      state.loading = false; 
      state.error = null;
    },
    [addShoppingCart.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [clearShoppingCart.pending.type]: (state) => {   
      state.loading = true;
    },
    [clearShoppingCart.fulfilled.type]: (state) => {
      state.items = [];    
      state.loading = false; 
      state.error = null;
    },
    [clearShoppingCart.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
})