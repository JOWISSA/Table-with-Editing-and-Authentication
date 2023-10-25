
import { TableState } from './table';

export interface UserState {
  id: number;
  name: string;
  email: string;
}

export interface PostState {
  id: number;
  title: string;
  content: string;
}

export interface RootState {
  user: UserState;
  posts: PostState;
  table: TableState;
}
