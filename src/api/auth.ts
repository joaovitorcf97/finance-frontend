import { api } from '../lib/axios';

interface LoginData {
  email: string;
  password: string;
}

export async function fecthLogin({ email, password }: LoginData) {
  return await api.post('/login', { email, password });
}

export async function fecthUserProfile(token: string) {
  return await api.get('/user/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
}
