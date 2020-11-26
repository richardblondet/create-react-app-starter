/**
 * {@link https://github.com/Sambego/storybook-styles}
 * {@link https://github.com/storybookjs/storybook/tree/master/addons/viewport}
 */
import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemes } from '@react-theming/storybook-addon';
import preset from '../src/themes/preset';


addDecorator(withThemes(ThemeProvider, [preset]));