import { useEffect, useState } from "react";
import { Context } from "./Context";
import { LoadingPage } from "../../pages";
import queryString from "query-string";
import axios from "axios";

export const Provider = ({ children, appId }) => {
  const [jwt, setJWT] = useState(null);

  useEffect(() => {
    let { redirect, token } = queryString.parse(window.location.search);

    if (!redirect) redirect = "";

    if (token) {
      axios
        .post(
          "http://localhost:4000/auth/accesstoken",
          { token: token },
          { withCredentials: true }
        )
        .then((response) => {
          console.log("jwt", response.data);
          localStorage.setItem("user", response.data.jwt);
          setJWT(response.data.jwt);

          window.location.replace(`/${redirect}`);
        });
    } else {
      let j = localStorage.getItem("user");

      if (j) {
        setJWT(j);
      } else {
        window.location.replace(`http://localhost:4000?appid=${appId}`);
      }
    }
  }, []);

  const refreshToken = async () => {
    return await axios
      .get("http://localhost:4000/auth/refresh", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setJWT(res.data.jwt);
        return res.data.jwt;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.replace("http://localhost:4000/logout");
  };

  const contextValue = {
    jwt: jwt,
    refreshToken: refreshToken,
    logout: logout,
  };

  return (
    <Context.Provider value={contextValue}>
      {jwt ? children : <LoadingPage />}
    </Context.Provider>
  );
};
