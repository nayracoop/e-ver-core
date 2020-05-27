import React from "react";
import { useTranslation } from "react-i18next";

const Comment = ({ comment }) => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t("comments.from")}: {comment.from} (somebody joined: {comment.isNew.toString()})</div>
      <div>{t("comments.time")}: {comment.time}</div>
      <div>{t("comments.comment")}: {comment.text}</div>
    </>
  );
};

export default Comment;
