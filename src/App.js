import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProjectList from "./pages/ProjectList"
import ProjectCreate from "./pages/ProjectCreate"
import ProjectEdit from "./pages/ProjectEdit"
import ProjectShow from "./pages/ProjectShow"
import Login from "./pages/Login"
import Registration from "./pages/Registration"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Registration />} />
        <Route exact path="/dashboard" element={<ProjectList />} />
        <Route path="/create" element={<ProjectCreate />} />
        <Route path="/edit/:id" element={<ProjectEdit />} />
        <Route path="/show/:id" element={<ProjectShow />} />
      </Routes>
    </Router>
  );
}

export default App;