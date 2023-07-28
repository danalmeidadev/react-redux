import React, { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/Default.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AllRoutes } from "./routes/Routes";
import { configureStore } from "./store";


const App = () => {
  return (
    <>
      <Provider store={configureStore({})}>
          <BrowserRouter basename={"/"}>
            <Suspense>
            <AllRoutes />
            </Suspense>
            <ToastContainer position="top-right" />
          </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
