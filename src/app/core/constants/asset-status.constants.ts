export const ASSET_STATUS = {
  CRITICAL: 'Critical',
} as const;

export type assetStatusConstants =
  (typeof ASSET_STATUS)[keyof typeof ASSET_STATUS];
