import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { name, city } from "../data/data";
import Home from "../components/Home";

test("renders a div with the correct ID", () => {
  const { container } = render(<Home />);

  expect(container.querySelector("#home")).toBeInTheDocument();
});

test("renders the h1 with the text 'Your Name is a Web Developer from Your City'", () => {
  render(<Home />);
  const h1 = screen.queryByText(`Your ${name} is a Web Developer from Your ${city}`);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("the h1 has an inline style attribute with a color of 'firebrick'", () => {
  render(<Home />);
  const h1 = screen.queryByText(`Your ${name} is a Web Developer from Your ${city}`);
  expect(h1).toHaveStyle({ color: "firebrick" });
});
