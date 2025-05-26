import { useReducer, type ReactNode } from 'react'
import { BlogContext } from './BlogContext'
import { blogReducer } from '../reducers/blogReducer';

export function BlogProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(blogReducer, []);

    return (
      <BlogContext.Provider value={{ state, dispatch }}>
        {children}
      </BlogContext.Provider>
    );
  }