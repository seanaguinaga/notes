/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type NoteListItemQueryVariables = {
    id: unknown;
};
export type NoteListItemQueryResponse = {
    readonly notes_app_notes_by_pk: {
        readonly created_at: unknown;
        readonly title: string | null;
        readonly text: string | null;
        readonly updated_at: unknown | null;
        readonly id: unknown;
    } | null;
};
export type NoteListItemQuery = {
    readonly response: NoteListItemQueryResponse;
    readonly variables: NoteListItemQueryVariables;
};

/**QUERY**
query NoteListItemQuery(
  $id: uuid!
) {
  notes_app_notes_by_pk(id: $id) {
    created_at
    title
    text
    updated_at
    id
  }
}
****/


/*
query NoteListItemQuery(
  $id: uuid!
) {
  notes_app_notes_by_pk(id: $id) {
    created_at
    title
    text
    updated_at
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "notes_app_notes",
    "kind": "LinkedField",
    "name": "notes_app_notes_by_pk",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_at",
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
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NoteListItemQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteListItemQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "27cbebc1071f796ae66c85ffa936625d",
    "id": null,
    "metadata": {},
    "name": "NoteListItemQuery",
    "operationKind": "query",
    "text": "query NoteListItemQuery(\n  $id: uuid!\n) {\n  notes_app_notes_by_pk(id: $id) {\n    created_at\n    title\n    text\n    updated_at\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '79e13913e860a6a72429b2520d901d01';
(node as any).query = "query NoteListItemQuery(\n  $id: uuid!\n) {\n  notes_app_notes_by_pk(id: $id) {\n    created_at\n    title\n    text\n    updated_at\n    id\n  }\n}\n"
export default node;
