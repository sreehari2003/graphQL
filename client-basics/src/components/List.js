import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./list.css";
import Card from "./Card";
//graphql Schema
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

const List = () => {
  //if we use useQuery hook
  //eg const obj = useQuery(GET_CHAR);
  //we get obj.error,obj.loading,obj.data
  //ie loader ,error,data

  const { error, loading, data } = useQuery(GET_CHARACTER);
  const elm = data?.characters.results;
  console.log(elm);

  if (loading) {
    return (
      <div className="main">
        <h3>Loading</h3>;
      </div>
    );
  }
  if (error) {
    return (
      <div className="main">
        <h2>Something went wrong</h2>
      </div>
    );
  }
  return (
    <div className="main">
      {elm.map((el) => (
        <Card image={el.image} name={el.name} />
      ))}
    </div>
  );
};

export default List;
