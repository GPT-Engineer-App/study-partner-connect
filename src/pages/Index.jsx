import React from "react";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md bg-orange-100 rounded-3xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-orange-600">Welcome Page</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-24 h-24 bg-orange-300 rounded-full mb-4"></div>
            <p className="text-center mb-4 text-orange-500">Find your perfect study partner today!</p>
            <Button className="mb-4 bg-orange-500 text-white rounded-full px-6 py-2">Start Searching</Button>
            <div className="w-full">
              <h2 className="text-lg mb-2 text-orange-600">Recently Viewed Profiles</h2>
              <ul className="space-y-2">
                <li className="p-2 border rounded-full bg-orange-200">Profile 1</li>
                <li className="p-2 border rounded-full bg-orange-200">Profile 2</li>
                <li className="p-2 border rounded-full bg-orange-200">Profile 3</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Index;