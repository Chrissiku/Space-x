/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../Redux/ConfigureStore";
import Missions from "../components/Missions/Missions";

it("Missions render correctly", () => {
  const Tree = TestRenderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>
  );
  expect(Tree).toMatchSnapshot();
});
