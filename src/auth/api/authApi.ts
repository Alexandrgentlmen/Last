import { IAuthPayload } from '../auth.types';
import { KEY_TOKEN } from '~/api/const';
import { axiosInstance, axiosInstanceWithAuth } from '~/api/apiTransport';

export const login = async (payload: IAuthPayload) => {
  const res = await axiosInstance.request({
    method: 'post',
    url: 'auth/login',
    data: payload,
  });
  console.log('login res', res);
  localStorage.setItem(KEY_TOKEN, res.data.token);
};

export const userData = async () => {
  const res = await axiosInstanceWithAuth.request({
    url: 'auth/user',
  });
  console.log('user data', res);
  return res.data;
};

const logout = async () => {
  console.log('logout');
  return axiosInstance.post('/logout');
};

export const authApi = { login, userData, logout } as const;
