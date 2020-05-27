import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import socketIOClient from "socket.io-client";

const CommentList = ({ props }) => {
  const [ioResponse, setIoRespose] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });
    const body = await response.text();
    console.log(body);
  };

  useEffect(() => {
    const socket = socketIOClient("");
    socket.on("PONG", (data) => {
      console.log(data);
      setIoRespose(data);
    });
  }, [setIoRespose]);

  return (
    <>
      <div>
        I'm a comment list. And I got this from the socket: {ioResponse}
      </div>
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
      <Comment />
    </>
  );
};

export default CommentList;
