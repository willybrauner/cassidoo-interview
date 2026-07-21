/**
 * Given a string of . and _ where _ represents a blink, 
 * return the longest gap between blinks.
 * 
 * ex:
 * countBlinks("_..__...._.___........_") // 8
 * 
 */
export const countBlinks = (pattern: string): number =>
  pattern
    .match(new RegExp(/_(\.*)_/g))
    ?.filter((e) => e !== "")
    .map((e) => e.slice(1, -1))
    .sort()
    .reverse()?.[0]?.length || 0
