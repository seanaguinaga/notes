/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type NotesListQueryVariables = {};
export type NotesListQueryResponse = {
    readonly notes_app_notes: ReadonlyArray<{
        readonly id: unknown;
        readonly title: string | null;
        readonly text: string | null;
        readonly updated_at: unknown | null;
        readonly created_at: unknown;
    }>;
};
export type NotesListQuery = {
    readonly response: NotesListQueryResponse;
    readonly variables: NotesListQueryVariables;
};



/*
query NotesListQuery {
  notes_app_notes {
    id
    title
    text
    updated_at
    created_at
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "notes_app_notes",
    "kind": "LinkedField",
    "name": "notes_app_notes",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updated_at",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_at",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NotesListQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NotesListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d830fbd957698f2e43965e03f7206148",
    "id": null,
    "metadata": {},
    "name": "NotesListQuery",
    "operationKind": "query",
    "text": "query NotesListQuery {\n  notes_app_notes {\n    id\n    title\n    text\n    updated_at\n    created_at\n  }\n}\n"
  }
};
})();
(node as any).hash = '951ea53e332fd05445650f67ddc8400b';
export default node;
