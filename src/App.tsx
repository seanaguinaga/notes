import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { HasuraProvider } from "./components/HasuraProvider";
import { getNotes, Note } from "./data/notes";
import Home from "./pages/Home";
import ViewMessage from "./pages/ViewMessage";
/* Theme variables */
import "./styles/shame.css";
/* Theme variables */
import "./styles/variables.css";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    let notes = getNotes();
    setNotes(notes);
  }, []);

  const getNote = (id: string) => notes.find((note) => note.id === id);

  const deleteNote = (id: string) => {
    let filtered = notes.filter(function (note) {
      return note.id !== id;
    });
    setNotes(filtered);
  };

  const createNote = (note: Note) => {
    notes.push(note);
  };

  return (
    <HasuraProvider>
      <ErrorBoundary>
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/" exact={true}>
                <Redirect to="/home" />
              </Route>
              <Route
                path="/home"
                render={() => (
                  <Home
                    deleteNote={deleteNote}
                    createNote={createNote}
                    notes={notes}
                  />
                )}
                exact={true}
              />
              <Route path="/message/:id">
                <ViewMessage
                  deleteNote={deleteNote}
                  createNote={createNote}
                  getNote={getNote}
                />
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </ErrorBoundary>
    </HasuraProvider>
  );
};

export default App;
