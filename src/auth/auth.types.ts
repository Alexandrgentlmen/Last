export interface ILoginPayload {
  email: string;
  password: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  created_at: Date;
  updated_at: Date;
}
