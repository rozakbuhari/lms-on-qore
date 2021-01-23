import Router from "next/router";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token && !["/login", "/register"].includes(Router.pathname)) {
      Router.push("/login");
    } else {
      setToken(token);
    }
  }, []);

  return { token };
};

export default useAuth;
