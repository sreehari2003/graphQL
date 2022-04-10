import { gql, useQuery } from "@apollo/client";

//here ! means mandatory
const getCharById = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharId = (id) => {
  const { error, loading, data } = useQuery(getCharById, {
    variables: {
      id,
    },
  });
  return { error, loading, data };
};
