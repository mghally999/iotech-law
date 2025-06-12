import Social from "../components/Social";
import config from "../../config/config.json";
import menu from "../../config/menu.json";
import social from "../../config/social.json";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;
  const { footer } = menu;

  return (
    <footer className="bg-[#4B2615] text-white pt-12">
      <div className="container max-w-[1400px] mx-auto px-6">
        {/* Top: Subscribe + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          {/* Empty placeholder on left to simulate spacing */}
          <div className="w-full md:w-1/2 hidden md:block" />

          {/* Subscribe Form + Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-1/2 justify-end">
            {/* Subscribe box */}
            <div className="flex flex-col md:flex-row items-center justify-start gap-6 w-full md:w-auto">
              {/* Email Input & Subscribe */}
              <div className="flex items-center overflow-hidden bg-white">
                <input
                  type="email"
                  placeholder="Email"
                  className="pl-4 text-sm text-black w-full h-full outline-none"
                />
                <button className="bg-[#4B2615] text-white text-sm px-4 py-1 rounded-[7px] m-1">
                  Subscribe
                </button>
              </div>

              {/* Contact Text + Social */}
              <div className="flex items-center gap-6">
                <span className="text-white text-sm">Contacts</span>
                <Social
                  source={social}
                  className="flex gap-4 text-white text-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-t border-white/30 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 text-sm">
          {/* Footer Menu */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
            {footer &&
              Array.isArray(footer) &&
              footer.map((col) =>
                col.menu?.map((item) => (
                  <li key={item.text}>
                    <Link href={item.url} className="hover:underline">
                      {item.text}
                    </Link>
                  </li>
                )),
              )}
          </ul>

          {/* Copyright */}
          <p className="text-center md:text-right">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
