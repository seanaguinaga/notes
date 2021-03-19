import {
  IonInput,
  IonItem,
  IonList,
  IonNote,
  IonProgressBar,
  IonTextarea,
} from "@ionic/react";
import { graphql, useQuery } from "magiql";
import React, { Suspense } from "react";
import styled from "styled-components";
import { NoteDetailQuery } from "../graphql/generated/NoteDetailQuery.graphql";
import ErrorBoundary from "./ErrorBoundary";
import NoteDetailTitleInput from "./NoteDetailTitleInput";

let TitleInput = styled(IonInput)`
  font-size: 22px;
  font-weight: 700;
`;

const NoteDetail: React.FC<{
  id: string;
}> = ({ id }) => {
  const { data, isLoading, error } = useQuery<NoteDetailQuery>(
    graphql`
      query NoteDetailQuery($id: uuid!) {
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

  if (error) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <IonProgressBar type="indeterminate" />;
  }

  return (
    <IonList>
      <IonItem>
        <IonNote>{timestamp}</IonNote>
      </IonItem>
      <Suspense fallback={<IonProgressBar type="indeterminate" />}>
        <ErrorBoundary>
          <NoteDetailTitleInput
            id={id}
            title={data?.notes_app_notes_by_pk?.title}
          />
        </ErrorBoundary>
        {/* <IonItem lines="none">
          <TitleInput
            value={data?.notes_app_notes_by_pk?.title}
            placeholder="Title"
            debounce={300}
            // onIonChange={(e) => setTitle(e.detail.value!)}
            autoCapitalize="true"
          />
        </IonItem> */}
      </Suspense>
      <IonItem lines="none">
        <IonTextarea
          autoGrow
          placeholder="Start typing..."
          // onIonChange={(e) => setText(e.detail.value!)}
          value={data?.notes_app_notes_by_pk?.text}
          debounce={400}
        ></IonTextarea>
      </IonItem>
    </IonList>
  );
};

export default NoteDetail;
