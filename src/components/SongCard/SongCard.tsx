import { Props } from "./SongCard.types";
import {
  Container,
  Description,
  IconWrappers,
  LeftSide,
  SongImage,
  SongInfo,
  Title,
} from "./SongCard.styles";
import FilterIcon from "../icons/FilterIcon";
import FavoriteIcon from "../icons/FavoriteIcon";
import { useState } from "react";

export const SongCard = (props: Props) => {
  const { images, title, artist, level, isEven } = props;
  const [favorited, setFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setFavorited(!favorited);
  };

  return (
    <Container isEven={isEven}>
      <LeftSide>
        <SongImage src={images} />
        <SongInfo>
          <Title>{title}</Title>
          <Description>{artist}</Description>
        </SongInfo>
      </LeftSide>
      <IconWrappers>
        <FilterIcon level={level} />
        <FavoriteIcon favorited={favorited} onClick={handleFavoriteClick} />
      </IconWrappers>
    </Container>
  );
};
