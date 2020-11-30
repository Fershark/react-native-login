import Auth from '../models/Auth';

export interface AuthLoginParams {
  email: string;
  password: string;
}

class AuthService {
  async login(params: AuthLoginParams): Promise<Auth> {
    if (params.email === 'test@gmail.com') {
      return {
        id: 'testId',
        first_name: 'Name',
        last_name: 'LastName',
        token_type: '',
        token: '',
        token_expires: '',
        accounts: [],
      };
    } else {
      throw new Error('Authentication error');
    }
  }
}

export default new AuthService();
