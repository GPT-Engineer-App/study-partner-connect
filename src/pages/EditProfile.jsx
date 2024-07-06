import React, { useState, useEffect } from "react";
import { useSupabaseAuth } from "@/integrations/supabase/auth.jsx";
import { supabase } from "@/integrations/supabase/index.js";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const EditProfile = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    location: "",
    lookingFor: "",
    hobbies: "",
    bio: "", // Add bio field
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setProfile((prevProfile) => ({
        ...prevProfile,
        rules: {
          ...prevProfile.rules,
          [name]: checked,
        },
      }));
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: session.user.id, ...profile });

    if (error) {
      toast.error("Failed to update profile");
    } else {
      toast.success("Profile updated successfully");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md bg-orange-100 rounded-3xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-orange-600">Edit Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full bg-orange-100 rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                  className="w-full bg-orange-100 rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  className="w-full bg-orange-100 rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="lookingFor">Looking For</Label>
                <Input
                  id="lookingFor"
                  name="lookingFor"
                  value={profile.lookingFor}
                  onChange={handleChange}
                  className="w-full bg-orange-100 rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="hobbies">Hobbies</Label>
                <Textarea
                  id="hobbies"
                  name="hobbies"
                  value={profile.hobbies}
                  onChange={handleChange}
                  className="w-full bg-orange-100 rounded-3xl"
                />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  className="w-full bg-orange-100 rounded-3xl"
                />
              </div>
              <div>
                <Label>Rules</Label>
                <div className="space-y-2">
                  <div>
                    <input
                      type="checkbox"
                      id="smoking"
                      name="smoking"
                      checked={profile.rules.smoking}
                      onChange={handleChange}
                    />
                    <Label htmlFor="smoking" className="ml-2">Smoking</Label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="flirting"
                      name="flirting"
                      checked={profile.rules.flirting}
                      onChange={handleChange}
                    />
                    <Label htmlFor="flirting" className="ml-2">Flirting</Label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="talkingMuch"
                      name="talkingMuch"
                      checked={profile.rules.talkingMuch}
                      onChange={handleChange}
                    />
                    <Label htmlFor="talkingMuch" className="ml-2">Talking Much</Label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="toxicBehaviours"
                      name="toxicBehaviours"
                      checked={profile.rules.toxicBehaviours}
                      onChange={handleChange}
                    />
                    <Label htmlFor="toxicBehaviours" className="ml-2">Toxic Behaviours</Label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="askingForMuchPersonalDetails"
                      name="askingForMuchPersonalDetails"
                      checked={profile.rules.askingForMuchPersonalDetails}
                      onChange={handleChange}
                    />
                    <Label htmlFor="askingForMuchPersonalDetails" className="ml-2">Asking For Much Personal Details</Label>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full bg-orange-500 text-white rounded-full px-6 py-2">Save</Button>
            </form>
            <Button onClick={() => navigate("/bio")} className="mt-4 bg-orange-500 text-white rounded-full px-6 py-2">View Bio</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EditProfile;