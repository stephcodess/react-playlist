/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home";
import { RoutePaths } from "./routePaths";

export default function Routers() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          key={RoutePaths.BASE_URL}
          path={RoutePaths.BASE_URL}
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
