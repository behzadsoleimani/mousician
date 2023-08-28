import { useState } from "react";
import { Container, Icon, Input } from "./Search.styles";
import { Props } from "./Search.types";

export const Search = (props: Props) => {
  const { onClick } = props;
  const [value, setValue] = useState("");
  return (
    <Container>
      <Input
        value={value}
        placeholder="Search for songs by artist or title"
        onChange={(event) => setValue(event.target.value)}
      />
      <Icon
        src="/assets/icons/search.svg"
        alt="search icon"
        onClick={() => onClick(value)}
      />
    </Container>
  );
};
