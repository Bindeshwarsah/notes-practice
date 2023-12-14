import React, { useState } from "react";
import styles from "./NotesInput.module.css";
import disabled_send from "../../assets/icons/disabled_send_icon.svg";
import enabled_send from "../../assets/icons/enabled_send_icon.svg";

const NotesInput = ({ onSendMessage }) => {
  const [messageInput, setMessageInput] = useState("");

  const sendMessage = () => {
    const trimmedMessage = messageInput.trim();
    if (trimmedMessage === "") return;

    onSendMessage(trimmedMessage);
    setMessageInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.notesInputContainer}>
      <textarea
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Enter your text here..........."
        onKeyDown={handleKeyDown}
        className={styles.notesTextArea}
      />
      <div
        onClick={sendMessage}
        disabled={messageInput.trim() === ""}
        style={{
          backgroundImage: `url(${messageInput.trim() === "" ? disabled_send : enabled_send})`,
        }}
        className={styles.sendBtn}
      ></div>
    </div>
  );
};

export default NotesInput;
