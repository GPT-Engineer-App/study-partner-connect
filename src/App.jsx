import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index.jsx";
import Search from "./pages/Search.jsx";
import Login from "./pages/Login.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";
import EditProfile from "./pages/EditProfile.jsx"; // Import the new EditProfile page
import Bio from "./pages/Bio.jsx"; // Import the new Bio page

function App() {
  return (
    <ThemeProvider attribute="class">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/edit-profile" element={<EditProfile />} /> {/* Add the new EditProfile route */}
          <Route path="/bio" element={<Bio />} /> {/* Add the new Bio route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;