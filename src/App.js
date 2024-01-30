import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./users/Signup";
import Signin from "./users/Signin";
import DiscussionComponent from "./pages/DiscussionComponent";
import Home from "./pages/Home";
// import NavbarHome from "./layout/Navbarhome";
import Videos from "./pages/Videos";
import CommunityChat from "./pages/CommunityChat";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/adduser" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/Videos" element={<Videos />} />
          <Route exact path="/CommunityChat" element={<CommunityChat />} />
          <Route
            exact
            path="/community-chat"
            element={<DiscussionComponent />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
