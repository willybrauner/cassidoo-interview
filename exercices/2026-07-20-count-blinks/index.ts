/**
 * count Blinks
 */
export const countBlinks = (pattern: string): number =>
  pattern
    .match(new RegExp(/_(\.*)_/g))
    ?.filter((e) => e !== "")
    .map((e) => e.slice(1, -1))
    .sort()
    .reverse()?.[0]?.length || 0
