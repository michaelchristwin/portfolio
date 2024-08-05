import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import Toggle from "react-toggle";
import "react-toggle/style.css";

function DarkmodeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, [localStorage, document]);
  return (
    <Toggle
      checked={dark}
      onChange={toggleTheme}
      className={`custom-classname ${className}`}
      icons={{
        checked: <IoMoon size={`12px`} className={`text-white`} />,
        unchecked: <IoSunny size={`12px`} className={`text-yellow-300`} />,
      }}
      aria-label="Dark mode toggle"
    />
  );
}

export default DarkmodeToggle;
