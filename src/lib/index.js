import { AiOutlineHome } from "react-icons/ai";
import { ShoppingBag } from "lucide-react";
import { CiCircleQuestion } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
// shop category images
import Eimg from "../assets/images/earrings.jpeg";
import Nimg from "../assets/images/shopneck.jpg";
import Rimg from "../assets/images/rings.jpeg";
import Bimg from "../assets/images/bracelts.jpeg";
// best sellers images
import sikaB from "../assets/images/Sika bracelts.jpeg";
import linaN from "../assets/images/Necklace.jpeg";
import cuffR from "../assets/images/Cuff ring.jpeg";
// offer section icons
import { PiCheckSquareOffset } from "react-icons/pi";
import { PiTruck } from "react-icons/pi";
import { PiLockKeyLight } from "react-icons/pi";
// footer icons
import { FaCircle } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const navList = [
  {
    name: "Home",
    href: "#home",
    icon: AiOutlineHome,
  },
  {
    name: "Shop",
    href: "/shop",
    icon: ShoppingBag,
  },
  {
    name: "About",
    href: "#about",
    icon: CiCircleQuestion,
  },
];

const links = [
  {
    name: "Facebook",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    icon: FaTwitter,
  },
  {
    name: "Youtube",
    icon: FaYoutube,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
  },
];

const shopCategory = [
  {
    name: "Earrings",
    img: Eimg,
    info: "Elevate Every Look",
  },
  {
    name: "Necklaces",
    img: Nimg,
    info: "Close to the Heart",
  },
  {
    name: "Rings",
    img: Rimg,
    info: "Where Elegance Begins",
  },
  {
    name: "Bracelets",
    img: Bimg,
    info: "Confidence at Your Wrist",
  },
];

const bestSellers = [
  {
    name: "SIKA BRACELET",
    img: sikaB,
  },
  {
    name: "LINA NECKLACE",
    img: linaN,
  },
  {
    name: "CUFF RING ",
    img: cuffR,
  },
];

const offerSection = [
  {
    name: "Premium Quality",
    icon: PiCheckSquareOffset,
  },
  {
    name: "Fast Delivery",
    icon: PiTruck,
  },
  {
    name: "Secure Checkout",
    icon: PiLockKeyLight,
  },
];

const footerLinks = [
  {
    name: "Home",
    href: "#home",
    icon: AiOutlineHome,
  },
  {
    name: "About us",
    href: "#about",
    icon: ShoppingBag,
  },
  {
    name: "Luviere’ promise ",
    href: "#promise ",
    icon: CiCircleQuestion,
  },
  {
    name: "Shop",
    href: "#shop",
    icon: ShoppingBag,
  },
];

const footerIcons = [
  { icon: FaCircle },
  {
    icon: FaSquare,
  },
  {
    icon: ImCross,
  },
];

// Shop now

const categories = [
  {
    name: "New",
  },
  {
    name: "Earrings",
  },
  {
    name: "Necklace",
  },
  {
    name: "Bracelets",
  },
  {
    name: "Rings",
  },
];

export {
  navList,
  links,
  shopCategory,
  bestSellers,
  offerSection,
  footerLinks,
  footerIcons,
  categories,
};
