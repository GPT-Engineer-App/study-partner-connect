import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index.jsx";
import Search from "./pages/Search.jsx";
import Login from "./pages/Login.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx"; // Import the new ProfileSettings page

function App() {
  return (
    <ThemeProvider attribute="class">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} /> {/* Add the new Login route */}
          <Route path="/profile-settings" element={<ProfileSettings />} /> {/* Add the new ProfileSettings route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;