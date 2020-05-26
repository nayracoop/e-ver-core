import React from "react";
import i18next from "i18next";

import { useTranslation } from 'react-i18next';

const createSelectItems = () => {
  const items = [
    { value: "en", text: "EN" },
    { value: "es", text: "ES" },
  ];
  let options = [];

  for (let i = 0; i < items.length; i++) {
    options.push(
      <option key={i} value={items[i].value}>
        {items[i].text}
      </option>
    );
  }

  return options;
};

const Navbar = ({ props }) => {
  const { t } = useTranslation();

  const changeLang = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div>
      <span>{t("menu.language")}</span>
      <select type="select" onChange={changeLang} label="Language">
        {createSelectItems()}
      </select>
    </div>
  );
};

export default Navbar;
