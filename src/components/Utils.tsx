import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  textStyle,
  typography,
  shadow,
  display,
  system,
  Config,
  border,
} from 'styled-system';
import * as CSS from 'csstype';
import { ProtectedRouteProps } from '../store/types';

/**
 * Private Route Handler
 * @param props ProtectedRouteProps
 * @see {@link https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4-a}
 */
export const PrivateRoute: React.FC<ProtectedRouteProps> = props => {
  /** extract */
  const { 
    isAuthenticated,
    isAllowed = true,
    unautheticatedPath = '/auth',
    unauthorizedPath = '/403',
    component, 
    path,
    ...rest
  } = props;
  
  /** if you are not in by any means then  */
  if (!isAuthenticated) {
    return <Redirect to={unautheticatedPath} />;
  }
  
  /** if you are in but not allowed then  */
  if (isAuthenticated && !isAllowed) {
    return <Redirect to={unauthorizedPath} />;
  }

  /** it */
  return <Route path={path} component={component} {...rest} />;
};

/**
 * A WhiteSpace prop
 */
const whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace'
  }
} as Config);

/**
 * Common Component types
 */
export const common = compose(
  space,
  color,
  display
);

/**
 * Border Component types
 */
export const borderType = compose(
  border,
  shadow
);

/**
 * Text Component type
 */
export const text = compose(
  common,
  typography,
  whiteSpace,
  shadow,
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

