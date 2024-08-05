import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, [localStorage]);
  return (
    <div className={`w-full`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
