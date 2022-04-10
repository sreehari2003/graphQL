import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;

export const useCharacter = () => {
  const { error, loading, data } = useQuery(GET_CHARACTER);

  return { error, loading, data };
};
