export interface User {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  verified?: boolean;
  createdAt?: string;
}

export interface UserForm extends User {
  password: string;
  passwordConfirm: string;
}
