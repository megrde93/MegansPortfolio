import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import PastWork from "./components/PastWork";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <div>
      <header class="header">
        <Link to="/"> Home</Link>
        <Link to="/PastWork"> See My Work</Link>
        <Link to="/AboutMe"> About Me</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="PastWork" element={<PastWork />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path=":ProjectName" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
