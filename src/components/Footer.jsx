import { FaCircle } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { footerIcons, footerLinks, links } from "../lib";

const Footer = () => {
  return (
    <footer className=" mx-auto w-full scroll-mt-7 lg:scroll-mt-10 bg-footer text-white text-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 px-8 py-12 items-center gap-y-7.5">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-start gap-x-1.5">
            <div className="flex gap-x-1">
              {footerIcons.map((icons, i) => (
                <span key={i}>
                  <icons.icon size={20} />
                </span>
              ))}
            </div>
            <h2>Luviere and co</h2>
          </div>

          <div className="flex gap-x-1.5">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="rounded-full p-1.5 bg-[#373B47] fill-white text-white"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
        {/* link name */}
        <div className="flex gap-x-2">
          {footerLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-[14px] md:text-sm font-semibold"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Email */}
        <div className="flex flex-col gap-y-3">
          <p>Get in touch with us </p>
          <form className="flex items-center gap-x-3">
            <input
              type="email"
              placeholder="Enter your Email"
              className="outline-none border-2 border-[#767676] px-3 py-2 md:py-4"
              required
            />
            <button
              type="submit"
              className="bg-white rounded-sm text-black px-3 py-2 md:py-4 font-medium"
            >
              Send us
            </button>
          </form>
        </div>
      </div>
      {/* subfooter */}
      <div className="bg-subFooter w-full py-1.5 flex items-center justify-center">
        <h3>All right reserved </h3>
      </div>
    </footer>
  );
};

export default Footer;
