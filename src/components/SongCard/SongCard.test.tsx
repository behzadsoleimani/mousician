import { act, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { SongCard } from ".";
import renderer from "react-test-renderer";
import FavoriteIcon from "../svgIcons/FavoriteIcon";
import LevelIcon from "../svgIcons/LevelIcon";

const props = {
  images: "image",
  title: "Title",
  artist: "John Doe",
  level: 5,
  id: "123",
  getFavorites: vi.fn(() => null),
  favoritedId: "1",
  isEven: true,
  search: "",
};

const SongCardComponent = () => (
  <ThemeProvider theme={theme}>
    <SongCard {...props} />
  </ThemeProvider>
);
describe("SongCard Component", () => {
  it("renders song card correctly", () => {
    render(<SongCardComponent />);

    const songCardElement = screen.getByTestId("song-card");
    const titleElement = screen.getByText("Title");
    const artistElement = screen.getByText("John Doe");
    const levelIconElement = screen.getByTestId("level-icon-5");

    expect(songCardElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(artistElement).toBeInTheDocument();
    expect(levelIconElement).toBeInTheDocument();
  });

  it("children props", () => {
    const { root } = renderer.create(<SongCardComponent />);
    const container = root.findByProps({ "data-testid": "song-card" });
    const favoriteIcon = root.findByType(FavoriteIcon);
    const levelIcon = root.findByType(LevelIcon);
    expect(container.props.$isEven).toBe(props.isEven);
    expect(favoriteIcon.props.favorited).toBe(!!props.favoritedId);
    expect(levelIcon.props.level).toBe(props.level);
  });

  it("favorite handle onClick", () => {
    const { root } = renderer.create(<SongCardComponent />);
    const favoriteIcon = root.findByType(FavoriteIcon);
    act(() => favoriteIcon.props.onClick());
    expect(favoriteIcon.props.favorited).toBe(!props.favoritedId);
  });
});
