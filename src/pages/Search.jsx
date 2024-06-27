import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [sortOption, setSortOption] = useState("relevance");

  const handleSearch = () => {
    // Implement search logic here
    // For now, we'll use dummy data
    const dummyResults = [
      { id: 1, name: "Virtual Buddy", tagline: "Study from anywhere", thumbnail: "/path/to/virtual-buddy.jpg" },
      { id: 2, name: "Library Buddy", tagline: "Quiet and focused", thumbnail: "/path/to/library-buddy.jpg" },
      { id: 3, name: "Coffeeshop Buddy", tagline: "Casual and relaxed", thumbnail: "/path/to/coffeeshop-buddy.jpg" },
    ];
    setResults(dummyResults);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <div className="mb-4">
          <Input
            placeholder="Search by study fields or user names"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-2"
          />
          <Button onClick={handleSearch} className="w-full">Search</Button>
        </div>
        <div className="mb-4">
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="newest">Newest Profiles</SelectItem>
              <SelectItem value="alphabetical">Alphabetically</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((result) => (
            <Card key={result.id}>
              <CardHeader>
                <img src={result.thumbnail} alt={result.name} className="w-full h-32 object-cover" />
                <CardTitle>{result.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{result.tagline}</p>
                <Button className="mt-2 w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;