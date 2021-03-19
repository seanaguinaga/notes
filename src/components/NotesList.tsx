import { IonList, IonProgressBar } from "@ionic/react";
import { graphql, useQuery } from "magiql";
import React from "react";
import styled from "styled-components";
import { NotesListQuery } from "../graphql/generated/NotesListQuery.graphql";
import NoteListItem from "./NoteListItem";

let StyledIonlist = styled(IonList)`
  margin: auto;
  max-width: 1024px;
`;

const NotesList: React.FC<{ deleteNote: (id: string) => void }> = ({
  deleteNote,
}) => {
  const { data, isLoading, error } = useQuery<NotesListQuery>(graphql`
    query NotesListQuery {
      notes_app_notes {
        id
      }
    }
  `);
  if (error) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <IonProgressBar type="indeterminate" />;
  }

  return (
    <StyledIonlist>
      {data?.notes_app_notes?.map((note) => (
        <NoteListItem
          key={note.id as string}
          id={note.id as string}
          deleteNote={deleteNote}
        />
      ))}
    </StyledIonlist>
  );
};

export default NotesList;
