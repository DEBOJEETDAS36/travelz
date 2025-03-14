"use client";
import Link from "next/link";
import { ModeToggle } from "./shared/ModeToggle";
import { Button } from "./ui/button";
import { navLinks } from "@/constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="wrapper py-4 flex justify-between items-center">
      <Link href={"/"}>
        <p className="text-2xl font-semibold">LOGO</p>
      </Link>

      {pathName === "/" && (
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
      )}

      <div className="flex flex-row gap-4">
        <ModeToggle />

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
      </div>
    </header>
  );
};

export default Navbar;
