import '@fontsource/roboto';
import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import './preview.css';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs:{
      themes: themes.dark
    }
  },
  
};

export default preview;
