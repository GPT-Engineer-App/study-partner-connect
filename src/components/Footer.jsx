import React from "react";

export const Footer = () => {
  return (
    <footer className="p-4 bg-orange-100 text-orange-600 text-center rounded-t-3xl shadow-lg">
      <div className="space-x-4">
        <a href="/about" className="hover:underline">About Us</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <a href="/faqs" className="hover:underline">FAQs</a>
      </div>
      <div className="mt-4 space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
      </div>
    </footer>
  );
};