import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import socketIOClient from "socket.io-client";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

const randomName = uniqueNamesGenerator({
  dictionaries: [adjectives, colors, animals],
  length: 2,
});
const socket = socketIOClient(`?user=${randomName}`);

const CommentList = ({ props }) => {
  const [commentList, setCommentList] = useState(new Set());
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    socket.emit("sendMessage", {
      from: randomName,
      text: comment,
    });
    setComment("");
  };

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      console.log("receiveMessage -- client side", message);
      setCommentList((prev) => new Set(prev.add(message)));
    });

    socket.on("joinMessage", (message) => {
      console.log("receiveMessage -- client side", message);
      setCommentList((prev) => new Set(prev.add(message)));
    });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <strong>Post comment:</strong>
        </p>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {[...commentList.values()].map((comment) => (
        <Comment comment={comment} />
      ))}
    </>
  );
};

export default CommentList;
