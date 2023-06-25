/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getDoc, onSnapshot, query, orderBy, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import Message from "./Message";
import AddMessage from "./AddMessage";

interface IMessage {
  id: string;
  key: string;
  name: string;
  date: string;
  text: string;
  code: number;
}

export default function MessageList() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as IMessage),
      );
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  const editText = async (id: string, newText: string) => {
    try {
      const messageRef = doc(db, "messages", id);
      await updateDoc(messageRef, { text: newText });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Container>
      {messages.map((message) => (
        <Message key={message.id} message={message} onEdit={editText} />
      ))}
      <AddMessage />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 14rem;
  @media (max-width: 768px) {
    min-height: 10rem;
  }
`;
