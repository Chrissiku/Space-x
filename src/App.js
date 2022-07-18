/* eslint-disable linebreak-style */
/* eslint-disable quotes */

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import routes from "./assets/routes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} exact path={path} element={element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
