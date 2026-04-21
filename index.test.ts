import { describe, expect, it } from "bun:test"
import { maxPatternCopies } from "."

describe("maxPatternCopies", () => {

  it("exact copies", () => {
    expect(maxPatternCopies("aaa", "a")).toBe(3)
    expect(maxPatternCopies("abab", "ab")).toBe(2)
  })

  it("wildcards supplement missing chars", () => {
    expect(maxPatternCopies("ab?ab?", "abz")).toBe(2)
  })

  it("wildcards enable extra copies", () => {
    expect(maxPatternCopies("aabb??", "ab")).toBe(3)
    expect(maxPatternCopies("??abab??", "ab")).toBe(4)
  })

  it("wildcards only", () => {
    expect(maxPatternCopies("????", "ab")).toBe(2)
    expect(maxPatternCopies("??????", "abc")).toBe(2)
  })

  it("wildcards cover missing chars", () => {
    expect(maxPatternCopies("??????", "xyz")).toBe(2)
    expect(maxPatternCopies("???????????????", "abcde")).toBe(3)
  })
})
