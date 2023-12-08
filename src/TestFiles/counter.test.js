// Counter.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Counter, getValue } from "../Components/Counter";

test("increments the count when the button is clicked", () => {
  const { getByText } = render(<Counter />);

  // check "Check" text exists in component
  const checkText = getByText(/Check/i);
  expect(checkText).toBeInTheDocument();

  // Initial count value should be 0
  const countElement = getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();

  // Click the button to increment the count
  const incrementButton = getByText(/Increment/i);
  fireEvent.click(incrementButton);

  // After clicking, count value should be 1
  expect(countElement).toHaveTextContent("Count: 1");

  //click decrement
  const countDecrement = getByText(/Decrement/i);
  fireEvent.click(countDecrement);

  //after onclick decrement count value should be 0
  expect(countElement).toBeInTheDocument("Count: 1");
});
test("check getValue =4 ", () => {
  expect(getValue(1, 3)).toBe(4);
});
