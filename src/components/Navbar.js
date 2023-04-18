import logo from "../assets/logo.png";
import { auth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);
  if (loading) return <h1>Loading...</h1>;
  if (!user) navigate("/login");
  if (user)
    return (
      <nav class="bg-white border-gray-200 shadow-xl">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src={logo} className="w-[100px] h-[100px]" alt="Logo" />
          </a>
          <div class="flex items-center md:order-2">
            <button
              type="button"
              class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              onClick={() => auth.signOut()}
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full"
                src={user.photoURL}
                alt="user photo"
              />
            </button>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
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
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border b rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white d  ">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
