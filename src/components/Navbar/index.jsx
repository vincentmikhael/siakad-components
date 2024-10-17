"use client";
import { createContext, useState } from "react";
import { twMerge } from "tailwind-merge";

export const NavbarContext = createContext();

const NavbarContextProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavbarContext.Provider value={{ showNav, setShowNav }}>
      {children}
    </NavbarContext.Provider>
  );
};

const Navbar = ({ children, className, ...props }) => {
  return (
    <NavbarContextProvider>
      <header className="sticky top-0 z-40 mx-auto w-full">
        <nav
          className={twMerge("w-full flex items-start flex-col", className)}
          {...props}
        >
          {children}
        </nav>
      </header>
    </NavbarContextProvider>
  );
};

export default Navbar;
