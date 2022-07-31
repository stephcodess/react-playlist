import { act, render, screen } from "@testing-library/react";
import HomeHeader from "../../../components/home/header";
import TrendingSongs from "./trendingSongs";

act(() => {
  describe("<TrendingSongs />", () => {
    test("render Trendingsongs component", () => {
      render(<TrendingSongs />);
    });
  });
});
