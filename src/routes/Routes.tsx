// routes
import {
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
} from "./index";
import { Navigate, Route, Routes } from "react-router-dom";
import {ErrorPage404} from "../modules/ErrosPage/ErrorPage404";
import { ErrorPage401 } from "../modules/ErrosPage/ErrorPage401";
import { APICore } from "../services/config";


interface IRoutesProps { }

const AllRoutes = (props: IRoutesProps) => {
  const api = new APICore()
  const userRole = api.getLoggedInUser();

  return (

    <Routes>

      {publicProtectedFlattenRoutes.map((route, idx) => (
        <Route path={route.path} element={route.element} key={idx} />
      ))}


      <>
        {authProtectedFlattenRoutes.map((route, idx) => {
          return (
            api.isUserAuthenticated() === false ? (
              <>
                <Route
                  path={route.path}

                  element={
                    <Navigate
                      to={{
                        pathname: "/auth/login",
                      }}
                      key={idx}
                      replace={true}
                    />
                  }
                />

              </>
            ) : (
              <>
                {route.role && route.role !== userRole.role ? (
                  <Route
                    path={route.path}

                    element={
                      <Navigate
                        to={{
                          pathname: "/unauthorized",
                        }}
                        replace={true}
                      />
                    }
                  />
                ) : (
                  <>
                    <Route
                      path={route.path}
                      
                      element={
                        <>
                          {route.element}
                        </>
                      
                      }
                      key={idx}
                    />
                  </>

                )}
              </>
            )

          )
        })}
      </>
      <Route path="*" element={<ErrorPage404 />} />
      <Route path="/access-denied" element={<ErrorPage401  />} />
    </Routes>

  );
};

export { AllRoutes };