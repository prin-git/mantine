import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.scss";

const Page1 = lazy(() => import("./Page1"));
const Page2 = lazy(() => import("./Page2"));

const MainRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<>---</>}>
          <Page1 />
        </Suspense>
      }
    />

    <Route
      path="/home"
      element={
        <Suspense fallback={<>...</>}>
          <Page1 />
        </Suspense>
      }
    />
    <Route
      path="/Page2"
      element={
        <Suspense fallback={<>...</>}>
          <Page2 />
        </Suspense>
      }
    />

    <Route
      path="*"
      element={
        <div className="fall-back">
          <h2>Page Not Found</h2>
          <p>Please clik on 'home' to visit the page</p>
        </div>
      }
    />
  </Routes>
);

export default MainRoutes;
