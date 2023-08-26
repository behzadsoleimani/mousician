import { Props } from "./SongCard.types";
import {
  Container,
  Description,
  SongImage,
  SongInfo,
  Title,
} from "./SongCard.styles";

export const SongCard = (props: Props) => {
  const { images, title, artist, isEven } = props;

  return (
    <Container isEven={isEven}>
      <SongImage src={images} />
      <SongInfo>
        <Title>{title}</Title>
        <Description>{artist}</Description>
      </SongInfo>
    </Container>
  );
};
