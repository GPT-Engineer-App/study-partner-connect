import React from "react";
import { useNavigate } from "react-router-dom";
import { SupabaseAuthUI } from "@/integrations/supabase/auth.jsx";
import { useSupabaseAuth } from "@/integrations/supabase/auth.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md bg-orange-100 rounded-3xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-orange-600">Sign In / Sign Up</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <SupabaseAuthUI />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Login;