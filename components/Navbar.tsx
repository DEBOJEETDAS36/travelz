"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { navLinks } from "@/constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowLeft, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import { ModeToggle } from "./shared/ModeToggle";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="wrapper py-4 flex justify-between gap-5 items-center bg-transparent">
      <Link href={"/"}>
        <Image src="/logo.png" alt="logo" width={100} height={50} priority />
      </Link>

      {pathName === "/" ? (
        <nav className="hidden sm:flex items-center">
          <ul className="flex items-center">
            {navLinks.map(({ name, url }) => (
              <li key={name}>
                <Button
                  asChild
                  variant="ghost"
                  className="text-muted-foreground"
                >
                  <Link href={url}>{name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <>
          <Button
            size="icon"
            className="sm:hidden"
            onClick={() => history.back()}
          >
            <ArrowLeft />
            <span className="sr-only">Go back</span>
          </Button>
          <Button onClick={() => history.back()} className="hidden sm:block">
            Go back
          </Button>
        </>
      )}

      {/* <ModeToggle /> */}
      {pathName === "/" && (
        <Popover>
          <PopoverTrigger asChild className="inline-flex sm:hidden">
            <Button size="icon" variant="outline" className="group">
              <Menu className="group-data-[state=open]:hidden" />
              <X className="hidden group-data-[state=open]:inline-block" />
              <span className="sr-only">Menu</span>
            </Button>
          </PopoverTrigger>

          <PopoverContent className="block sm:hidden">
            <ul>
              {navLinks.map(({ name, url }) => (
                <li key={name}>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-muted-foreground w-full justify-start px-5 py-6 text-base"
                  >
                    <Link href={url}>{name}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      )}
      {/* </div> */}
    </header>
  );
};

export default Navbar;
