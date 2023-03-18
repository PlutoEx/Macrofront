import {ThemeProvider} from "@emotion/react";
import { theme } from '../src'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const WithThemeDecorator = (storyFn) => {
  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
}

export const decorators = [WithThemeDecorator]
