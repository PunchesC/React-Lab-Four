export interface User{
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface UserRepository{
  name: string;
  repositorylink:string;
  description?: string;
  language:string;
  dateandtime: string;
  urllink: string;

}