/* eslint-disable no-console */
import React, { useState, useMemo, useEffect } from "react";
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

function useFormattedDate(isoString: string) {
  return useMemo(() => {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${year}.${month < 10 ? "0" : ""}${month}.${day < 10 ? "0" : ""}${day}`;

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;

    return `${formattedDate} ${formattedTime}`;
  }, [isoString]);
}

interface MessageProps {
  message: IMessage;
  onEdit: (id: string, newText: string) => void;
  index: number;
}

export default function Message({ message, onEdit, index }: MessageProps) {
  const formattedDate = useFormattedDate(message.date);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [newText, setNewText] = useState(message.text);

  const handleEdit = () => {
    setEditIsOpen(!editIsOpen);
    setDeleteIsOpen(false);
  };
  const handleEditClose = () => {
    setEditIsOpen(false);
    setInputCode("");
    setNewText(message.text);
  };
  const handleEditConfirm = () => {
    if (Number(inputCode) === message.code) {
      if (newText.length === 0) {
        alert("메세지를 작성해주세요!");
      } else {
        onEdit(message.id, newText);
        setEditIsOpen(false);
        setInputCode("");
        setNewText("");
      }
    } else {
      alert("코드를 정확히 입력해주세요!");
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewText(e.target.value);
  };

  const handleDelete = () => {
    setDeleteIsOpen(!deleteIsOpen);
    setEditIsOpen(false);
  };
  const handleDeleteClose = () => {
    setDeleteIsOpen(false);
  };
  const handleDeleteConfirm = async () => {
    if (Number(inputCode) === message.code) {
      setDeleteIsOpen(false);
      try {
        const messageRef = doc(db, "messages", message.id);
        await deleteDoc(messageRef);
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      alert("코드를 정확히 입력해주세요!");
    }
    setInputCode("");
  };

  const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "1px";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "1px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <Container index={index}>
      <TopContainer>
        <InfoContainer>
          <UserName>{message.name}</UserName>
          <MessageDate>{formattedDate}</MessageDate>
        </InfoContainer>
        <IconContainer>
          <RiEdit2Line className="icon" onClick={handleEdit} />
          <RiDeleteBin5Line className="icon" onClick={handleDelete} />
        </IconContainer>
      </TopContainer>
      <MessageText
        ref={textAreaRef}
        readOnly={!editIsOpen}
        onChange={handleTextChange}
        onInput={handleInput}
        value={editIsOpen ? newText : message.text}
        editIsOpen={editIsOpen}
      ></MessageText>

      {editIsOpen && (
        <ModalContainer>
          <h2 className="notification edit">수정하려면 코드를 입력해주세요!</h2>
          <div>
            <input
              className="input--code"
              type="password"
              placeholder="숫자 6자리"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
            />
            <button className="btn--confirm edit" onClick={handleEditConfirm}>
              수정
            </button>
            <button className="btn--cancel" onClick={handleEditClose}>
              취소
            </button>
          </div>
        </ModalContainer>
      )}

      {deleteIsOpen && (
        <ModalContainer>
          <h2 className="notification delete">삭제하려면 코드를 입력해주세요!</h2>
          <div>
            <input
              className="input--code"
              type="password"
              placeholder="숫자 6자리"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
            />
            <button className="btn--confirm delete" onClick={handleDeleteConfirm}>
              삭제
            </button>
            <button className="btn--cancel" onClick={handleDeleteClose}>
              취소
            </button>
          </div>
        </ModalContainer>
      )}
    </Container>
  );
}

const Container = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem 0.2rem 0.5rem;
  padding: 0.6rem 1rem;
  width: 44rem;
  border-radius: 1rem;
  background-color: ${({ index }) => (index % 2 === 0 ? "#f8f8f8" : "#f2f2f2")};
  @media (max-width: 768px) {
    width: 24rem;
    margin: 0 0 0.2rem 0;
  }
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
  padding-bottom: 0.2rem;
  border-bottom: 0.5px solid #d3d3d3;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;
const UserName = styled.div`
  margin-right: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #292929;
`;
const MessageDate = styled.div`
  margin-bottom: 0.1rem;
  font-size: 0.85rem;
  font-weight: 400;
  color: #838383;
`;
const IconContainer = styled.div`
  .icon {
    margin-left: 0.4rem;
    font-size: 1rem;
    color: #838383;
    transition: 0.2s;
    &:hover {
      color: #292929;
      transition: 0.2s;
    }
    &:active {
      color: #838383;
    }
    @media (max-width: 768px) {
      margin-left: 0.8rem;
      font-size: 1.1rem;
    }
  }
`;
const MessageText = styled.textarea<{ editIsOpen: boolean }>`
  display: flex;
  margin-top: 0.2rem;
  padding: 0.4rem 0.2rem;
  height: auto;
  border: ${({ editIsOpen }) => (editIsOpen ? "0.5px solid #d3d3d3;" : "none")};
  border-radius: 0.3rem;
  outline: none;
  background-color: transparent;
  color: #292929;
  font-size: 1rem;
  letter-spacing: -0.02rem;
  resize: none;
  overflow: auto;
  line-height: 1.2;
  min-height: 1.5em;
  &:focus {
    box-shadow: 0 0 2px 1.5px #c9d7be;
  }
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0.6rem;
  width: 100%;
  border-radius: 1rem;
  .notification {
    font-size: 0.85rem;
    font-weight: 400;
    &.edit {
      color: #838383;
    }
    &.delete {
      color: #d39393;
    }
  }
  .input--code {
    padding: 0.1rem 0.4rem;
    border: 0.5px solid #d3d3d3;
    border-radius: 0.3rem;
    outline: none;
    &:focus {
      box-shadow: 0 0 2px 1.5px #c9d7be;
    }
  }
  .btn--confirm {
    margin-left: 0.4rem;
    padding: 0.1rem 0.4rem;
    border: none;
    border-radius: 0.3rem;
    background-color: #c2cfb7;
    color: #ffffff;
    font-weight: 700;
    transition: 0.2s;
    &.edit {
      background-color: #c2cfb7;
      &:hover {
        background-color: #d5e1cb;
        transition: 0.2s;
      }
      &:active {
        background-color: #a4b298;
      }
    }
    &.delete {
      background-color: #e1aeae;
      &:hover {
        background-color: #e8c6c6;
        transition: 0.2s;
      }
      &:active {
        background-color: #cc9393;
      }
    }
  }
  .btn--cancel {
    margin-left: 0.4rem;
    padding: 0.1rem 0.4rem;
    border: none;
    border-radius: 0.3rem;
    background-color: #c1c1c1;
    color: #ffffff;
    font-weight: 700;
    transition: 0.2s;
    &:hover {
      background-color: #d1d1d1;
      transition: 0.2s;
    }
    &:active {
      background-color: #a3a3a3;
    }
  }
  @media (max-width: 768px) {
    width: 26rem;
  }
`;
