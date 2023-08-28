import { useState } from "react";
import { Search, SongCard } from "./components";
import { Description, Header, Main, Title } from "./App.styles";
import { LOCAL_API_ENDPOINT } from "./constants";
import useApiData from "./hooks/useApiData";
import { FavoritedSong, Song } from "./generalTypes";
import { Filters } from "./components/Filters";
import { getLevelRangeQuery } from "./helpers";

function App() {
  const [searchedValue, setSearchedValue] = useState("");
  const [filters, setFilters] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  const hanldeSearchClick = (value: string) => {
    setSearchedValue(value);
  };

  const onFilterSelect = (filtersSelected: number[]) => {
    setFilters(filtersSelected);
  };

  const { data: songs } = useApiData<Song[]>(
    `${LOCAL_API_ENDPOINT}/songs?&_limit=20&search_like=${searchedValue}${getLevelRangeQuery(
      filters
    )}`
  );

  const { data: favoritedSongs } = useApiData<FavoritedSong[]>(
    `${LOCAL_API_ENDPOINT}/favorites?${count}`
  );

  const getFavorites = () => setCount(count + 1);

  return (
    <>
      <Header>
        <Title>New songs delivered every week</Title>
        <Description>
          Here are the most recent additions to the Yousician App. Start playing
          today!
        </Description>
        <Search onClick={hanldeSearchClick} />
      </Header>
      <Main>
        <Filters onSelect={onFilterSelect} />
        {(songs || []).map((song, index) => {
          const findFavorited = favoritedSongs.find(
            (fav) => fav.songId === song.id
          );
          return (
            <SongCard
              key={song.id}
              {...song}
              isEven={index % 2 === 0}
              favoritedId={!!findFavorited ? findFavorited.id : null}
              getFavorites={getFavorites}
            />
          );
        })}
      </Main>
    </>
  );
}

export default App;
