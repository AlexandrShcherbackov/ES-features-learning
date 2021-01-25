module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  "plugins": [
    ["@babel/plugin-transform-arrow-functions", { "spec": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
  ]

};
