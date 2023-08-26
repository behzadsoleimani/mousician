import { Container, Icon, Input } from "./Search.styles";
import { Props } from "./Search.types";

export const Search = (props: Props) => {
  const { value, onChange } = props;
  return (
    <Container>
      <Input
        value={value}
        placeholder="Search for songs by artist or title"
        onChange={onChange}
      />
      <Icon src="/assets/icons/search.svg" alt="search icon" />
    </Container>
  );
};
