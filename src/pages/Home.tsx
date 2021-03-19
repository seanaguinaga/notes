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
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { add, addSharp, createOutline } from "ionicons/icons";
import React, { useState } from "react";
import styled from "styled-components";
import MessageListItem from "../components/MessageListItem";
import { getMessages, Message } from "../data/messages";
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

const Home: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notes</IonTitle>
          <NonMobileIonButton slot="end" fill="clear">
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
          {messages.map((m) => (
            <MessageListItem key={m.id} message={m} />
          ))}
        </StyledIonlist>
      </IonContent>
      <MobileIonFab horizontal="end" vertical="bottom">
        <IonFabButton>
          <IonIcon ios={addSharp} md={add} />
        </IonFabButton>
      </MobileIonFab>
      <StyledIonFooter>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={createOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </StyledIonFooter>
    </IonPage>
  );
};

export default Home;
