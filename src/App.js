// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./users/Signup";
import Signin from "./users/Signin";
// import DiscussionComponent from "./pages/CommunityChat";
import Home from "./pages/Home";
// import NavbarHome from "./layout/Navbarhome";
import Videos from "./pages/Videos";
import CommunityChat from "./pages/CommunityChat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/CommunityChat" element={<CommunityChat />} />
        <Route epath="/Signup" element={<Signup />} />

        {/* <Route exact path="/community-chat" element={<DiscussionComponent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
