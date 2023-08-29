import { useEffect, useState } from "react";
import { Search, SongCard, Filters, Loading } from "./components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Description, Header, Main, Title } from "./App.styles";
import { LOCAL_API_ENDPOINT } from "./constants";
import useApiData from "./hooks/useApiData";
import { FavoritedSong, Song } from "./generalTypes";
import { getLevelRangeQuery } from "./helpers";

function App() {
  const [searchedValue, setSearchedValue] = useState("");
  const [filters, setFilters] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);
  const [nextPage, setNextPage] = useState(0);
  const [allSongs, setAllSongs] = useState<Song[]>([]);

  const resetFetch = () => {
    setAllSongs([]);
    setNextPage(0);
  };

  const hanldeSearchClick = (value: string) => {
    setSearchedValue(value);
    resetFetch();
  };

  const onFilterSelect = (filtersSelected: number[]) => {
    setFilters(filtersSelected);
    resetFetch();
  };

  const {
    data: songs,
    totalCount,
    isLoading,
  } = useApiData<Song[]>(
    `${LOCAL_API_ENDPOINT}/songs?_start=${nextPage}&_limit=20&search_like=${searchedValue}${getLevelRangeQuery(
      filters
    )}`
  );

  useEffect(() => {
    const newSongs = [...songs, ...allSongs];
    const filteredSongs = newSongs.filter((item, index, arr) => {
      // Find the index of the first occurrence of the same id
      const firstIndex = arr.findIndex((obj) => obj.id === item.id);
      return index === firstIndex;
    });

    setAllSongs(searchedValue ? filteredSongs : songs);
  }, [songs]);

  const { data: favoritedSongs } = useApiData<FavoritedSong[]>(
    `${LOCAL_API_ENDPOINT}/favorites?${count}`
  );

  const getFavorites = () => setCount(count + 1);

  const fetchMoreSongs = () => {
    const next = nextPage + 20;
    setNextPage(next);
  };

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
        <InfiniteScroll
          dataLength={allSongs.length}
          next={fetchMoreSongs}
          hasMore={totalCount > nextPage}
          loader={isLoading ? <Loading /> : null}
        >
          {(allSongs || []).map((song, index) => {
            const findFavorited = (favoritedSongs || []).find(
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
        </InfiniteScroll>
      </Main>
    </>
  );
}

export default App;
