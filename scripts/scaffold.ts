#!/usr/bin/env bun
/**
 * Usage: bun new <exercise-name>
 * Creates exercices/YYYY-MM-DD-<exercise-name>/{index.ts,index.test.ts}
 */

const name = Bun.argv[2]

if (!name) {
  console.error("Usage: bun new <exercise-name>")
  process.exit(1)
}

const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
const date = new Date().toISOString().slice(0, 10)
const dir = `exercices/${date}-${slug}`

if (await Bun.file(`${dir}/index.ts`).exists()) {
  console.error(`Already exists: ${dir}`)
  process.exit(1)
}

const fnName = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())

await Bun.write(
  `${dir}/index.ts`,
  `/**
 * ${name}
 *
 * Example:
 * ${fnName}()  //
 */
export const ${fnName} = (): void => {

}
`
)

await Bun.write(
  `${dir}/index.test.ts`,
  `import { describe, expect, it } from "bun:test"
import { ${fnName} } from "./index.ts"

describe("${fnName}", () => {
  it("", () => {
    expect(${fnName}()).toBe(undefined)
  })
})
`
)

console.log(`Created ${dir}`)
console.log(`  bun test ${dir}`)
