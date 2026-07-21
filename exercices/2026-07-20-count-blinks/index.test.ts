import { describe, expect, it } from "bun:test"
import { countBlinks } from "./index.ts"

describe("countBlinks", () => {
  it("should work with different patterns", () => {
    let t: number

    t = countBlinks("_..__...._.")
    expect(t).toBe(4)

    t = countBlinks("_..__...._.___........_")
    expect(t).toBe(8)

    t = countBlinks("_..__...._.___........")
    expect(t).toBe(4)

    t = countBlinks("...._")
    expect(t).toBe(0)
  })
})
