import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Filters } from "./Filters";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { LEVELS } from "../../constants";

// Mock the onSelect function
const mockOnSelect = vi.fn();

const FiltersComponent = () => (
  <ThemeProvider theme={theme}>
    <Filters onSelect={mockOnSelect} />
  </ThemeProvider>
);
describe("Filters Component", () => {
  it("renders label correctly", () => {
    render(<FiltersComponent />);

    const labelElement = screen.getByTestId("label");

    expect(labelElement).toBeInTheDocument();
    expect(labelElement.textContent).toEqual("Filter by level");
    const filterIcon = screen.getByTestId("filter");
    fireEvent.click(filterIcon);

    expect(labelElement.textContent).toEqual("Hide filter");
  });

  it("filters amount", () => {
    render(<FiltersComponent />);

    const filterIcon = screen.getByTestId("filter");
    fireEvent.click(filterIcon);
    const filtersList = screen.getByTestId("list");
    expect(filtersList.children.length).toBe(LEVELS);
  });
});
