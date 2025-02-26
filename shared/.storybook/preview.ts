import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    // see https://github.com/storybookjs/storybook/issues/15012
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
