import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useSupabaseAuth } from "@/integrations/supabase/auth.jsx";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const { session, logout } = useSupabaseAuth();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="/logo.png" alt="App Logo" className="h-8 mr-2" />
        <span className="text-xl font-bold">StudyBuddy</span>
      </div>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/search" className="hover:underline">Search</Link>
        <Link to="/edit-profile" className="hover:underline">Profile</Link>
        <Link to="/settings" className="hover:underline">Settings</Link>
        <Link to="/bio" className="hover:underline">Bio</Link>
        {session ? (
          <Button variant="outline" onClick={logout}>Sign Out</Button>
        ) : (
          <a href="/login">
            <Button variant="outline">Sign In / Sign Up</Button>
          </a>
        )}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600"
        >
          {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-300" />}
        </button>
      </nav>
    </header>
  );
};