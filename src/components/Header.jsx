import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useSupabaseAuth } from "@/integrations/supabase/auth.jsx";

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
        <a href="/" className="hover:underline">Home</a>
        <a href="/search" className="hover:underline">Search</a>
        <a href="/profile-settings" className="hover:underline">Profile</a>
        <a href="/settings" className="hover:underline">Settings</a>
        <a href="/bio" className="hover:underline">Bio</a>
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