import { render, screen } from "@testing-library/react";
import { QR } from "../components/QR/QR";
import { userEvent } from "@testing-library/user-event";

const user = userEvent.setup();
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
  test("click to meta data", async () => {
    render(<QR url={details.url} time={details.time} />);
    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);
    const pElement = screen.getByText(/100x100/i);
    expect(pElement).toBeInTheDocument();
  });
});
