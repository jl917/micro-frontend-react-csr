import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Page from "@/ui/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Page />} />
    </Routes>
  );
}

export default Router;
