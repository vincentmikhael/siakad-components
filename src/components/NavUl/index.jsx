"use client";

import { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { NavbarContext } from "../Navbar";

const NavUl = ({
  ulClass = "flex flex-col lg:p-0 lg:flex-row lg:gap-7 gap-3 font-normal",
  children,
  className="",
  ...props
}) => {
  const { showNav, setShowNav } = useContext(NavbarContext);
  const _ulClass = twMerge(ulClass, props.classUl);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  const handleBackdropClick = () => {
    setShowNav(false);
  };

  return (
    <>
      {showNav && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          role="button"
          onClick={handleBackdropClick}
        />
      )}
      <div
        className={twMerge(`${
          showNav ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } items-center justify-between lg:flex order-1 fixed lg:static left-0 top-0 w-[250px] md:w-[267px] lg:w-max z-40 lg:z-0 h-full lg:h-fit bg-white lg:bg-transparent py-8 px-6 lg:p-0 transition-transform lg:transition-none duration-500 transform rounded-r-lg overflow-y-auto lg:overflow-hidden custom-shadow-sidebar lg:shadow-none`, className)}
        {...props}
      >
        <ul className={_ulClass}>{children}</ul>
      </div>
    </>
  );
};

export default NavUl;
