import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import PackageCard from "./PackageCard";
import { Button } from "../ui/button";
import { tourCards } from "@/constants";

const PackagesContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered results based on search input
  const filteredPackages = tourCards.filter((card) =>
    card.tour_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="mt-10 relative">
        <Search className="absolute w-4 left-0 top-1/2 -translate-y-1/2 translate-x-3 text-primary" />
        <Input
          className="w-fit h-10 pl-9 rounded-full text-foreground bg-secondary"
          placeholder="Search packages"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5 mt-8">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((card) => (
            <PackageCard key={card.id} {...card} />
          ))
        ) : (
          <p className="text-center text-muted-foreground mt-5">
            No packages found.
          </p>
        )}
      </div>
    </>
  );
};

export default PackagesContainer;
