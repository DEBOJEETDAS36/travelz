// import { useState } from "react";
// import { Search } from "lucide-react";
// import { Input } from "../ui/input";
// import PackageCard from "./PackageCard";
// import { tourCards } from "@/constants";

// const PackagesContainer = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const filteredPackages = tourCards.filter((card) =>
//     card.tour_name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <div className="mt-10 relative">
//         <Search className="absolute w-4 left-0 top-1/2 -translate-y-1/2 translate-x-3 text-primary" />
//         <Input
//           className="w-fit h-10 pl-9 rounded-full text-foreground bg-secondary"
//           placeholder="Search packages"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5 mt-8">
//         {filteredPackages.length > 0 ? (
//           filteredPackages.map((card) => (
//             <PackageCard key={card.id} {...card} />
//           ))
//         ) : (
//           <p className="text-center text-muted-foreground mt-5">
//             No packages found.
//           </p>
//         )}
//       </div>
//     </>
//   );
// };

// export default PackagesContainer;

// import { useEffect, useState } from "react";
// import { Search } from "lucide-react";
// import gsap from "gsap";
// import { Input } from "../ui/input";
// import PackageCard from "./PackageCard";
// import { tourCards } from "@/constants";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const PackagesContainer = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const filteredPackages = tourCards.filter((card) =>
//     card.tour_name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Refresh GSAP ScrollTrigger when search results change
//   useEffect(() => {
//     setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 100);
//   }, [filteredPackages.length]);

//   return (
//     <>
//       <div className="mt-10 relative">
//         <Search className="absolute w-4 left-0 top-1/2 -translate-y-1/2 translate-x-3 text-primary" />
//         <Input
//           className="w-fit h-10 pl-9 rounded-full text-foreground bg-secondary"
//           placeholder="Search packages"
//           value={searchQuery}
//           onChange={(e) => {
//             setSearchQuery(e.target.value);
//             ScrollTrigger.refresh(); // Refresh scroll animations
//           }}
//         />
//       </div>

//       <div className="mt-8 w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {filteredPackages.length > 0 ? (
//           filteredPackages.map((card) => (
//             <PackageCard key={card.id} {...card} />
//           ))
//         ) : (
//           <p className="text-center text-muted-foreground mt-5">
//             No packages found.
//           </p>
//         )}
//       </div>
//     </>
//   );
// };

// export default PackagesContainer;

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import gsap from "gsap";
import { Input } from "../ui/input";
import PackageCard from "./PackageCard";
import { tourCards } from "@/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PackagesContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = tourCards.filter((card) =>
    card.tour_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Refresh GSAP ScrollTrigger when search results change
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [filteredPackages.length]);

  return (
    <>
      <div className="mt-10 relative">
        <Search className="absolute w-4 left-0 top-1/2 -translate-y-1/2 translate-x-3 text-primary" />
        <Input
          className="w-fit h-10 pl-9 rounded-full text-foreground bg-secondary"
          placeholder="Search packages"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            ScrollTrigger.refresh(); // Refresh scroll animations
          }}
        />
      </div>

      <div className="mt-8 w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
