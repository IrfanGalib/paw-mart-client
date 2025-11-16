import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiPawPrint } from "react-icons/pi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#002855] ">
      <footer className="footer sm:footer-horizontal text-neutral-content p-10 max-w-7xl mx-auto">
        <aside>
          <div className="text-7xl flex justify-center items-center gap-2">
            <PiPawPrint />
            <h2 className="text-white font-bold text-3xl">PawMart</h2>
          </div>

          <p>
            PawMart connects local pet owners
            <br />
            and buyers for adoption and pet care products.
          </p>
        </aside>
        <div className="text-start">
          <h6 className="footer-title">Links</h6>
          <ul className="menu menu-horizontal text-gray-300 px-1 font-bold flex-col">
            <Link to="/">
              {" "}
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/">
              {" "}
              <li>
                <a>Contact</a>
              </li>
            </Link>
            <Link to="/">
              {" "}
              <li>
                <a>Terms</a>
              </li>
            </Link>
          </ul>
        </div>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="text-xl">
              <FaXTwitter />
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <div>
        <aside className="footer sm:footer-horizontal footer-center bg-[#001F41] font-semibold text-white  p-4">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            PawMart
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
