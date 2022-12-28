import Home from "./pages/Home";
import About from "./pages/About";
import Agents from "./pages/Agents";
import { Routes, Route } from "react-router-dom";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/agents" element={<Agents />} />
      </Routes>
    </>
  );
}

export default MainRouter;
