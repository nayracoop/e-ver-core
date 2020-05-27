import React from "react";
import { useTranslation } from "react-i18next";

const About = ({ props }) => {
  const { t } = useTranslation();

  return <div>{t("about")}</div>;
};

export default About;
