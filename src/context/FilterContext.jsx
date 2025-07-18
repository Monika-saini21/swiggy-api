import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider  ({ children })  {
  const [filters, setFilters] = useState([]);

  function toggleFilter (filter) {
    setFilters((prev) =>prev.includes(filter) ? prev.filter((f) => f !== filter): [...prev, filter]
    );
  };
   

  return (
    <FilterContext.Provider value={{ filters, toggleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);
