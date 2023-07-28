export interface UserData {
  id?: string;
	email: string;
	password?: string;
	name: string;
	lastName?: string;
	role: string;
	status: string;
}

export interface UserDataState {
  user: UserData;
  userView: UserData;
	users: UserData[];
	loading?: boolean
	load?: boolean
}