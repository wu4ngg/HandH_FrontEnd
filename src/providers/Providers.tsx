import { createContext } from "react";

export const ImageModelContext = createContext({
  isOpen: false,
  images: [],
  currentIndex: 0,
});
