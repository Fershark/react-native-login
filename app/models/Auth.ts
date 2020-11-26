export default interface Auth {
  token_type: string;
  token: string;
  token_expires: string;
  accounts: {id: string; role_type: number}[];
  id: string;
  first_name: string;
  last_name: string;
}
