import { IonInput, IonItem } from "@ionic/react";
import { graphql, useMutation } from "magiql";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

let TitleInput = styled(IonInput)`
  font-size: 22px;
  font-weight: 700;
`;

const NoteDetailTitleInput: React.FC<{
  id: string;
  title: string | null | undefined;
}> = ({ id, title }) => {
  let [titleInput, setTitleInput] = useState(title);

  const [mutate] = useMutation(graphql`
    mutation NoteDetailTitleInputMutation(
      $id: uuid
      $changes: notes_app_notes_set_input
    ) {
      update_notes_app_notes(where: { id: { _eq: $id } }, _set: $changes) {
        returning {
          updated_at
          title
          id
        }
      }
    }
  `);

  useEffect(() => {
    if (titleInput !== title) {
      mutate({
        id,
        changes: { title: titleInput, updated_at: new Date().toISOString() },
      });
      console.log("mutated");
    }
  }, [id, mutate, title, titleInput]);

  return (
    <IonItem lines="none">
      <TitleInput
        placeholder="Title"
        debounce={600}
        value={titleInput}
        onIonChange={(e) => setTitleInput(e.detail.value!)}
        autoCapitalize="true"
      />
    </IonItem>
  );
};

export default NoteDetailTitleInput;
