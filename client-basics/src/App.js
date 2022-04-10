import "./App.css";
import Characters from "./Pages/Characters";
import CharID from "./Pages/CharID";
import { Routes as Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <div className="head">
          <h1 className="h1">Rick and Morty</h1>
        </div>
        <Switch>
          <Route strict exact path="/" element={<Characters />} />
          <Route strict exact path="/:id" element={<CharID />} />
        </Switch>
      </div>
    </>
  );
}

export default App;
