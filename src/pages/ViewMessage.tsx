import {
  IonActionSheet,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonLoading,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import {
  add,
  addSharp,
  createOutline,
  ellipsisHorizontalCircleOutline,
  ellipsisVerticalSharp,
} from "ionicons/icons";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import NoteDetail from "../components/NoteDetail";
import { Note } from "../data/notes";
import { media } from "../styles/media";
import "./ViewMessage.css";

let StyledIonContent = styled(IonContent)`
  align-self: center;
  max-width: 1024px;
`;

let NonMobileIonButtons = styled(IonButtons)`
  .ios {
    display: none;
  }

  .md {
    display: none;

    ${media.sm`
      display: block;
    `}
  }
`;

let StyledIonFooter = styled(IonFooter)`
  .md {
    display: none;
  }
`;

let MobileIonFab = styled(IonFab)`
  .ios {
    display: none;
  }

  .md {
    ${media.sm`
      display: none;
    `}
  }
`;

let MobileAndIosButton = styled(IonButton)`
  .md {
    ${media.sm`
      display: none;
    `}
  }
`;

const ViewMessage: React.FC<{
  deleteNote: (id: string) => void;
  createNote: (note: Note) => void;
  getNote: (id: string) => Note | undefined;
}> = ({ deleteNote, createNote, getNote }) => {
  const [note, setNote] = useState<Note>();
  const params = useParams<{ id: string }>();

  const [title, setTitle] = useState<string | null>();

  const [text, setText] = useState<string | null>();

  useEffect(() => {
    const note = getNote(params.id);
    setNote(note);
    setTitle(note?.title);
    setText(note?.text);
  }, [getNote, params.id]);

  let titleInputRef = useRef<HTMLIonInputElement | null>(null);

  let textAreaRef = useRef<HTMLIonTextareaElement | null>(null);

  let history = useHistory();

  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Notes" defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <MobileAndIosButton
              onClick={() => setShowActionSheet(true)}
              slot="end"
              fill="clear"
            >
              <IonIcon
                ios={ellipsisHorizontalCircleOutline}
                md={ellipsisVerticalSharp}
              />
            </MobileAndIosButton>
          </IonButtons>
          <NonMobileIonButtons slot="end">
            <IonButton
              onClick={() => {
                deleteNote(params.id);
                if (history.length > 1) {
                  history.goBack();
                } else {
                  history.replace("/home");
                }
              }}
              color="danger"
              fill="clear"
            >
              <IonLabel>Delete</IonLabel>
            </IonButton>
          </NonMobileIonButtons>
          <IonActionSheet
            isOpen={showActionSheet}
            onDidDismiss={() => setShowActionSheet(false)}
            buttons={[
              {
                text: "Delete",
                role: "destructive",
                handler: () => {
                  deleteNote(params.id);
                  if (history.length > 1) {
                    history.goBack();
                  } else {
                    history.replace("/home");
                  }
                },
              },

              {
                text: "Cancel",
                role: "cancel",
                handler: () => {
                  console.log("Cancel clicked");
                },
              },
            ]}
          ></IonActionSheet>
        </IonToolbar>
      </IonHeader>
      <StyledIonContent fullscreen>
        <Suspense fallback={<IonLoading isOpen />}>
          <NoteDetail id={params.id} />
        </Suspense>
        {/* {note ? (
          <IonList>
            <IonItem lines="none">
              <TitleInput
                value={title}
                ref={titleInputRef}
                placeholder="Title"
                debounce={300}
                onIonChange={(e) => setTitle(e.detail.value!)}
                autoCapitalize="true"
              />
            </IonItem>
            <IonItem lines="none">
              <IonTextarea
                autoGrow
                placeholder="Start typing..."
                onIonChange={(e) => setText(e.detail.value!)}
                value={text}
                debounce={400}
                ref={textAreaRef}
              ></IonTextarea>
            </IonItem>
          </IonList>
        ) : (
          <div>Message not found</div>
        )} */}
      </StyledIonContent>
      <MobileIonFab horizontal="end" vertical="bottom">
        <IonFabButton>
          <IonIcon ios={addSharp} md={add} />
        </IonFabButton>
      </MobileIonFab>
      <StyledIonFooter>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton
              onClick={() => {
                createNote({
                  id: "9",
                  title: null,
                  text: null,
                  created_at: Date.now(),
                  updated_at: null,
                });
                history.replace("/message/9");
              }}
            >
              <IonIcon icon={createOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </StyledIonFooter>
    </IonPage>
  );
};

export default ViewMessage;
