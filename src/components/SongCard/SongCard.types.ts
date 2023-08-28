import { Song } from "../../generalTypes";

export interface Props extends Song {
  isEven: boolean;
  favoritedId: string | null;
  getFavorites: () => void;
}
