import React from "react";
import {  Route, RouteProps } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Home = React.lazy(() => import("../modules/Home"));
const Login = React.lazy(() => import("../modules/Auth/Login"));
const Users = React.lazy(() => import("../modules/Users"));
const Finance = React.lazy(() => import("../modules/Finance"));
const ErrorPage403 = React.lazy(() => import("../modules/ErrosPage/ErrorPage403"));

export interface RoutesProps {
  path: any;
  name?: string;
  element?: RouteProps["element"];
  route?: any;
  exact?: any;
  icon?: string;
  header?: string;
  role?: string;
  children?: RoutesProps[];
}

const usersAppRoutes: RoutesProps = {
  path: "/users",
  route: PrivateRoute,
  role: "admin",
  icon: "ri-message-2-line",
  element: <Users />,
};
const homeAppRoutes: RoutesProps = {
  path: "/home",
  route: PrivateRoute,
  role: "admin",
  icon: "ri-message-2-line",
  element: <Home />,
};
const financeAppRoutes: RoutesProps = {
  path: "/financeiro",
  route: PrivateRoute,
  role: "admin",
  icon: "ri-message-2-line",
  element: <Finance />,
};
const errorAppRoutes: RoutesProps = {
  path: "/unauthorized",
  name: "Chat",
  route: Route,
  icon: "ri-message-2-line",
  element: <ErrorPage403 />,
};

const authRoutes: RoutesProps[] = [
  {
    path: "auth/login",
    element: <Login />,
    route: Route,
  },
];

const appRoutes = [
  errorAppRoutes,
  usersAppRoutes,
  homeAppRoutes,
  financeAppRoutes
];

const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];

  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);
  });
  return flatRoutes;
};

const authProtectedRoutes = [
  ...appRoutes,
 
];
const publicRoutes = [...authRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
};
