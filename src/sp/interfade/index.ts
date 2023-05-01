export interface interFade_User {
  readonly id: number;
  username: string;
  password: string;
  refreshToken: string;
  avatar: string;
  email: string;
  phone: string;
}

export interface interFade_Data_Admin {
  Admin: interFade_User;
  accesstoken: string;
}

export interface interFade_Data {
  Users: interFade_User[];
}
