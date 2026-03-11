import { MenuIcon } from "lucide-react";
import { links, navList } from "../lib";
import { ShoppingCart } from "lucide-react";

import { useState } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { CgClose, CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";

  return (
    <nav className="w-full fixed inset-x-0 top-0 left-0 z-50 shadow-md ">
      {/* desktop */}
      <div className="hidden md:flex items-center  md:gap-x-12 justify-start px-7 md:py-5 lg:py-5.5 bg-white font-inter gap-x-5 py-4 cursor-pointer ">
        {/* logo */}
        <div className=" ">
          <Link to="/">
            <h1 className="font-semibold text-2xl md:text-md tracking-[2px] font-inter ">
              Luviere’
            </h1>
          </Link>
        </div>
        <ul className="flex space-x-5 lg:space-x-18 md:space-x-12  ">
          {navList.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-md tracking-wide text-xl md:text-md"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {isShopPage ? (
          <Link to="/cart" className="ml-auto">
            <HiOutlineShoppingCart
              size={28}
              className="cursor-pointer hover:text-textGreen transition    "
            />
          </Link>
        ) : (
          <div className="bg-textGreen py-3 px-5 rounded-3xl  ">
            <Link
              to="/shop"
              className="text-white font-bold text-md tracking-wide"
            >
              shop now
            </Link>
          </div>
        )}
      </div>

      {/* mobile */}
      <div className="md:hidden bg-white ">
        <div className="flex items-center justify-between px-5 py-5.5 bg-white">
          {/* logo */}
          <div>
            <Link to="/">
              <a
                className="font-semibold text-md md:text-md tracking-[2px] font-inter cursor-pointer"
                href="#home"
              >
                Luviere’
              </a>
            </Link>
          </div>
          <div>
            {navOpen ? (
              <CgClose onClick={() => setNavOpen((open) => !open)} size={25} />
            ) : (
              <MenuIcon onClick={() => setNavOpen((open) => !open)} size={25} />
            )}
          </div>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              className={cn(
                "bg-white flex flex-col fixed  w-[50vw] right-0 gap-y-7 px-5 py-3 list-none text-xl font-inter font-normal  backdrop-blur-sm  cursor-pointer rounded-b-3xl ",
              )}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: -5, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
              onClick={() => setNavOpen(false)}
            >
              {navList.map((item, index) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                return (
                  <li key={index}>
                    <div className="flex items-center gap-x-2 ">
                      <Icon size={20} />
                      {isInternal ? (
                        <Link to={item.href} className="font-medium">
                          {item.name}
                        </Link>
                      ) : (
                        <a href={item.href} className="font-medium">
                          {item.name}
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}

              <div className="flex items-center gap-x-2">
                <HiOutlineShoppingCart size={20} />
                <Link to="/cart">Cart</Link>
              </div>

              {/* links */}
              <div className="flex gap-x-3.5 mb-1.5">
                {links.map((item, index) => (
                  <a
                    key={index}
                    href=""
                    className="flex items-center gap-x-1 rounded-full p-1 bg-[#373B47] fill-white text-white"
                  >
                    <item.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
