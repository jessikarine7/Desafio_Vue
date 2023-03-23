import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'
// import { makeDecorator } from '@storybook/addons'

// const customDecorator = makeDecorator({
//   name: 'store',
//   parameterName: 'name',
//   wrapper(...args) {
//     console.log(args)
//   }
// })

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
};

export const decorators = [
  withVuetify,
  // customDecorator
]
