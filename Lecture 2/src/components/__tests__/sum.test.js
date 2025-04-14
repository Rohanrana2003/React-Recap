import { getByRole, screen, toBeInTheDocument } from "@testing-library/dom";
import { render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test("Sum function and calculate sum function", () => {
//   const result = SubmitEven(3, 4);
//   //Assertion
//   expect(result).toBe(7);
// });

test("should load button in about component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should check text in button contact component", () => {
  render(<Contact />);
  const buttonText = screen.getByText("click");
  expect(buttonText).toBeInTheDocument();
});
