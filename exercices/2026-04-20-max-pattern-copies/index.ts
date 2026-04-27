/**
  *  Given a string s containing letters and ? wildcards (that can match any letter), 
  *  and a target pattern string pattern, rearrange the entire string however you like. 
  *  Return the maximum number of non-overlapping copies of pattern that can appear in the rearranged result.
  *  
  *  Example:
  *  maxPatternCopies("abcabc???", "ac")  // 3
  *  maxPatternCopies("aab??", "aab")  // 1
  *  maxPatternCopies("??????", "abc")  // 2
 */
export const maxPatternCopies = (s: string, pattern: string): number => {


    // Create obj with a counter of each char
    const obj = s.split('').reduce((a: Record<string, number>, b: string) => ({
        ...a,
        [b]: (a?.[b] ?? 0) + 1
    }), {})

    // count recurcively
    const recursive = (count = 0): number => {
        let keep = ""
        for (let i = 0; i < pattern.length; i++) {
            const curr = pattern[i]!;
            if (obj?.[curr]) {
                 obj[curr] -= 1;
                 keep += curr
            }
            else if (obj["?"]) {
                obj["?"] -= 1;
                keep += curr
            }
        }
        if (keep === pattern) return recursive(count+1)
        else return count
    }

    return recursive()
}


