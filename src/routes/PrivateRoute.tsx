import React from "react";
import {
  Route,
  Navigate,
} from "react-router-dom";
import { APICore } from "../services/config";

const PrivateRoute = ({
  component: Component,
  role,
  ...rest
}: any) => {
  const api = new APICore();

  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (api.isUserAuthenticated() === false) {
          return (
            <Navigate to={"/auth/login"} state={{ from: props["location"] }}
            />
          );
        }

        const loggedInUser = api.getLoggedInUser();
        if (role && role.indexOf(loggedInUser.role) === -1) {
          return <Navigate to={{ pathname: "/auth/login" }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
