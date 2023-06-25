/* eslint-disable no-console */
import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddMessage() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const codeNumber = Number(code);
    if (isNaN(codeNumber)) {
      alert("숫자 6자리를 입력해주세요!");
      return;
    }
    try {
      const currentDate = new Date().toISOString();

      await addDoc(collection(db, "messages"), {
        name,
        code: codeNumber,
        text,
        date: currentDate,
      });

      setName("");
      setCode("");
      setText("");
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Code" value={code} onChange={(e) => setCode(e.target.value)} />
        <input type="text" placeholder="Message" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
