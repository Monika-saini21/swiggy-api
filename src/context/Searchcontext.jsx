import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [allData, setAllData] = useState([]); 

  const filtered = searchTerm.trim() === ""
    ? []
    : allData.filter((item) =>
        item.info.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, filtered, setAllData }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}