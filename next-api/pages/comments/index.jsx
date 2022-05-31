import { useState } from "react";
export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };
  const submitCommnet = async () => {
    const res = await fetch("/api/comments", {
      method: "post",
      body: JSON.stringify({
        comment,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitCommnet}>Submit</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((el) => (
        <div key={el.id}>
          {el.id}
          {el.text}
        </div>
      ))}
    </>
  );
}
