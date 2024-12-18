import frontendRouteMap from "./frontendRouteMap";
import { Listing,Home, CruiseDetails } from "../../pages";

export default function route() {
  return [
    {
      path: frontendRouteMap.HOME.path,
      name: "Home",
      element:<Home />,
    },
    {
      path: frontendRouteMap.LISTING.path,
      name: "Listing",
      element: <Listing/>,
    },
    {
      path: frontendRouteMap.CRUISE_DETAILS.path,
      name: "Cruise Details",
      element: <CruiseDetails/>,
    }
  ];
}
