import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SupabaseProvider } from "./integrations/supabase/index.js";
import { SupabaseAuthProvider } from "./integrations/supabase/auth.jsx"; // Import the SupabaseAuthProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SupabaseProvider>
      <SupabaseAuthProvider> {/* Wrap the App with SupabaseAuthProvider */}
        <App />
      </SupabaseAuthProvider>
    </SupabaseProvider>
  </React.StrictMode>,
);
