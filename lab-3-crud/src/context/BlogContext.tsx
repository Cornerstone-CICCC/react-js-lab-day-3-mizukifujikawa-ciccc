import { createContext } from "react";
import type { Article } from '../types/article';

export type BlogContextType = {
    state: Article[];
    dispatch: React.Dispatch<any>
};
export const BlogContext = createContext<BlogContextType | undefined>({
    state: [],
    dispatch: () => {}
});
