import { useRouter } from "next/router";
import { Popover } from "@headlessui/react";
import Cookies from "js-cookie";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import Image from "next/image";

const Appbar = () => {
  const router = useRouter();
  const token = Cookies.get("access_token") ?? false;

  const handleLogout = async () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    router.push("/aut/login");
  };

  return (
    <nav className="bg-white shadow-md border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} className=" h-16 w-16 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Real Estate
          </span>
        </Link>
        <div className="flex gap-6 items-center md:order-2">
          {/* profile */}
          <Popover className="relative">
            <Popover.Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1ZM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12Zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21Z" />
                </g>
              </svg>
            </Popover.Button>

            <Popover.Panel className="absolute right-[-30px] z-10">
              <div className="w-[180px] rounded-xl ">
                <div className="bg-gray-100 flex flex-col gap-3 uppercase shadow-lg p-3 mt-2">
                  <button
                    onClick={handleLogout}
                    className="flex gap-2 hover:bg-blue-300 p-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9l-4-4m4 4l-4 4m4-4H9"
                      />
                    </svg>
                    <p>Logout</p>
                  </button>
                  <button className="flex gap-2 hover:bg-blue-300 p-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 5V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v1C3.8 5 2 6.8 2 9v11c0 1.1.9 2 2 2h11.2l-2-2H4v-4h2v2h1v-2h5v-1H4V9c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v3h2V9c0-2.2-1.8-4-4-4m-2 0H8V4h4v1m-2 4l-2 2l2 2l2-2l-2-2m11.8 8.8l-3.6-3.6c-.2-.1-.4-.2-.6-.2h-2.8c-.4 0-.8.4-.8.8v2.8c0 .2.1.4.2.6l3.6 3.6c.1.1.3.2.6.2c.2 0 .4-.1.6-.2l2.8-2.8c.1-.1.2-.3.2-.6c0-.2-.1-.4-.2-.6M15.4 16c-.3 0-.6-.3-.6-.6s.3-.6.6-.6s.6.3.6.6s-.3.6-.6.6Z"
                      />
                    </svg>
                    <p>My Properties</p>
                  </button>
                  <button className="flex gap-2 hover:bg-blue-300 p-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66Zm-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36Z"
                      />
                    </svg>
                    <p>My Favoriete</p>
                  </button>
                  <button className="flex gap-2 hover:bg-blue-300 p-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          stroke="currentColor"
                          stroke-width="1.5"
                          d="M21 12a8.958 8.958 0 0 1-1.526 5.016A8.991 8.991 0 0 1 12 21a8.991 8.991 0 0 1-7.474-3.984A9 9 0 1 1 21 12Z"
                        />
                        <path
                          fill="currentColor"
                          d="M13.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 9h-1.5ZM12 10.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 11.75v-1.5ZM10.75 9c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9h1.5ZM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25v1.5ZM5.166 17.856l-.719-.214l-.117.392l.267.31l.569-.488Zm13.668 0l.57.489l.266-.31l-.117-.393l-.719.214ZM9 15.75h6v-1.5H9v1.5Zm0-1.5a4.752 4.752 0 0 0-4.553 3.392l1.438.428A3.252 3.252 0 0 1 9 15.75v-1.5Zm3 6a8.23 8.23 0 0 1-6.265-2.882l-1.138.977A9.73 9.73 0 0 0 12 21.75v-1.5Zm3-4.5c1.47 0 2.715.978 3.115 2.32l1.438-.428A4.752 4.752 0 0 0 15 14.25v1.5Zm3.265 1.618A8.23 8.23 0 0 1 12 20.25v1.5a9.73 9.73 0 0 0 7.403-3.405l-1.138-.977Z"
                        />
                      </g>
                    </svg>
                    <p>My Profile</p>
                  </button>
                </div>
              </div>

              <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
          </Popover>
          {true && (
            <Link
              href="property/add"
              className="text-white flex item-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20a10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16z"
                />
              </svg>
              Add Property
            </Link>
          )}

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li onClick={() => router.push("/filter")}>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                House
              </a>
            </li>
            <li onClick={() => router.push("/filter")}>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Land
              </a>
            </li>
            <li onClick={() => router.push("/filter")}>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Flat
              </a>
            </li>
            <li onClick={() => router.push("/filter")}>
              <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                Apartment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Appbar;
