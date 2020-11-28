import { darken, lighten, modularScale } from 'polished';
import { FontFamily, PresetTheme, Space, ThemeColors } from '../store/types';
import { generatePalette } from '../store/utils';

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

/** Created a type spec for the colors */
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
  'primary-shades': generatePalette(primary, 'black'),
  'primary-tints': generatePalette(primary, 'white', 0.115),
  'secondary-shades': generatePalette(lighten(0.25, secondary), 'black', 0.05),
  'secondary-tints': generatePalette(lighten(0.25, secondary), 'white')
};

/** Spacing with understandable keys */
export const space: Space = {
  NONE: 0,
  XS: 4,
  S: 8,
  M: 16,
  L: 32,
  XL: 64,
  XXL: 128,
  GIANT: 256
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
  modularScale(3), 
  modularScale(4), 
  modularScale(5)
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