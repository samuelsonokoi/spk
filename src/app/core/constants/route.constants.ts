export const ROUTE_CONSTANTS = {
  DASHBOARD: 'dashboard',
} as const;

export type routeConstants =
  (typeof ROUTE_CONSTANTS)[keyof typeof ROUTE_CONSTANTS];
