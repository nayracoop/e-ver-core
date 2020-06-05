import React from "react";
import LanguageSelector from "./LanguageSelector";
import TimeZoneSelector from "./TimeZoneSelector";

const Navbar = () => {
  return (
    <>
      <LanguageSelector />
      <TimeZoneSelector />
    </>
  );
};

export default Navbar;
