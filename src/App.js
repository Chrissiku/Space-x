/* eslint-disable linebreak-style */
/* eslint-disable quotes */

import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import routes from "./assets/routes";

const MainPage = () => (
  <>
    <Header />
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} exact="true" path={path} element={element} />
      ))}
    </Routes>
  </>
);

function App() {
  return (
    <>
      <Routes>
        <Route exact="true" path="/" element={<HomePage />} />
        <Route exact="true" path="main/*" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
