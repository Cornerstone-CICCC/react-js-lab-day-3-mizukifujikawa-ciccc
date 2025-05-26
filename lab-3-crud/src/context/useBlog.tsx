import { useContext } from "react";
import { BlogContext } from "./BlogContext";

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (!context) throw new Error("useBlog must be used inside BlogContextProvider");
    return context;
  }