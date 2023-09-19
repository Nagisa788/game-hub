import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data: genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <Text>{genre.name}</Text>
      ))}
    </ul>
  );
};

export default GenresList;
