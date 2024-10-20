"use client";

import { useContext, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { NavbarContext } from "../Navbar";

const NavUl = ({
  ulClass = "flex flex-col lg:p-0 xl:flex-row xl:gap-7 gap-3 font-normal",
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
          showNav ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
        } items-center justify-between xl:flex order-1 fixed xl:static left-0 top-0 w-[250px] md:w-[267px] xl:w-max z-40 xl:z-0 h-full xl:h-fit bg-white xl:bg-transparent py-8 px-6 xl:p-0 transition-transform xl:transition-none duration-500 transform rounded-r-lg overflow-y-auto xl:overflow-hidden invisible-overflow custom-shadow-sidebar xl:shadow-none`, className)}
        {...props}
      >
        <ul className={_ulClass}>{children}</ul>
      </div>
    </>
  );
};

export default NavUl;
