import { render, screen } from "@testing-library/react";
import { Url } from "../components/Url/url.tsx";
import { userEvent } from "@testing-library/user-event";

const user = userEvent.setup();

describe("Url", () => {
  test("check input", async () => {
    render(<Url />);
    const inputElement = screen.getByPlaceholderText("enter url");
    expect(inputElement).toBeInTheDocument();
  });
  test("rendering qr on click", async () => {
    render(<Url />);
    const user = userEvent.setup();
    const buttonElement = screen.getByRole("button");
    const inputElement = screen.getByRole("textbox");
    await user.type(
      inputElement,
      "https://drive.google.com/file/d/124lqnR8rv6PIBAls-fs7QwTY35qLPAf7/view"
    );
    await user.click(buttonElement);
    const qr = screen.getByRole("img");
    expect(qr).toBeInTheDocument();
  });
});
