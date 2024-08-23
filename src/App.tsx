import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Test1 } from "./components/Test1";
import { Test2 } from "./components/Test2";
//@ts-ignore
const Header = React.lazy(() => import("remote/Header"));
//@ts-ignore
const Footer = React.lazy(() => import("remote/Footer"));
//@ts-ignore
const LayoutApp = React.lazy(() => import("remote/LayoutApp"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutApp
              onNavigation={() => {
                console.log(131);
              }}
            />
          }
        />
        <Route path="/test1/" element={<Test1 />} />
        <Route path="/test2/" element={<Test2 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
