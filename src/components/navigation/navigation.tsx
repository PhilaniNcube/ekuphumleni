import React from "react";
import Container from "../container";
import Link from "next/link";
import { Button } from "../ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full">
      <Container>
        <div className="flex justify-end items-center py-4">
          {/* Navigation items go here */}
          <nav className="flex gap-4 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-bold uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link href="#">
              <Button className="bg-brand-dark-green text-brand-orange-yellow uppercase rounded-none font-bold">Sign In</Button>
            </Link> 
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
