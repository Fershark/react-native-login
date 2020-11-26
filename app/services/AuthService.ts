import http from './HttpCommon';
import Auth from '../models/Auth';

export interface AuthLoginParams {
  email: string;
  password: string;
}

class AuthService {
  async login(params: AuthLoginParams): Promise<Auth> {
    const response = await http.post('v2/auth', params);
    return response.data;
  }
}

export default new AuthService();
