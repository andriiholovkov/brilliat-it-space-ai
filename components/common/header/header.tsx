import React from "react";
import { Button } from "@/ui/button";

const Header = () => (
  <header className="flex p-8 justify-center">
    <nav>
      <ul className="flex gap-6">
        <li>
          <Button href="#HowItWorks" variant="ghost" size="sm" as="a">
            How It Works
          </Button>
        </li>
        <li>
          <Button href="#BuySaltAI" variant="outline" size="sm" as="a">
            Buy Salt AI
          </Button>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
