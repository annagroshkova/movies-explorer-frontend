import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component, ...props }) {
  const { condition, redirectPath = '/' } = props;

  return condition ? <Component {...props} /> : <Navigate to={redirectPath} replace />;
}
