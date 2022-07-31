import { render, screen } from "@testing-library/react";
import HomeHeader from "./header";
describe("<HomeHeader />", () => {
  test("render", () => {
    render(<HomeHeader placeholder="testing input" />);
    expect(screen.getByPlaceholderText("testing input")).toBeInTheDocument();
  });
});
