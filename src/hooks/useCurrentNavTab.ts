import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { navigation } from "config/navigation";

export const useCurrentNavTab = () => {
  const location = useLocation();

  const obj = useMemo(
    () => navigation.find((item) => item.href === location.pathname),
    [location.pathname]
  );

  return obj;
};
