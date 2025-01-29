import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Registerdialog from "./Registerdialog";
import Signdialog from "./Signdialog";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Services", href: "/services", current: false },
  // { name: "Project", href: "#project", current: false },
  { name: "FAQs", href: "/faq", current: false }, // Updated href
  { name: "Contact Us", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-20 w-100 lg"
                  src={"/assets/logo/UsTechLogo.svg"}
                  alt="dsign-logo"
                />
                {/* <img
                  className="hidden h-full w-full lg:block"
                  src={"/assets/logo/logo.jpg"}
                  alt="dsign-logo"
                /> */}
              </div>

              {/* LINKS */}
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-black hover:opacity-100"
                          : "hover:text-black hover:opacity-100",
                        "px-3 py-4 text-lg font-normal opacity-75 space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* SIGNIN DIALOG */}
            <Signdialog />

            {/* REGISTER DIALOG */}
            <Registerdialog />

            {/* DRAWER FOR MOBILE VIEW */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
