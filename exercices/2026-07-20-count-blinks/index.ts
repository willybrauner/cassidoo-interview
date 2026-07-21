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
    .match(/_(\.*)_/g)
    ?.filter((e) => e !== "")
    .map((e) => e.slice(1, -1))
    .sort((a, b)=> b.length - a.length)
    ?.[0]?.length || 0
