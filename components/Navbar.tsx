"use client";
import React from "react";
import { NavigationMenu, NavigationMenuLink } from "./ui/navigation-menu";
import { MoveDownRight, AlignLeft } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "./ui/badge";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="fixed bg-white dark:bg-black top-0 z-10 flex justify-between items-center w-full px-5 md:px-20 py-3">
      <a
        href="#"
        className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-white w-fit whitespace-nowrap"
      >
        Joy-<span className="text-blue-500">A</span>-deep
      </a>
      <NavigationMenu className=" gap-4 hidden md:flex">
        <NavigationMenuLink href="#works" className="cursor-pointer">
          Works
        </NavigationMenuLink>
        <NavigationMenuLink href="#about" className="cursor-pointer">
          About
        </NavigationMenuLink>
        <NavigationMenuLink href="#services" className="cursor-pointer">
          My Services
        </NavigationMenuLink>
        <NavigationMenuLink
          href="#contact"
          className="flex px-2 py-1 items-center cursor-pointer rounded-full bg-inherit text-inherit shadow-none border border-slate-300 text-md font-normal hover:bg-slate-100 dark:hover:bg-slate-700  "
        >
          Get in touch <MoveDownRight size={16} className="ml-1" />
        </NavigationMenuLink>
        <ModeToggle />
      </NavigationMenu>

      {/* //for mobile */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <AlignLeft className="h-[2rem] w-[2rem]" />
          </SheetTrigger>
          <SheetContent className=" dark:rounded-md dark:shadow-md dark:shadow-white">
            <SheetClose asChild>
              <NavigationMenu className="flex flex-col gap-5 mt-20 items-start text-xl">
                <NavigationMenuLink href="#works" className="cursor-pointer">
                  Works
                </NavigationMenuLink>
                <NavigationMenuLink href="#about" className="cursor-pointer">
                  About
                </NavigationMenuLink>
                <NavigationMenuLink href="#services" className="cursor-pointer">
                  My Services
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="#contact"
                  className="flex px-2 py-1 items-center cursor-pointer rounded-full bg-inherit text-inherit shadow-none border border-slate-300 text-md font-normal hover:bg-slate-100 dark:hover:bg-slate-700  "
                >
                  Get in touch <MoveDownRight size={16} className="ml-1" />
                </NavigationMenuLink>
              </NavigationMenu>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
