import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import PastWork from "./components/PastWork";
import ProjectPage from "./components/ProjectPage";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <header class="header">
        <Link to="/"> Home</Link>
        <Link to="/PastWork"> See My Work</Link>
        <Link to="/AboutMe"> More About Me</Link>
        <Link to="Contact"> Contact </Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="PastWork" element={<PastWork />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/ProjectPage/:" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
