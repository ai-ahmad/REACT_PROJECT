import { useState } from "react";
import ModalNavigation from "../ModalNavigation/ModalNavigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between container max-w-7xl mx-auto py-9 items-center">
      <h1 className="font-bold text-[34px] text-primary">Travelulu</h1>
      <div className="Toggle " onClick={() => setOpen(!open)}>
        <img src="/icons/menu.svg" alt="" />
      </div>
      {open && <ModalNavigation open={open} />}
    </nav>
  );
};

export default Navbar;
