import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

const initialState = {
  name: '',
  email: '',
  token: '',
  isRegister: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // loginSuccess: (state, { payload }) => {
    //   const { user, token } = payload;
    //   state.email = user.email;
    //   state.name = user.name;
    //   state.token = token;
    // },
  },
  extraReducers: builder => {
    // userRegister
    builder.addMatcher(userApi.endpoints.register.matchFulfilled, state => {
      state.isRegister = true;
    });

    // userSuccess
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }, token) => {
        state.email = payload.user.email;
        state.name = payload.user.name;
        state.token = payload.token;
      }
    );

    // userLogout
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, state => {
      state.email = initialState.email;
      state.name = initialState.name;
      state.token = initialState.token;
      state.isRegister = initialState.isRegister;
    });
  },
});

export const { loginSuccess, getCurrentSuccess } = userSlice.actions;

export default userSlice.reducer;
