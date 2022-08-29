import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => {
      const { user, token } = payload;
      state.email = user.email;
      state.name = user.name;
      state.token = token;
    },
  },
  extraReducers: builder => {
    // userRegister
    builder.addMatcher(
      userApi.endpoints.register.matchFulfilled,
      (state, { payload }, token) => {
        state.email = payload.user.email;
        state.name = payload.user.name;
        state.token = payload.token;
      }
    );

    builder.addMatcher(
      userApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.email;
        state.name = payload.name;
      }
    );

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

    // userError
    builder.addMatcher(
      userApi.endpoints.currentUser.matchRejected,
      (state, { payload }) => {
        console.log(payload);
        if (payload?.status === 401) {
          return (state.token = initialState.token);
        }
      }
    );
  },
});

export const { loginSuccess, getCurrentSuccess } = userSlice.actions;

export default userSlice.reducer;
