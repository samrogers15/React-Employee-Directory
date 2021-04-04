import React, { useState } from "react";
import JumboTron from "./Components/JumboTron";
import SearchBar from "./Components/SearchBar";
import EmployeeTable from "./Components/EmployeeTable";
import "./App.css";

function App() {
  const [search, setSearchState] = useState("");

  return (
    <>
      <div id='container'>
        <JumboTron />
        <SearchBar search={search} setSearchState={setSearchState} />
        <EmployeeTable search={search} />
      </div>
    </>
  );
}

export default App;
