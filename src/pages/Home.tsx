import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, addSharp, createOutline } from "ionicons/icons";
import React, { Suspense } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import MessageListItem from "../components/MessageListItem";
import NotesList from "../components/NotesList";
import { Note } from "../data/notes";
import { media } from "../styles/media";
import "./Home.css";

let StyledIonlist = styled(IonList)`
  margin: auto;
  max-width: 1024px;
`;

let NonMobileIonButton = styled(IonButton)`
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

let StyledIonFooter = styled(IonFooter)`
  .md {
    display: none;
  }
`;

const Home: React.FC<{
  notes: Note[];
  deleteNote: (id: string) => void;
  createNote: (note: Note) => void;
}> = ({ notes, deleteNote, createNote }) => {
  let history = useHistory();

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notes</IonTitle>
          <NonMobileIonButton
            onClick={() => {
              createNote({
                id: "12",
                title: null,
                text: null,
                created_at: Date.now(),
                updated_at: null,
              });
              history.push("/message/12");
            }}
            slot="end"
            fill="clear"
          >
            <IonIcon slot="start" icon={addSharp} />
            <IonLabel>Create</IonLabel>
          </NonMobileIonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen id="home-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <StyledIonlist>
          <Suspense fallback={<IonLoading isOpen />}>
            <NotesList />
          </Suspense>
          {notes.map((note) => (
            <MessageListItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
            />
          ))}
        </StyledIonlist>
      </IonContent>
      <MobileIonFab horizontal="end" vertical="bottom">
        <IonFabButton
          onClick={() => {
            createNote({
              id: "12",
              title: null,
              text: null,
              created_at: Date.now(),
              updated_at: null,
            });
            history.push("/message/12");
          }}
        >
          <IonIcon ios={addSharp} md={add} />
        </IonFabButton>
      </MobileIonFab>
      <StyledIonFooter>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton
              onClick={() => {
                createNote({
                  id: "12",
                  title: null,
                  text: null,
                  created_at: Date.now(),
                  updated_at: null,
                });
                history.push("/message/12");
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

export default Home;
