import React from 'react';
import { FrontendLayout } from '../layouts';
import { frontendRoutes } from './Frontend';

export const routes = () => {
  return [    
    {
      element: <FrontendLayout />,
      children: [...frontendRoutes()],
    }
  ];
};