import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ILoginPayload, UserData } from '../auth.types';
import { authApi } from '../api/authApi';
import {
  RequestStateProperty,
  makeRequestStateProperty,
} from '~/store/helpers';
import { ApiError } from '~/api/common.types';

const SLICE_NAME = 'auth';

interface IS {
  loginRequest: RequestStateProperty<unknown, ApiError>;
  userProfile: UserData | null;
  isAuth: boolean;
  isLoading: boolean;
  error: null | unknown;
}

const initialState: IS = {
  loginRequest: makeRequestStateProperty(),
  userProfile: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const { actions, reducer } = createSlice({
  initialState,
  name: SLICE_NAME,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserData | null>) => {
      state.userProfile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLoginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authLoginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginRequest.data = action.payload;
      })
      .addCase(authLoginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error;
      });
  },
});

interface ILoginThunkPayload {
  authPayload: ILoginPayload;
}

const authLoginThunk = createAsyncThunk(
  `${SLICE_NAME}/loginThunk`,
  async function (
    { authPayload }: ILoginThunkPayload,
    { rejectWithValue, dispatch },
  ) {
    try {
      await authApi.login(authPayload);
      const res = await authApi.userData();
      dispatch(actions.setUserData(res));
      dispatch(actions.setAuth(true));
    } catch (error: unknown) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const authSlice = {
  actions,
  reducer,
  thunks: { authLoginThunk },
} as const;
