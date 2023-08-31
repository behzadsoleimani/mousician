import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const mockOnClick = vi.fn();
const SearchComponent = () => (
  <ThemeProvider theme={theme}>
    <Search onClick={mockOnClick} />
  </ThemeProvider>
);

describe("Search Component", () => {
  it("renders correctly", () => {
    render(<SearchComponent />);

    const inputElement = screen.getByPlaceholderText(
      "Search for songs by artist or title"
    );
    const iconElement = screen.getByAltText("search icon");

    expect(inputElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it("updates value on input change", () => {
    render(<SearchComponent />);

    const inputElement = screen.getByPlaceholderText(
      "Search for songs by artist or title"
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "test value" } });

    expect(inputElement.value).toBe("test value");
  });

  it("calls onClick with correct value on icon click", () => {
    render(<SearchComponent />);

    const inputElement = screen.getByPlaceholderText(
      "Search for songs by artist or title"
    );
    const iconElement = screen.getByAltText("search icon");

    fireEvent.change(inputElement, { target: { value: "test value" } });
    fireEvent.click(iconElement);

    expect(mockOnClick).toHaveBeenCalledWith("test value");
  });
});
