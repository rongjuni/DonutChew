/* eslint-disable */
import { useState } from "react";
import "./App.css";
import Top from "./components/1_top";
import Middle from "./components/2_middle";
import Bottom from "./components/3_bottom";

function App() {
  let [price, setPrice] = useState(0);

  return (
    <div className="App">
      <Top setPrice={setPrice} />
      <Middle price={price} setPrice={setPrice} />
      <Bottom />
    </div>
  );
}

export default App;
