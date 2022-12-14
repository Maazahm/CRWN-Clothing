import { createContext, useEffect, useState } from "react";

import {
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {}, // {} empty object because it is a map
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({}); // {} empty object because it is a map

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);
  // useEffect(() => {
  //     addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
