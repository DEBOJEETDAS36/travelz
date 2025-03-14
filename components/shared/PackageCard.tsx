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

const PackageCard = ({
  id,
  tour_name,
  duration,
  season,
  departure_date,
  price,
  route,
  description,
}: {
  id: string;
  tour_name: string;
  duration: string;
  season: string;
  departure_date: string;
  price: string[];
  route: string[];
  description: string;
}) => {
  return (
    <Card className="break-inside-avoid w-full pt-0 overflow-hidden">
      <div className="w-full aspect-video bg-primary/20 relative">
        <Badge
          className="px-4 py-3 rounded-full absolute bottom-0 right-6 bg-card translate-y-1/2 text-base tracking-wide"
          variant="secondary"
        >
          {departure_date}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>{tour_name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 flex-wrap">
        <p>{duration}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="w-full rounded-full" size="lg" asChild>
          <Link href={`/${id}`}>Explore package</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
