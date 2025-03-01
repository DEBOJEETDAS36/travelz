import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IndianRupee } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <main>
      <section className="wrapper md:flex-row min-h-screen md:min-h-[80vh] flex flex-col gap-5 mt-5 mb-10">
        <div className="w-full md:w-1/2 h-fit">
          <Carousel className="aspect-square max-h-132 w-full bg-accent relative rounded-2xl overflow-hidden">
            <CarouselContent className="text-4xl font-semibold">
              <CarouselItem className="bg-primary/70 fl_center">A</CarouselItem>
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

        <div className="md:w-1/2">
          <h1 className="h_lg text-primary">Package name</h1>
          <p className="text-xl text-muted-foreground mt-3">
            Package description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officia dignissimos esse dolore! Reprehenderit
            fuga, facilis earum neque ullam possimus. Quia quae maiores,
            delectus doloremque asperiores ipsa consequuntur nulla voluptate
            cumque?
          </p>
          <div className="mt-4 flex flex-row flex-wrap gap-3">
            <Badge
              variant="secondary"
              className="px-3 py-2 text-base rounded-full"
            >
              <span className="text-muted-foreground">Category:</span>
              <span className="inline-flex items-center">Wildlife</span>
            </Badge>
            <Badge
              variant="secondary"
              className="px-3 py-2 text-base rounded-full"
            >
              <span className="text-muted-foreground">Starts at:</span>
              <span className="inline-flex items-center">
                <IndianRupee className="size-4" />
                12,000
              </span>
            </Badge>
          </div>
          <Button size="lg" className="py-6 text-lg mt-5 rounded-full w-full">
            Book now
          </Button>
          <Accordion type="single" collapsible className="mt-5">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-accent/50 px-4 py-3">
                See all information
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <div>
                  <p className="text-xl text-foreground">Lorem ipsum</p>
                  <ul className="list-disc marker:text-primary ml-6 text-lg mt-2">
                    <li>
                      Lorem ipsum onse quatur imos mollitia facere in similique
                      voluptatem aliquam nam qui placeat.
                    </li>
                    <li>
                      Lorem ipsum onse quatur imos mollitia facere in similique
                      voluptatem aliquam nam qui placeat.
                    </li>
                    <li>
                      Lorem ipsum onse quatur imos mollitia facere in similique
                      voluptatem aliquam nam qui placeat.
                    </li>
                    <li>
                      Lorem ipsum onse quatur imos mollitia facere in similique
                      voluptatem aliquam nam qui placeat.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xl text-foreground">Lorem ipsum</p>
                  <ul className="list-disc marker:text-primary ml-6 text-lg mt-2">
                    <li>
                      Lorem ipsum onse quatur imos mollitia facere in similique
                      voluptatem aliquam nam qui placeat.
                    </li>
                    <li>
                      Lorem ipsum onse quatur imos mollitia facere in similique
                      voluptatem aliquam nam qui placeat.
                    </li>
                    <li>
                      Lorem ipsum onse quatur imos mollitia facere in similique
                      voluptatem aliquam nam qui placeat.
                    </li>
                    <li>
                      Lorem ipsum onse quatur imos mollitia facere in similique
                      voluptatem aliquam nam qui placeat.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
