export const ASSET_STATUS = {
  CRITICAL: 'Critical',
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low',
} as const;

export type assetStatusConstants =
  (typeof ASSET_STATUS)[keyof typeof ASSET_STATUS];
