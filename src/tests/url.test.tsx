import { render, screen } from "@testing-library/react";
import { Url } from "../components/Url/url.tsx";

describe("Url", () => {
  test("check input", async () => {
    render(<Url />);
    const inputElement = screen.getByPlaceholderText("enter url");
    expect(inputElement).toBeInTheDocument();
  });
});
