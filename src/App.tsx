import { ChangeEvent, useState } from "react";
import { Search, SongCard } from "./components";
import { Description, Header, Main, Title } from "./App.styles";
import { LOCAL_API_ENDPOINT } from "./constants";
import useApiData from "./hooks/useApiData";
import { Song } from "./generalTypes";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const hanldeSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const { data: songs } = useApiData<Song[]>(
    `${LOCAL_API_ENDPOINT}/songs?songs?level=1&level=2`
  );

  return (
    <>
      <Header>
        <Title>New songs delivered every week</Title>
        <Description>
          Here are the most recent additions to the Yousician App. Start playing
          today!
        </Description>
        <Search value={searchValue} onChange={hanldeSearchChange} />
      </Header>
      <Main>
        {songs.map((item, index) => {
          return <SongCard key={item.id} {...item} isEven={index % 2 === 0} />;
        })}
      </Main>
    </>
  );
}

export default App;
