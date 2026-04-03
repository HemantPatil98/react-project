const { runtime } = require("./jest.config");

module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }], //to make jsx work with tests
  ],
};
