module.exports = {
  schema: "./src/graphql/schema.graphql",
  src: "./src",
  artifactDirectory: "./src/graphql/generated",
  extensions: ["ts", "tsx", "js", "jsx", "graphql"],
  quiet: false,
  watch: true,
  language: "typescript",
  include: ["**"],
  exclude: ["**/node_modules/**", "**/__mocks__/**", `**/generated/**`],
};
