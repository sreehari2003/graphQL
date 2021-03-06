import React from "react";
import { useCharId } from "../hooks/useCharId";
import Card from "../components/Card";
import classes from "../styles/charid.module.css";
import { useParams } from "react-router-dom";
const CharID = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharId(id);
  console.log(data);
  if (!id) {
    return (
      <div className="main">
        <h3>Loading</h3>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={classes.main}>
        <h3>Loading</h3>
      </div>
    );
  }
  if (error) {
    return (
      <div className={classes.main}>
        <h3>Something went wrong</h3>
      </div>
    );
  }
  return (
    <div className={classes.main}>
      <Card image={data.character.image} name={data.character.name} />
      <div className="main-name">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
      </div>
    </div>
  );
};

export default CharID;
