import React from "react";
import { Route } from "react-router-dom";

const UserLayout = ({ children }) => {
  return (
    <div>
      <p>This is Navbar for user</p>
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
