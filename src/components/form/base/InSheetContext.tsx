import { createContext, useContext } from "react";

const InSheetContext = createContext(false);
export const InSheetProvider = InSheetContext.Provider;
export const useInSheet = () => useContext(InSheetContext);
