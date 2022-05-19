import React from "react"
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"
import Header from "./Header";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<><Header /><Home /></>} />
        </Routes>
      </Router>
    </div>
  )
}


export default App;