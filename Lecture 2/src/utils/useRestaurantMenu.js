import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestarantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setMenuData(data.data);
  };

  return menuData;
};

export default useRestarantMenu;
