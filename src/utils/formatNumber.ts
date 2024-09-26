export const formatNumber = (
  number: number,
  decimals: number | undefined = undefined,
): string => {
  return Intl.NumberFormat("en", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(number);
};
