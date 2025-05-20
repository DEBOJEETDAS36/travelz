import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import { tours } from "@/constants";
import OptimizedImage from "@/components/shared/OptimizedImage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const pkg = tours.find((item) => item.id === id);
  if (!pkg) {
    return (
      <main>
        <section className="wrapper min-h-screen fl_center">
          <h1 className="text-2xl">Package not found</h1>
        </section>
      </main>
    );
  }
  return (
    <main>
      <section className="flex flex-col gap-5 mb-10 wrapper pb-10">
        <div className="w-full">
          <Carousel className="aspect-square sm:aspect-video max-h-140 w-full bg-accent relative rounded-2xl overflow-hidden">
            <CarouselContent className="text-4xl font-semibold">
              {pkg.images.map((image, index) => (
                <CarouselItem key={image + index} className="w-full">
                  <OptimizedImage
                    path={image}
                    alt={pkg.tour_name}
                    containerClassName="object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center gap-2 absolute z-10 ring-0 bottom-0 w-full justify-end p-3 pointer-events-none">
              <CarouselPrevious
                variant="ghost"
                className="rounded-full h-12 w-12 bg-background pointer-events-auto"
              />
              <div className="h-5 w-1 rounded-full bg-accent" />
              <CarouselNext
                variant="ghost"
                className="rounded-full h-12 w-12 bg-background pointer-events-auto"
              />
            </div>
          </Carousel>
        </div>
        <div className="text-center relative pointer-events-none md:-translate-y-8 transition-transform">
          <h1 className="h_md relative text-primary z-10 bg-background md:pt-5 md:px-10 w-fit mx-auto rounded-t-3xl">
            {pkg.tour_name}
          </h1>
          <p className="text-xl mt-3 text-muted-foreground">
            {pkg.description}
          </p>

          <div className="flex gap-2.5 justify-center flex-wrap mt-4">
            {pkg.route?.map((item, index) => (
              <Badge
                variant="outline"
                className="px-3 py-2 text-base rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all pointer-events-auto"
                key={item + index}
              >
                {item}
              </Badge>
            ))}
          </div>
          {/* <div className="mt-4 flex flex-col gap-3 justify-center items-center text-sm text-muted-foreground">
            {pkg.price.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div> */}

          <div className="w-full mt-4 sm:justify-center">
            <Badge
              className="px-4 py-3 rounded-full bg-card text-base tracking-wide pointer-events-auto"
              variant="secondary"
            >
              {pkg.departure_date}
            </Badge>

            <Button
              size="lg"
              className="py-6 text-lg rounded-full w-full sm:w-fit pointer-events-auto"
            >
              Book now
            </Button>
          </div>

          <hr className="rounded-full mt-5" />
          <div className="columns-1 md:columns-2 space-x-4 space-y-4 text-lg mt-5 text-left">
            {pkg.itinerary.map((item) => (
              <div key={item.day} className="break-inside-avoid w-full">
                <div className="p-3 px-5 bg-accent rounded-tl-2xl rounded-r-2xl">
                  <p>Day {item.day}</p>
                  <p className="text-primary text-base">{item.route}</p>
                </div>

                <div className="pl-5 py-3 border-l-2 rounded-bl-2xl">
                  <div>
                    <ul className="list-disc ml-5 marker:text-foreground text-muted-foreground">
                      {item.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <Accordion type="single" collapsible className="mt-5 text-left">
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
          </Accordion> */}
        </div>
      </section>
    </main>
  );
}
