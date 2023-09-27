import { render, screen } from "@testing-library/react";
import { MetaData } from "../components/MetaData/metaData";

const details = {
  url: "https://github.com/testing-library/jest-dom#custom-matchers",
  size: "100x100",
  time: new Date().toLocaleString(),
};

describe("MetaData", () => {
  test("create meta data text", () => {
    render(
      <MetaData url={details.url} size={details.size} time={details.time} />
    );
    const pElement = screen.getByText(/100x100/i);
    expect(pElement).toBeInTheDocument();
  });
});
