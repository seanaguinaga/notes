import {
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonNote,
} from "@ionic/react";
import { graphql, useQuery } from "magiql";
import React from "react";
import styled from "styled-components";
import { NoteListItemQuery } from "../graphql/generated/NoteListItemQuery.graphql";
import "./MessageListItem.css";

let ListText = styled.p`
  overflow: hidden;
  max-width: 75ch;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface NoteListItemProps {
  id: string;
  deleteNote: (id: string) => void;
}

const NoteListItem: React.FC<NoteListItemProps> = ({ id, deleteNote }) => {
  const { data, isLoading, error } = useQuery<NoteListItemQuery>(
    graphql`
      query NoteListItemQuery($id: uuid!) {
        notes_app_notes_by_pk(id: $id) {
          created_at
          title
          text
          updated_at
          id
        }
      }
    `,
    {
      variables: { id },
    }
  );

  let displayDate = new Date(
    (data?.notes_app_notes_by_pk?.updated_at as string) ||
      (data?.notes_app_notes_by_pk?.created_at as string)
  );

  function isDateBeforeToday(date: Date) {
    return new Date(date.toDateString()) < new Date(new Date().toDateString());
  }

  let timestamp = isDateBeforeToday(displayDate)
    ? `${displayDate.toLocaleDateString()}`
    : `${displayDate.toLocaleTimeString()}`;

  return (
    <IonItemSliding>
      <IonItem
        routerLink={`/message/${data?.notes_app_notes_by_pk?.id as string}`}
        detail={false}
        lines="full"
      >
        <IonLabel className="ion-text-wrap">
          <h2>
            {data?.notes_app_notes_by_pk?.title ?? "Untitled"}
            <span className="date">
              <IonNote>{timestamp}</IonNote>
            </span>
          </h2>
          <ListText>
            {data?.notes_app_notes_by_pk?.text ?? "Empty note"}
          </ListText>
        </IonLabel>
      </IonItem>
      <IonItemOptions
        side="end"
        onIonSwipe={() => deleteNote(data?.notes_app_notes_by_pk?.id as string)}
      >
        <IonItemOption
          color="danger"
          expandable
          onClick={() => deleteNote(data?.notes_app_notes_by_pk?.id as string)}
        >
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default NoteListItem;
