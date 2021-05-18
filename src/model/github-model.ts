export interface User{
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface UserRepository{
  name: string;
  html_url:string;
  description?: string;
  language:string;
  push_at: string;
}