import { heroDescription } from "@/constants";
import RevealSentence from "./shared/RevealSentence";
import RevealWord from "./shared/RevealWord";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import SlideIn from "./shared/SlideIn";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import OptimizedImage from "./shared/OptimizedImage";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center wrapper gap-10 justify-between py-16 md:py-8 overflow-x-clip">
      <SlideIn className="text-center md:text-left" from="left">
        <Badge
          className="text-base rounded-full px-5 py-2 font-semibold inline-flex gap-4"
          variant="secondary"
        >
          <span>Explore the world</span>
          <span className="text-xl">🎉</span>
        </Badge>
        <h1 className="h_lg mt-2">
          Begin your <RevealWord word="Journey" className="text-primary" />
        </h1>
        <RevealSentence
          className="text-muted-foreground mt-5 text-lg lg:max-w-2xl"
          sentence={heroDescription}
          delay={0.8}
        />
        <div className="flex justify-center md:justify-start mt-4">
          <Button
            variant="ghost"
            size="icon"
            className="opacity-90 hover:opacity-100 transition-opacity"
          >
            <Image
              src={"/instagram.svg"}
              width={24}
              height={24}
              alt={"instagram"}
              priority
            />
          </Button>
          <Button variant="ghost" size="icon">
            <Image
              src={"/facebook.svg"}
              width={24}
              height={24}
              alt={"instagram"}
              priority
            />
          </Button>
          <Button variant="ghost" size="icon">
            <Image
              src={"/x.svg"}
              priority
              width={24}
              height={24}
              alt={"instagram"}
            />
          </Button>
        </div>
        <Button
          asChild
          size="lg"
          className="rounded-full mt-5 text-base font-semibold group hover:pr-7 transition-all"
        >
          <Link href="#packages">
            Explore packages{" "}
            <ArrowRight className="scale-110 group-hover:translate-x-1 group-hover:scale-130 transition-transform" />
          </Link>
        </Button>
      </SlideIn>
      <div className="w-full max-w-72 md:max-w-128 md:w-2/5 aspect-square rounded-3xl bg-primary/30 shrink-0 relative z-10 translate-y-8 md:-translate-y-0 rotate-12 md:-translate-x-8">
        <OptimizedImage
          path="/travelz/Home/home"
          alt="hero"
          quality={100}
          containerClassName="rounded-3xl overflow-hidden z-10 -rotate-12"
        />
        {/* <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-primary/30 blur-3xl" /> */}
      </div>
    </section>
  );
};

export default HeroSection;
