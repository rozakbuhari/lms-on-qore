import Router from "next/router";
import Cookies from "js-cookie";
import { useEffect } from "react";

const useAuth = () => {
  useEffect(() => {
    const token = Cookies.get("token");

    if (!token && !["/login", "/register"].includes(Router.pathname)) {
      Router.push("/login");
    }
  }, []);
};

export default useAuth;
