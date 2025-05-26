import type { Article } from '../types/article';

export type Action =
  | { type: 'ADD_POST'; payload: Article }
  | { type: 'UPDATE_POST'; payload: Article }
  | { type: 'DELETE_POST'; payload: string };

export const blogReducer = (state: Article[], action: Action): Article[] => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'UPDATE_POST':
      return state.map(post => post.id === action.payload.id ? action.payload : post);
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
}