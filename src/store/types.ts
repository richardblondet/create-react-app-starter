import { Reducer, Dispatch } from 'react';
import { LinkProps, RouteProps } from 'react-router-dom';
import { DefaultTheme } from 'styled-components';
import { SpaceProps, SizeProps, TextStyleProps, ShadowProps, ColorProps, TypographyProps, DisplayProps, LineHeightProps } from 'styled-system';
import { init, setLocale, setTheme } from './actions';
/**
 * @revision
 * 
 * To learn more about types in typescript, please:
 * @see {@link https://redux.js.org/recipes/usage-with-typescript}
 * @see {@link https://mariusschulz.com/blog/passing-generics-to-jsx-elements-in-typescript}
 */

export interface Json {
	[index:string]: string | number | boolean | Date | Json;
}
/** Base */
export interface State {}

/** Base Reducer's Action */
export interface Action {
  type: string;
  payload: any;
}

/** Reducers Handlers object */
export interface ReducersHandlers<T, P> {
  [index:string]: Reducer<T, P>
}

/** Action Binder Type for Factory */
export interface ActionEffectBinder<A, T> {
  (arg:Dispatch<A>): Partial<T>
}

/** Error boundary props type */
export type ErrorBoundaryProps = {
  error?: Error;
  children?: React.ReactNode;
}
/** Error state type */
export type ErrorBoundaryState = { 
  error?: Error 
}
/** Error handler type */
export type ErrorHandler = 
  (error: Error, info: React.ErrorInfo) => void

/** ApplicationStoreReducerState */
export interface ApplicationStoreState extends State {
  readonly version: string;
  readonly name: string;
  theme: string;
}

/** ApplicationStoreReducerState Actions */
export type ApplicationStoreReducerActions = ReturnType< 
  typeof setTheme | typeof init
>;
/** end ApplicationStoreReducerState */

/** i18n languages shape */
export type Languages = {
  [index:string]: Json;
}
/** Intl State */
export interface IntlStoreState extends State {
  locale: string;
  translations: Languages;
};
/** Intl Actions  */
export type IntlStoreReducerActions = ReturnType<
  typeof setLocale 
>;

/** Translate Function Options */
export interface TranslateFunctionOptions {
  key: string;
  value: string;
}

/** Private Route */
export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  isAllowed?: boolean;
  unautheticatedPath?: string;
  unauthorizedPath?: string;
}

/** Theme Color Spec based on comments in @themes/preset */
export interface ThemeColors {
  'primary': string;
  'primary-lightened': string;
  'primary-darkened': string;
  'secondary': string;
  'secondary-lightened': string;
  'secondary-darkened': string;
  'tertiary': string;
  'white': string;
  'red': string;
  'yellow': string;
  'green': string;
  'blue': string;
  'primary-shades': RangeColorsShape;
  'primary-tints': RangeColorsShape;
  'secondary-shades': RangeColorsShape;
  'secondary-tints': RangeColorsShape;
}

/** Colors for ranges of shade/tints */
export type RangeColorsShape = {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}

/** Spacing interface spec */
export interface Space {
  none: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  giant: number;
}

/** FontFamilies */
export interface FontFamily {
  headings: string;
  paragraphs: string;
  mono: string;
  serif: string;
}

/** TextPrimitive TextPrimitiveProps */
export type TextPrimitiveProps =
  | TypographyProps
  | WhiteSpaceProps
  | ColorProps
  | ShadowProps
  | SpaceProps
  | SizeProps
  | TextStyleProps
  | DisplayProps
  | LineHeightProps
  | { as?: keyof JSX.IntrinsicElements | React.ComponentType<any> };

/** Typography Component Group Spec */
export interface TypographyStyles {
  H1: TextPrimitiveProps;
  H2: TextPrimitiveProps;
  H3: TextPrimitiveProps;
  H4: TextPrimitiveProps;
  H5: TextPrimitiveProps;
  H6: TextPrimitiveProps;
  Lead: TextPrimitiveProps;
  Paragraph: TextPrimitiveProps;
  Small: TextPrimitiveProps;
  Link: TextPrimitiveProps;
}

/** WhiteSpace temporal interface */
export interface WhiteSpaceProps {
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line" | "break-spaces" | "inherit" | "initial" | "unset";
}

/** Anchor */
export type AnchorProps = TextPrimitiveProps & Pick<LinkProps, 'to'> & { 
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void 
};

/** Group component shape */
export interface TypographyComponentProps {
  H1: React.FC<TextPrimitiveProps>;
  H2: React.FC<TextPrimitiveProps>;
  H3: React.FC<TextPrimitiveProps>;
  H4: React.FC<TextPrimitiveProps>;
  H5: React.FC<TextPrimitiveProps>;
  H6: React.FC<TextPrimitiveProps>;
  Lead: React.FC<TextPrimitiveProps>;
  Paragraph: React.FC<TextPrimitiveProps>;
  Small: React.FC<TextPrimitiveProps>;
  Link: React.FC<AnchorProps>;
}

export interface PresetTheme extends DefaultTheme {
  colors: ThemeColors;
  space: Space;
  fonts: FontFamily;
  fontSizes: string[];
  radii: string;
}

/** Adding a new theme: */
/** export interface NewTheme extends PresetTheme */

/** Themes */
export type AppThemes = {
  [index: string]: PresetTheme;
}