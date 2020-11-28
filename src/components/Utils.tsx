import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  textStyle,
  typography,
  shadow,
} from 'styled-system';


/**
 * Text Component type
 */
export const text = compose(
  typography,
  color,
  shadow,
  space,
  size,
  textStyle
);

/**
 * Text Primitive
 * 
 * Primitive component to create text based components from
 */
export const TextPrimitive = styled('div')(text);
TextPrimitive.displayName = 'TextPrimitive';

