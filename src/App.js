import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CsvFileReader from "./Components/CsvFileReader";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<CsvFileReader/>}/>
      </Routes>
    </Router>
  );
};

export default App;
