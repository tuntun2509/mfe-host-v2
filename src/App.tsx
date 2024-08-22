import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
//@ts-ignore
const Header = React.lazy(() => import("remote/Header"));
//@ts-ignore
const Footer = React.lazy(() => import("remote/Footer"));

const App = () => (
  <Suspense fallback={<>Loading...</>}>
    <Header />
    <Footer />
  </Suspense>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
