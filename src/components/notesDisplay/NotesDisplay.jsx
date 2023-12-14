import React from "react";
import styles from "./NotesDisplay.module.css";
import { formatMessageTimestamp } from "../../helpers/helper";

const NotesDisplay = ({ messages }) => {
  return (
    <div className={styles.displayContainer}>
      {messages.map((message, index) => (
        <div key={index} className={styles.messageContainer}>
          <div className={styles.content}>
            {message.content}
          </div>
          <div className={styles.dateTime}>
            {formatMessageTimestamp(message.timestamp)}
          </div>
        </div>
      ))}
    </div>
  );
};


export default NotesDisplay;




