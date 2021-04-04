import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import JumboTron from "./Components/JumboTron";
import SearchBar from "./Components/SearchBar";
import EmployeeTable from "./Components/EmployeeTable";
import "./App.css";

function App() {
  const [search, setSearchState] = useState("");
  return (
    <>
      <NavBar />
      <JumboTron>
        <SearchBar search={search} setSearch={setSearchState} />
      </JumboTron>
      <EmployeeTable search={search} />
    </>
  );
}

export default App;
