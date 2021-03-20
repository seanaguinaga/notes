import {
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonNote,
} from "@ionic/react";
import React from "react";
import styled from "styled-components";
import { Note } from "../data/notes";
import "./MessageListItem.css";

let ListText = styled.p`
  overflow: hidden;
  max-width: 75ch;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface MessageListItemProps {
  note: Note;
  deleteNote: (id: string) => void;
}

const MessageListItem: React.FC<MessageListItemProps> = ({
  note,
  deleteNote,
}) => {
  let displayDate = new Date(note.updated_at || (note.created_at as number));

  function isDateBeforeToday(date: Date) {
    return new Date(date.toDateString()) < new Date(new Date().toDateString());
  }

  let timestamp = isDateBeforeToday(displayDate)
    ? `${displayDate.toLocaleDateString()}`
    : `${displayDate.toLocaleTimeString()}`;

  return (
    <IonItemSliding>
      <IonItem routerLink={`/message/${note.id}`} detail={false} lines="full">
        <IonLabel className="ion-text-wrap">
          <h2>
            {note.title ?? "Untitled"}
            <span className="date">
              <IonNote>{timestamp}</IonNote>
            </span>
          </h2>
          <ListText>{note.text ?? "Empty note"}</ListText>
        </IonLabel>
      </IonItem>
      <IonItemOptions side="end" onIonSwipe={() => deleteNote(note.id)}>
        <IonItemOption
          color="danger"
          expandable
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default MessageListItem;
