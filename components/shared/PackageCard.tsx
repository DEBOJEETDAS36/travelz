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
import { Expand, LocateIcon, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

const PackageCard = () => {
  return (
    <Card className="break-inside-avoid w-full pt-0 overflow-hidden">
      <div className="w-full aspect-video bg-primary/20 relative">
        <Badge className="px-4 py-3 rounded-full absolute bottom-0 right-6 bg-card translate-y-1/2 text-base tracking-wide" variant="secondary">Wildlife</Badge>
      </div>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Lorem ipsum dolor, lorem ipsum dolor</CardDescription>
      </CardHeader>
      <CardContent className="flex">
        <MapPin className="text-primary w-4 mr-2" />
        India, kolkata
      </CardContent>
      <CardFooter className="gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size="lg">
              More info
            </Button>
          </DialogTrigger>
          <DialogContent className="flex flex-col p-0 gap-0 lg:flex-row overflow-y-auto">
            <div className="w-full aspect-video lg:w-1/2 lg:sticky top-0">
              <Carousel className="h-full border relative">
                <CarouselContent className="text-4xl font-semibold">
                  <CarouselItem className="bg-primary/70 fl_center text-8xl">
                    A
                  </CarouselItem>
                  <CarouselItem className="bg-emerald-500 fl_center text-8xl">
                    B
                  </CarouselItem>
                  <CarouselItem className="bg-chart-4 fl_center text-8xl">
                    C
                  </CarouselItem>
                </CarouselContent>

                <div className="flex items-center gap-2 absolute ring-0 bottom-0 w-full justify-end p-3">
                  <CarouselPrevious
                    variant="ghost"
                    className="rounded-full h-12 w-12 bg-background"
                  />
                  <div className="h-5 w-1 rounded-full bg-accent" />
                  <CarouselNext
                    variant="ghost"
                    className="rounded-full h-12 w-12 bg-background"
                  />
                </div>
              </Carousel>
            </div>
            <div className="w-full p-5 lg:p-8 lg:w-1/2">
              <DialogHeader>
                <DialogTitle>Random title</DialogTitle>
                <DialogDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </DialogDescription>
                <div className="flex flex-col gap-2 mt-2">
                  <p className="text-lg font-semibold">Spots</p>
                  <ul className="text-muted-foreground pl-4 list-disc">
                    <li>
                      <p className="text-lg font-semibold">Lorem ipsum</p>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Illo, cum placeat id ea quo quia dolores provident
                        quam neque suscipit odio facilis eius sequi quae vero.
                      </p>
                    </li>
                    <li>
                      <p className="text-lg font-semibold">Lorem ipsum</p>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Illo, cum placeat id ea quo quia dolores.
                      </p>
                    </li>
                    <li>
                      <p className="text-lg font-semibold">Lorem ipsum</p>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Illo, cum placeat id ea quo.
                      </p>
                    </li>
                    <li>
                      <p className="text-lg font-semibold">Lorem ipsum</p>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Illo, cum placeat id ea quo quia dolores provident
                        quam neque suscipit odio facilis eius.
                      </p>
                    </li>
                  </ul>
                </div>
              </DialogHeader>
            </div>
          </DialogContent>
        </Dialog>
        <Button className="w-full" size="lg">
          Book now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
