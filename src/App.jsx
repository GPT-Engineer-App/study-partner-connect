import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index.jsx";
import Search from "./pages/Search.jsx"; // Import the new Search page

function App() {
  return (
    <ThemeProvider attribute="class">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/search" element={<Search />} /> {/* Add the new Search route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
