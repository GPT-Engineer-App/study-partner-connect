import React, { useState, useEffect } from "react";
import { useSupabaseAuth } from "@/integrations/supabase/auth.jsx";
import { supabase } from "@/integrations/supabase/index.js";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Bio = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    location: "",
    occupation: "",
    bio: "",
    lookingFor: "",
    rules: {
      smoking: false,
      flirting: false,
      talkingMuch: false,
      toxicBehaviours: false,
      askingForMuchPersonalDetails: false,
    },
  });

  useEffect(() => {
    if (!session) {
      navigate("/login");
    } else {
      fetchProfile();
    }
  }, [session, navigate]);

  const fetchProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (error) {
      toast.error("Failed to fetch profile");
    } else {
      setProfile(data);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md bg-orange-100 rounded-3xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-orange-600">{profile.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <img src={profile.profilePicture} alt={profile.name} className="w-24 h-24 rounded-full mb-4" />
            <p className="text-center mb-4 text-orange-500">{profile.location}, {profile.age}, {profile.occupation}</p>
            <p className="text-center mb-4 text-orange-500">{profile.bio}</p>
            <div className="w-full">
              <h2 className="text-lg mb-2 text-orange-600">Looking For</h2>
              <p className="text-center mb-4 text-orange-500">{profile.lookingFor}</p>
              <h2 className="text-lg mb-2 text-orange-600">Rules</h2>
              <ul className="space-y-2">
                {profile.rules.smoking && <li className="p-2 border rounded-full bg-orange-200">Smoking</li>}
                {profile.rules.flirting && <li className="p-2 border rounded-full bg-orange-200">Flirting</li>}
                {profile.rules.talkingMuch && <li className="p-2 border rounded-full bg-orange-200">Talking Much</li>}
                {profile.rules.toxicBehaviours && <li className="p-2 border rounded-full bg-orange-200">Toxic Behaviours</li>}
                {profile.rules.askingForMuchPersonalDetails && <li className="p-2 border rounded-full bg-orange-200">Asking For Much Personal Details</li>}
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Bio;