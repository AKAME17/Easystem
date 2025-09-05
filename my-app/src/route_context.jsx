import React, { createContext, useContext, useEffect, useState } from "react";

export const route_context = createContext();

const RouteContextProvider = (props) => {
  const [loadingStatus, setLoadingStatus] = useState("idle");

  const updateRouteStatus = (value) => {
    setLoadingStatus(value);
  };

  return (
    <route_context.Provider value={{
      updateRouteStatus,
      loadingStatus}}>
      {props.children}
    </route_context.Provider>
  );
};

export const useRouteStatus = () => useContext(route_context);

export default RouteContextProvider;
