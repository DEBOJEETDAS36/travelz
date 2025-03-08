import { Search } from "lucide-react";
import { Input } from "../ui/input";
import PackageCard from "./PackageCard";
import { Button } from "../ui/button";

const PackagesContainer = () => {
  return (
    <>
      <div className="mt-10 relative">
        <Search className="absolute w-4 left-0 top-1/2 -translate-y-1/2 translate-x-3 text-primary" />
        <Input
          className="w-fit h-10 pl-9 rounded-full text-foreground bg-secondary"
          placeholder="Search packages"
        />
      </div>

      <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5 mt-8">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
      <Button className="mt-8" variant="link">See all packages</Button>
    </>
  );
};

export default PackagesContainer;
