import { useEffect, useState } from "react";
import { Context } from "./Context";
import { LoadingPage } from "../../pages";
import queryString from "query-string";
import axios from "axios";
import { useAuth } from "../auth";

export const Provider = ({ children, appId }) => {
  const { jwt, refreshToken } = useAuth();

  const callEndpoint = async (endpointurl) => {
    let token = await refreshToken();

    return await axios
      .get(endpointurl, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const contextValue = {
    callEndpoint: callEndpoint,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
