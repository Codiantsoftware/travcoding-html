import { baseRoutes } from "../../helpers/baseRoutes";

const frontendRouteMap = {  
  HOME: { path: `${baseRoutes.frontendBaseRoutes}`},
  LISTING: { path: `${baseRoutes.frontendBaseRoutes}/listing`},
  CRUISE_DETAILS: { path: `${baseRoutes.frontendBaseRoutes}/cruise-details`},
};
export default frontendRouteMap;