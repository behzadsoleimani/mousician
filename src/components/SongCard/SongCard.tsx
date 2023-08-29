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
import LevelIcon from "../svgIcons/LevelIcon";
import FavoriteIcon from "../svgIcons/FavoriteIcon";
import { useState } from "react";
import { LOCAL_API_ENDPOINT } from "../../constants";

export const SongCard = (props: Props) => {
  const {
    images,
    title,
    artist,
    level,
    isEven,
    id: songId,
    favoritedId,
    getFavorites,
  } = props;
  const [favorited, setFavorited] = useState(!!favoritedId);

  const handleFavoriteClick = async () => {
    setFavorited(!favorited);
    if (!favorited) {
      await fetch(`${LOCAL_API_ENDPOINT}/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ songId }),
      });
    } else {
      await fetch(`${LOCAL_API_ENDPOINT}/favorites/${favoritedId}`, {
        method: "DELETE",
      });
    }
    getFavorites();
  };

  return (
    <Container $isEven={isEven}>
      <LeftSide>
        <SongImage src={images} />
        <SongInfo>
          <Title>{title}</Title>
          <Description>{artist}</Description>
        </SongInfo>
      </LeftSide>
      <IconWrappers>
        <LevelIcon level={level} />
        <FavoriteIcon favorited={favorited} onClick={handleFavoriteClick} />
      </IconWrappers>
    </Container>
  );
};
