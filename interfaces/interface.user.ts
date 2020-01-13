export interface UserInfo {
  name: string;
  username: string;
  points: number;
}

export interface UserStore {
  userInfo: UserInfo | undefined;
  token: string;
  setUserInfo(userInfo: UserInfo | undefined): void;
  setToken(token: string): void;
  isAuthenticated(): boolean;
}
