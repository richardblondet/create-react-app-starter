import { darken, lighten, modularScale, shade, tint } from 'polished';
import { FontFamily, PresetTheme, Space, ThemeColors } from '../store/types';
// import { generatePalette } from '../store/utils';

/**
 * Naming keeps getting harder
 * 
 * I read Andy Barnes
 * @see {@link https://medium.com/swlh/colour-variable-names-that-scale-28663ae04052}
 * And also Tom Osborne
 * @see {@link https://www.viget.com/articles/naming-colors/}
 * about naming color variables and I share very similar point of views.
 * Because this is a theme base system, I think having a palette with custom
 * names for its colors makes the theme unique or allows it to have its own
 * personality.
 * 
 * So this theme personality is inspired in palette 6
 * @see {@link https://www.happyhues.co/palettes/6}
 */
export const palette = {
  blueRoyal: '#6246EA',
  shark: '#2b2c34',
  darkWhite: '#fffffe',
  red: '#e96d62',
  yellow: '#f7c377',
  green: '#65d0a6',
  blue: '#17a2b8',
};
/**
 * After defining a palette, we should then 
 * decide how this colors will be apply throughout the 
 * theme. But how do we know? Well...
 * 
 * ...what colors should a theme have?
 * I guess it comes down to the attrs of the system/app/etc. 
 * - A primary color (cta, forward thinking/actions)
 * - A lightened primary color 
 * - A darkened primary color
 * - A secondary color (headlines, strongs, strokes:focus, neutral thinking)
 * - A lightened secondary color (highlights)
 * - A darkened secondary color (links)
 * - A tertiary color (paragraphs)
 * - A red color for danger and errors
 * - A yellow color for warnings
 * - A green for success
 * - A blue for information
 * - 9 black/shades colors from primary (overlays, quotes, addrs, transparents, etc)
 * - 9 white/tints colors from primary (background tones, utils)
 * - 9 black/shades colors from secondary (overlays, quotes, addrs, transparents, etc)
 * - 9 white/tints colors secondary (background tones)
 * 
 * ...I guess. So, the <ThemeColors> interface should reflect this spec.
 * 
 * P.s.
 * Some of these colors can be generated based on others using
 * tools like 'polished' to darken/lighten. The 9 white and 9 black
 * colors can be generated from the primary and secondary colors using
 * shade/tint
 * 
 * We can use the @react-theming/storybook-addon to preview and tweak
 * values of the theme
 */
const {
  blueRoyal: primary,
  shark: secondary,
  darkWhite: white,
  red,
  yellow,
  green,
  blue,
} = palette;

// /** Created a type spec for the colors */
export const colors: ThemeColors = {
  primary,
  secondary,
  white,
  red,
  yellow,
  green,
  blue,
  'tertiary': lighten(0.25, secondary),
  'primary-lightened': lighten(0.25, primary),
  'primary-darkened': darken(0.25, primary),
  'secondary-lightened': lighten(0.25, secondary),
  'secondary-darkened': darken(0.25, secondary),
  // 'primary-shades': generatePalette(primary, shade),
  'primary-shades': {
    100: shade(1*0.1, primary),
    200: shade(2*0.1, primary),
    300: shade(3*0.1, primary),
    400: shade(4*0.1, primary),
    500: shade(5*0.1, primary),
    600: shade(6*0.1, primary),
    700: shade(7*0.1, primary),
    800: shade(8*0.1, primary),
    900: shade(9*0.1, primary)
  },
  // 'primary-tints': generatePalette(primary, tint, 0.115),
  'primary-tints': {
    100: tint(9*0.1, primary),
    200: tint(8*0.1, primary),
    300: tint(7*0.1, primary),
    400: tint(6*0.1, primary),
    500: tint(5*0.1, primary),
    600: tint(4*0.1, primary),
    700: tint(3*0.1, primary),
    800: tint(2*0.1, primary),
    900: tint(1*0.1, primary)
  },
  // 'secondary-shades': generatePalette(lighten(0.25, secondary), shade, 0.05),
  'secondary-shades': {
    100: shade(1*0.05, lighten(0.15, secondary)),
    200: shade(2*0.05, lighten(0.15, secondary)),
    300: shade(3*0.05, lighten(0.15, secondary)),
    400: shade(4*0.05, lighten(0.15, secondary)),
    500: shade(5*0.05, lighten(0.15, secondary)),
    600: shade(6*0.05, lighten(0.15, secondary)),
    700: shade(7*0.05, lighten(0.15, secondary)),
    800: shade(8*0.05, lighten(0.15, secondary)),
    900: shade(9*0.05, lighten(0.15, secondary))
  },
  // 'secondary-tints': generatePalette(lighten(0.25, secondary), tint)
  'secondary-tints': {
    100: tint(9*0.1, secondary),
    200: tint(8*0.1, secondary),
    300: tint(7*0.1, secondary),
    400: tint(6*0.1, secondary),
    500: tint(5*0.1, secondary),
    600: tint(4*0.1, secondary),
    700: tint(3*0.1, secondary),
    800: tint(2*0.1, secondary),
    900: tint(1*0.1, secondary)
  }
};

/** Spacing with understandable keys */
export const space: Space = {
  none: 0,
  xs: 4,
  s: 8,
  m: 16,
  l: 32,
  xl: 64,
  xxl: 128,
  giant: 256
}

/** this theme uses Inter free google font in both body and headings */
export const fonts: FontFamily = {
  headings: 'Inter, Open-Sans, Helvetica, Arial, Sans-Serif;',
  paragraphs: 'Inter, Open-Sans, Helvetica, Arial, Sans-Serif;',
  mono: 'Mono',
  serif: 'athelas, georgia, times, serif',
};

/** fontSizes for this theme. They are modular */
export const fontSizes: Array<string> = [
  // 12, 14, 16, 20, 24, 32, 48, 64, 96
  modularScale(-1), 
  modularScale(0), 
  modularScale(1), 
  modularScale(2), 
  modularScale(2.7), 
  modularScale(3.3), 
  modularScale(4)
];

/** Radio value */
export const radii: string = '.25rem';

/** Theme */
const theme: PresetTheme = {
  colors,
  space,
  fonts,
  fontSizes,
  radii,
};

export default theme;