import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';

export function withCondition(
  Component: FunctionComponent,
  condition: boolean,
  redirectTo: string
) {
  return function InnerComponent(props?: any) {
    return condition ? (
      <Component {...props} />
    ) : (
      <Navigate to={redirectTo} replace />
    );
  };
}
