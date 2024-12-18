import React from "react";
//Frontend
export const FrontendLayout = React.lazy(() => import("./Frontend/index.layout"));
export const FrontendPublicLayout = React.lazy(() => import("./Frontend/public.layout"));
export const FrontendPrivateLayout = React.lazy(() => import("./Frontend/private.layout"));
