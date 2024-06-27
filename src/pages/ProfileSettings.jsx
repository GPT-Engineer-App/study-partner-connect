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

const ProfileSettings = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    studyInterests: "",
    preferredStudyTimes: "",
    profilePicture: "",
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
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
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
            <CardTitle className="text-3xl text-orange-600">Profile Settings</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div>
                <Label htmlFor="profilePicture">Profile Picture URL</Label>
                <Input
                  id="profilePicture"
                  name="profilePicture"
                  value={profile.profilePicture}
                  onChange={handleChange}
                  className="w-full bg-orange-100 rounded-full"
                />
              </div>
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
                <Label htmlFor="studyInterests">Study Interests</Label>
                <Input
                  id="studyInterests"
                  name="studyInterests"
                  value={profile.studyInterests}
                  onChange={handleChange}
                  className="w-full bg-orange-100 rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="preferredStudyTimes">Preferred Study Times</Label>
                <Input
                  id="preferredStudyTimes"
                  name="preferredStudyTimes"
                  value={profile.preferredStudyTimes}
                  onChange={handleChange}
                  className="w-full bg-orange-100 rounded-full"
                />
              </div>
              <Button type="submit" className="w-full bg-orange-500 text-white rounded-full px-6 py-2">Save</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProfileSettings;