import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPopover,
  IonRow,
} from "@ionic/react";
import { ellipsisVertical, ellipsisVerticalSharp, trash } from "ionicons/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Message } from "../data/messages";
import "./MessageListItem.css";

let CardText = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

interface MessageListCardProps {
  message: Message;
}

const MessageListCard: React.FC<MessageListCardProps> = ({ message }) => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });

  return (
    <IonCard>
      <IonCardHeader>
        <IonLabel>{message.date}</IonLabel>
        <IonCardTitle>{message.fromName}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </CardText>
      </IonCardContent>
      <IonRow className="ion-padding-horizontal ion-padding-bottom ion-justify-content-between">
        <IonButtons>
          <IonButton routerLink={`/message/${message.id}`}>Edit</IonButton>
        </IonButtons>
        <IonButtons>
          <IonButton
            onClick={(e: any) => {
              e.persist();
              setShowPopover({ showPopover: true, event: e });
            }}
          >
            <IonIcon md={ellipsisVerticalSharp} ios={ellipsisVertical} />
          </IonButton>
        </IonButtons>
      </IonRow>
      <IonPopover
        cssClass="my-custom-class"
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() =>
          setShowPopover({ showPopover: false, event: undefined })
        }
      >
        <IonList lines="none">
          <IonItem
            onClick={(e: any) => {
              e.persist();
              setShowPopover({ showPopover: false, event: e });
            }}
            button
            detail={false}
          >
            <IonLabel slot="start" color="danger">
              Delete
            </IonLabel>
            <IonIcon slot="end" color="danger" icon={trash} />
          </IonItem>
        </IonList>
      </IonPopover>
    </IonCard>
  );
};

export default MessageListCard;
