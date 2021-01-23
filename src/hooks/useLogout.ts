import Router from "next/router";
import Cookies from "js-cookie";

const useLogout = () => {
  return async () => {
    Cookies.remove("token");
    Router.replace("/login")
  };
};

export default useLogout;
