import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useFoundPath = () => {
  const path = usePathname();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (path === "/register") {
      console.log("we in register page");
      setActive(true);
    }
  }, []);
  console.log(active, "active in useFound");
  return { active };
};
