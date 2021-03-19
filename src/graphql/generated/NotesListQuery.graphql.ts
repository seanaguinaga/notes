/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type NotesListQueryVariables = {};
export type NotesListQueryResponse = {
    readonly notes_app_notes: ReadonlyArray<{
        readonly id: unknown;
    }>;
};
export type NotesListQuery = {
    readonly response: NotesListQueryResponse;
    readonly variables: NotesListQueryVariables;
};

/**QUERY**
query NotesListQuery {
  notes_app_notes {
    id
  }
}
****/


/*
query NotesListQuery {
  notes_app_notes {
    id
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
    "cacheID": "6b858cc55c9ac385687062848ddd2d2e",
    "id": null,
    "metadata": {},
    "name": "NotesListQuery",
    "operationKind": "query",
    "text": "query NotesListQuery {\n  notes_app_notes {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'eed0de554ab55ebc8a96a6a16bb74714';
(node as any).query = "query NotesListQuery {\n  notes_app_notes {\n    id\n  }\n}\n"
export default node;
