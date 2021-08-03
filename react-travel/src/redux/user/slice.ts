import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface UserState {
  loading: boolean;
  error: string | null;
  token: string | null;
}

const initialState:UserState = {
  loading: false,
  error: null,
  token: null,
}

export const signIn = createAsyncThunk(
  'user/signIn',
  async (paramaters: {
    email: string,       // 这些不该是body数据吗？
    password: string
  }, thunkAPI) => {
    const {data} = await axios.post(`http://123.56.149.216:8080/auth/login`, {
      email: paramaters.email,    // 这里不应该传的是header里的数据吗？为啥变成传递的是body里的数据了？该如何来区分呢？
      // axios get 和 post 的内容有点迷惑 值得查一查！！
      password: paramaters.password    
    });   // 注意，这里是post请求
    return data.token;
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,  
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {   
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.token = action.payload;    
      state.loading = false; 
      state.error = null;
    },
    [signIn.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
})