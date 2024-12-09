export interface IUserData {
  username: string;
  email: string;
  address: string;
  password: string;
  phone: string;
}

export interface IFormInput {
  label: string;
  type: string;
  name: keyof IUserData;
}
