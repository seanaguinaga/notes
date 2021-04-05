import React from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";
import { Note } from "../data/notes";
import { NotesListQuery } from "../graphql/generated/NotesListQuery.graphql";
import MessageListItem from "./MessageListItem";

const notesQuery = graphql`
  query NotesListQuery {
    notes_app_notes {
      id
      title
      text
      updated_at
      created_at
    }
  }
`;

type Props = {
  queryRef: PreloadedQuery<NotesListQuery>;
};

const NotesList: React.FC<Props> = ({ queryRef }) => {
  let data = usePreloadedQuery<NotesListQuery>(notesQuery, queryRef);

  return (
    <>
      {data.notes_app_notes.map((note) => (
        //@ts-expect-error
        <MessageListItem key={note.id as string} note={note as Note} />
      ))}
    </>
  );
};

export default NotesList;
