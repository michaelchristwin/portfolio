import { BsGithub } from "react-icons/bs";
import PFP from "../assets/ffebe056eb96e7fcdf064a0635ea1f4171126656.jpeg";

function Navbar() {
  return (
    <header
      className={`w-full fixed top-0 flex items-center justify-between p-3 bg-gray-300 dark:bg-white dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10`}
    >
      <img
        src={PFP}
        alt="pfp"
        className={`w-[43px] h-[43px] rounded-full border-2 border-[#62d5ff]`}
      />
      <nav className={`flex justify-between w-[30%]`}>
        <ul className={`flex w-fit space-x-4 text-black dark:text-white`}>
          <li>About</li>
          <li>Projects</li>
        </ul>
        <a
          href="http://github.com/michaelchristwin"
          target="_blank"
          className={`w-fit h-fit`}
          rel="noopener noreferrer"
        >
          <BsGithub size={`20px`} />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
