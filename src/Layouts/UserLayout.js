import React from "react";
import { Route } from "react-router-dom";
import NavHeader from "../Components/NavHeader";

const UserLayout = ({ children }) => {
  return (
    <div>
      <NavHeader />
      {children}
    </div>
  );
};

const UserLayouttRoute = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <UserLayout>
          <Component {...matchProps} />
        </UserLayout>
      )}
    />
  );
};

export default UserLayouttRoute;
