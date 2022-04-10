import React from "react";
import "./list.css";
import Card from "./Card";
import { useCharacter } from "../hooks/useCharacter";
//graphql Schema

const List = () => {
  //if we use useQuery hook
  //eg const obj = useQuery(GET_CHAR);
  //we get obj.error,obj.loading,obj.data
  //ie loader ,error,data
  const { error, loading, data } = useCharacter();
  const elm = data?.characters.results;

  if (loading) {
    return (
      <div className="main">
        <h3>Loading....</h3>;
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
