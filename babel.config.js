const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      regenerator: true,
      corejs: 3,
      helper: true,
    },
  ],
];
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: false,
      },
    ],
  ],
  plugins,
};
