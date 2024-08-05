import DarkmodeToggle from "./dark-mode-toggle";

function Footer() {
  return (
    <footer className={`w-full h-[40px] relative bg-neutral-800 block p-3`}>
      <p className={`font-normal text-[14px] absolute top-3 left-[40%]`}>
        © 2022-2024 Michael Christwin, All rights reserved.
      </p>
      <DarkmodeToggle className={`float-end`} />
    </footer>
  );
}

export default Footer;
