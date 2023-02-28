

// `router` is used as the default feature name. You can use the feature name
// of your choice by creating a feature selector and pass it to the `getRouterSelectors` function
// export const selectRouter = createFeatureSelector<RouterReducerState>('yourFeatureName');

import { DEFAULT_ROUTER_FEATURENAME, getSelectors, MinimalRouterStateSnapshot, RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector } from "@ngrx/store";

export const selectRouter = createFeatureSelector<RouterReducerState<MinimalRouterStateSnapshot>>(
  DEFAULT_ROUTER_FEATURENAME
);

 
export const {
    selectCurrentRoute, // select the current route
    selectFragment, // select the current route fragment
    selectQueryParams, // select the current route query params
    selectQueryParam, // factory function to select a query param
    selectRouteParams, // select the current route params
    selectRouteParam, // factory function to select a route param
    selectRouteData, // select the current route data
    // selectRouteDataParam, // factory function to select a route data param
    selectUrl, // select the current url
    selectTitle, // select the title if available
} = getSelectors(selectRouter);