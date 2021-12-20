import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelCaseWithSpaces } from "./App";

test("Button has correct initial color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});

test("Initial conditions", () => {
  render(<App />);

  // button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // checkbox starts unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Disable/Enable button on checkbox click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
  const colorButton = screen.getByRole("button");
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("button turns grey when disabled", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
  const colorButton = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
});

describe("Spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });

  test("works for one inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
