const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
      config.resolve.alias = {
        "@assets": path.resolve(__dirname, "../assets"),
      };

      return config;
  }
}
