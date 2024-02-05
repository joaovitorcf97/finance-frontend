import { api } from '../lib/axios';

interface LoginData {
  email: string;
  password: string;
}

export async function fecthLogin({ email, password }: LoginData) {
  return await api.post('/login', { email, password });
}
