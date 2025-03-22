import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import OptimizedImage from "./OptimizedImage";
import { ChevronRight } from "lucide-react";

const PackageCard = ({
  id,
  tour_name,
  duration,
  season,
  departure_date,
  price,
  route,
  images,
  description,
}: {
  id: string;
  tour_name: string;
  duration: string;
  season: string;
  departure_date: string;
  price: string[];
  route: string[];
  images: string[];
  description: string;
}) => {
  return (
    <Card className="pt-0 overflow-hidden">
      <Link href={`/${id}`} className="flex flex-col gap-4">
        <div className="w-full aspect-video bg-primary/20 relative">
          <OptimizedImage path={images[0]} alt={tour_name} />
          <Badge
            className="px-4 py-3 rounded-full absolute bottom-0 right-6 bg-card translate-y-1/2 text-base tracking-wide"
            variant="secondary"
          >
            {departure_date}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="truncate">{tour_name}</CardTitle>
          <CardDescription className="truncate">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>{duration}</p>

          <div className="text-muted-foreground text-sm truncate">
            {route.map((place, index) => (
              <span key={index + place} className="hover:text-foreground transition-colors">
                {place}
                {index !== route.length - 1 && <ChevronRight className="inline-block size-4"/>}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button className="w-full rounded-full" size="lg">
            Explore package
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default PackageCard;
