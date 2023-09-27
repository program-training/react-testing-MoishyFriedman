import { render, screen } from "@testing-library/react";
import { QR } from "../components/QR/QR";

const details = {
  url: "https://github.com/testing-library/jest-dom#custom-matchers",
  time: new Date().toLocaleString(),
};

describe("QR", () => {
  test("create QR", () => {
    render(<QR url={details.url} time={details.time} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
});
