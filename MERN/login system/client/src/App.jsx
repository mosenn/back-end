import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import GithubAccess from "./component/GithubAccess";
import UserProfile from "./component/UserProfile";
import LinkedinAccess from "./component/LinkedinAccess";
import GoogleAcess from "./component/GoogleAcess";
function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/profile"} element={<UserProfile />} />
          <Route path="/accessGithub" element={<GithubAccess />} />
          <Route path="/accessLinkedin" element={<LinkedinAccess />} />
          <Route path="/accessGoogle" element={<GoogleAcess />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
