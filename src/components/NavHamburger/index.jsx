'use client'
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { Text, IconButton } from "..";
import { List } from "@phosphor-icons/react";
import { NavbarContext } from "../Navbar";

const NavHamburger = ({ className, onClick, ...props }) => {
const {setShowNav} = useContext(NavbarContext)
  const handleClick = () => {
    setShowNav((prev) =>!prev);
  };
  return (
    <button
      onClick={handleClick}
      className={twMerge(
        "lg:hidden inline-flex bg-primary-10 gap-1.5 px-2 py-1.5 text-primary-100 rounded-lg items-center",
        className
      )}
      {...props}
    >
      <Text size="sm" color="primary-100">
        Menu
      </Text>
      <List size={16} weight="bold" />
    </button>
  );
};

export default NavHamburger;
