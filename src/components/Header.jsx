import React from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="/logo.png" alt="App Logo" className="h-8 mr-2" />
        <span className="text-xl font-bold">StudyBuddy</span>
      </div>
      <nav className="flex items-center space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/search" className="hover:underline">Search</a>
        <a href="/profile" className="hover:underline">Profile</a>
        <a href="/settings" className="hover:underline">Settings</a>
        <Button variant="outline">Sign In / Sign Up</Button>
      </nav>
    </header>
  );
};