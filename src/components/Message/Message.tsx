/* eslint-disable no-console */
import React, { useState } from "react";
import styled from "styled-components";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";

interface IMessage {
  id: string;
  name: string;
  date: string;
  text: string;
  code: number;
}

interface MessageProps {
  message: IMessage;
  onEdit: (id: string, newText: string) => void;
}

export default function Message({ message, onEdit }: MessageProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [newText, setNewText] = useState("");

  const handleEdit = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setInputCode("");
  };

  const handleModalConfirm = () => {
    if (Number(inputCode) === message.code) {
      setModalIsOpen(false);
      onEdit(message.id, newText);
    } else {
      alert("코드를 정확히 입력해주세요!");
    }
    setInputCode("");
    setNewText("");
  };

  const handleDelete = async () => {
    try {
      const messageRef = doc(db, "messages", message.id);
      await deleteDoc(messageRef);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Container>
      <TopContainer>
        <InfoContainer>
          <UserName>{message.name}</UserName>
          <Date>{message.date}</Date>
        </InfoContainer>
        <IconContainer>
          <RiEdit2Line className="icon" onClick={handleEdit} />
          <RiDeleteBin5Line className="icon" onClick={handleDelete} />
        </IconContainer>
      </TopContainer>
      <MessageText>{message.text}</MessageText>

      {modalIsOpen && (
        <div>
          <h2>Enter your code</h2>
          <input type="text" value={inputCode} onChange={(e) => setInputCode(e.target.value)} />
          <h2>Enter new text</h2>
          <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={handleModalConfirm}>Confirm</button>
          <button onClick={handleModalClose}>Close</button>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 2.2rem;
  width: 48rem;
  border-top: 0.5px solid #dddddd;
  border-bottom: 0.5px solid #dddddd;
  @media (max-width: 768px) {
    width: 26rem;
  }
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;
const UserName = styled.div`
  margin-right: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #292929;
  letter-spacing: 0.08rem;
`;
const Date = styled.div`
  margin-bottom: 0.1rem;
  font-size: 0.95rem;
  font-weight: 400;
  color: #838383;
`;
const IconContainer = styled.div`
  .icon {
    margin-left: 0.4rem;
    font-size: 1rem;
    color: #292929;
    transition: 0.2s;
    &:hover {
      color: #4846be;
      transition: 0.2s;
    }
  }
`;
const MessageText = styled.div`
  display: flex;
  margin-top: 0.2rem;
  padding-left: 0.15rem;
`;
