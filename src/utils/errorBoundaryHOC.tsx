import React from "react"

/**
 * @see {@link https://gist.githubusercontent.com/andywer/800f3f25ce3698e8f8b5f1e79fed5c9c/raw/2d0ac6cace3bea9dc94997129c0ef20bfa8112a6/functional-error-boundary.ts}
 */
export type Props = {
  children: React.ReactNode
  error?: Error
}
type ErrorHandler = (error: Error, info: React.ErrorInfo) => void
type ErrorState = { error?: Error }

const errorBoundaryHOC = <P extends Props>(
  Component: React.ComponentType<P>, 
  errorHandler?: ErrorHandler
  ): React.ComponentType<P> => (
  class WithErrorBoundary extends React.Component<P, ErrorState> {
    state: ErrorState = {
      error: undefined
    }

    static getDerivedStateFromError(error: Error) {
      return { error }
    }
    
    componentDidCatch(error: Error, info: React.ErrorInfo) {
      if (errorHandler) {
        errorHandler(error, info)
      }
    }

    render() {
      return <Component {...this.props} error={this.state.error} />
    }
  }
);

export default errorBoundaryHOC;