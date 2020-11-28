/**
 * To learn more about storybook files
 * 
 * @see {@link https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78}
 */
module.exports = {
  stories: ['../src/stories/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@react-theming/storybook-addon',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  }
};
