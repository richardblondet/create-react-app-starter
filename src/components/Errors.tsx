import React, { 
  ComponentType, 
  Component, 
  ErrorInfo,
} from 'react';

import { 
  ErrorBoundaryProps, 
  ErrorHandler, 
  ErrorBoundaryState
} from '../store/types';

/**
 * Errors Components
 * 
 * An app definitely more than one error components.
 */
export default 'components/errors';


/**
* Error Boundary HOC
* 
* Returns a component type to isolate errors from its child down.
* 
* @returns {ComponentType} React Component Type  
* @see {@link https://gist.githubusercontent.com/andywer/800f3f25ce3698e8f8b5f1e79fed5c9c/raw/2d0ac6cace3bea9dc94997129c0ef20bfa8112a6/functional-error-boundary.ts}
*/
const Catch = <P extends ErrorBoundaryProps> (
  ErrorComponent: ComponentType<P>, 
  errorHandler?: ErrorHandler
  ): ComponentType<P> => (
    
  class ErrorBoundaryComponent extends Component<P, ErrorBoundaryState> {
    
    state: ErrorBoundaryState = {
      error: undefined
    };
    
    static getDerivedStateFromError(error: Error) {
      return { error };
    }
    
    componentDidCatch(error: Error, info: ErrorInfo) {
      if (errorHandler) {
        errorHandler(error, info);
      }
    }
    
    render() {
      return <ErrorComponent {...this.props} error={this.state.error} />;
    }
  }
);

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