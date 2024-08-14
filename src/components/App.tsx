import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";

import { Home } from "../pages/Home/Home";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
