import { ChangeEvent, useState } from "react";
import { Search } from "./components";
import { Description, Header, Title } from "./App.styles";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const hanldeSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

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
    </>
  );
}

export default App;
