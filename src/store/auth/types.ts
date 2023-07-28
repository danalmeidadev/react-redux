
export interface UserPropsData {
  email: string;
  name: string;
  lastName: string;
  password: string;
  role: string;
  token: string;
}

export interface AuthState {
  auth: UserPropsData,
  loading: boolean,
  userLoggedIn: boolean,
}