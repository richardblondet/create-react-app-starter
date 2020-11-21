import React from 'react';
import { ErrorBoundaryProps } from '../store/types';
import { Catch } from '../store/utils';

/**
 * Errors Components
 * 
 * An app definitely more than one error components.
 */



/**
 * Generic Error Boundary
 * 
 * Style as desired.
 */
export const ErrorBoundary = Catch((props: ErrorBoundaryProps) => {
  if (props.error) {
    return (
      <div className="error-screen">
      <h2>An error has occured</h2>
      <h4>{props.error.message}</h4>
      </div>
    );
  }
    
    return <React.Fragment>{props.children}</React.Fragment>;
});