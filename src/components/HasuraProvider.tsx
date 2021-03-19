import { GraphQLClient, GraphQLClientProvider } from "magiql";
import React from "react";

export const HasuraProvider: React.FC = ({ children }) => {
  let client = new GraphQLClient({
    endpoint: "https://takehome.hasura.app/v1/graphql",
    fetchOptions: {
      headers: { "x-hasura-role": "anonymous" },
    },
    queryConfig: {
      queries: {
        suspense: true,
      },
    },
  });
  return (
    <GraphQLClientProvider client={client}>{children}</GraphQLClientProvider>
  );
};
