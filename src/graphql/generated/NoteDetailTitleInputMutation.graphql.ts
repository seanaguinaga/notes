/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type notes_app_notes_set_input = {
    created_at?: unknown | null;
    id?: unknown | null;
    text?: string | null;
    title?: string | null;
    updated_at?: unknown | null;
};
export type NoteDetailTitleInputMutationVariables = {
    id?: unknown | null;
    changes?: notes_app_notes_set_input | null;
};
export type NoteDetailTitleInputMutationResponse = {
    readonly update_notes_app_notes: {
        readonly returning: ReadonlyArray<{
            readonly updated_at: unknown | null;
            readonly title: string | null;
            readonly id: unknown;
        }>;
    } | null;
};
export type NoteDetailTitleInputMutation = {
    readonly response: NoteDetailTitleInputMutationResponse;
    readonly variables: NoteDetailTitleInputMutationVariables;
};

/**QUERY**
mutation NoteDetailTitleInputMutation(
  $id: uuid
  $changes: notes_app_notes_set_input
) {
  update_notes_app_notes(where: {id: {_eq: $id}}, _set: $changes) {
    returning {
      updated_at
      title
      id
    }
  }
}
****/


/*
mutation NoteDetailTitleInputMutation(
  $id: uuid
  $changes: notes_app_notes_set_input
) {
  update_notes_app_notes(where: {id: {_eq: $id}}, _set: $changes) {
    returning {
      updated_at
      title
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "changes"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_set",
        "variableName": "changes"
      },
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "id"
              }
            ],
            "kind": "ObjectValue",
            "name": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "notes_app_notes_mutation_response",
    "kind": "LinkedField",
    "name": "update_notes_app_notes",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "notes_app_notes",
        "kind": "LinkedField",
        "name": "returning",
        "plural": true,
        "selections": [
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
            "name": "title",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "NoteDetailTitleInputMutation",
    "selections": (v2/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "NoteDetailTitleInputMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ec7d2237a0e820b7e8d7d0ca5ca6e409",
    "id": null,
    "metadata": {},
    "name": "NoteDetailTitleInputMutation",
    "operationKind": "mutation",
    "text": "mutation NoteDetailTitleInputMutation(\n  $id: uuid\n  $changes: notes_app_notes_set_input\n) {\n  update_notes_app_notes(where: {id: {_eq: $id}}, _set: $changes) {\n    returning {\n      updated_at\n      title\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b4b3b006abc3f2471fe8dd649322472d';
(node as any).query = "mutation NoteDetailTitleInputMutation(\n  $id: uuid\n  $changes: notes_app_notes_set_input\n) {\n  update_notes_app_notes(where: {id: {_eq: $id}}, _set: $changes) {\n    returning {\n      updated_at\n      title\n      id\n    }\n  }\n}\n"
export default node;
