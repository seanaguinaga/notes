/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type NoteDetailQueryVariables = {
    id: unknown;
};
export type NoteDetailQueryResponse = {
    readonly notes_app_notes_by_pk: {
        readonly created_at: unknown;
        readonly title: string | null;
        readonly text: string | null;
        readonly updated_at: unknown | null;
        readonly id: unknown;
    } | null;
};
export type NoteDetailQuery = {
    readonly response: NoteDetailQueryResponse;
    readonly variables: NoteDetailQueryVariables;
};

/**QUERY**
query NoteDetailQuery(
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
query NoteDetailQuery(
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
    "name": "NoteDetailQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NoteDetailQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "49790e4d9c38e2ba2797a90aadbcf089",
    "id": null,
    "metadata": {},
    "name": "NoteDetailQuery",
    "operationKind": "query",
    "text": "query NoteDetailQuery(\n  $id: uuid!\n) {\n  notes_app_notes_by_pk(id: $id) {\n    created_at\n    title\n    text\n    updated_at\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'eb420427ace0a2c1a44df6e2d0fcc76e';
(node as any).query = "query NoteDetailQuery(\n  $id: uuid!\n) {\n  notes_app_notes_by_pk(id: $id) {\n    created_at\n    title\n    text\n    updated_at\n    id\n  }\n}\n"
export default node;
