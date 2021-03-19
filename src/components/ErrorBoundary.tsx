import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonToolbar,
} from "@ionic/react";
import React, { MouseEventHandler } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <IonCard color="warning">
      <IonCardHeader>
        <IonCardTitle>Something went wrong:</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{error.message}</IonCardContent>
      <IonToolbar>
        <button onClick={resetErrorBoundary}>Try again</button>
      </IonToolbar>
    </IonCard>
  );
}

const ErrorBoundary: React.FC = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
