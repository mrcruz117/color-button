import { render, screen } from "@testing-library/react";
import App from "./App";

test("Button has correct initial color", () => {
  render(<App />);
  screen.getByRole('button', {name: 'Change to blue'})
});
test("Button has correct initial text", () => {});
test("Button turns blue when clicked");
