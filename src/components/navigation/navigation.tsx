import React from "react";
import Container from "../container";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Creche", href: "/creche" },
  { name: "Garden", href: "/garden" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 w-full bg-[#F5A623] backdrop-blur-sm">
      <Container>
        <div className="">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-end items-center h-16">
           
            <nav className="hidden md:flex gap-4 items-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 font-bold uppercase"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/donate">
                <Button className="bg-brand-dark-green text-brand-orange-yellow uppercase rounded-none font-bold">
                  Donate
                </Button>
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-800">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="px-6 py-6 w-[80vw]">
                <SheetHeader className="mb-8 text-left">
                  <SheetTitle className="text-brand-dark-green font-bold text-xl uppercase">
                    Ekuphumleni
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-bold text-gray-700 hover:text-brand-dark-green uppercase"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link href="/donate" className="mt-4">
                    <Button className="w-full bg-brand-dark-green text-brand-orange-yellow uppercase rounded-none font-bold">
                      Donate
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
