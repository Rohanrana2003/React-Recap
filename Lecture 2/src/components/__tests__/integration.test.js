import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestData.js";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("Should render body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
});
