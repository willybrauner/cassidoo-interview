/**
 * fulfilled-orders-before-failure
 * Given an array of ice cream orders and a freezer stock map,
 * return how many orders can be fulfilled before the first unavailable flavor.
 *
 */

type Order = string[]
type Flavors = Record<string, number>

export const fulfilledOrdersBeforeFailure = (
  orders: Order[],
  flavors: Flavors,
): number => {
  for (let flavor of Object.keys(flavors))
    for (let i = 0; i < orders.length; i++) {
      if (orders[i]!.includes(flavor)) {
        if (flavors[flavor] && flavors[flavor] > 0) {
          orders[i] = orders[i]!.filter((e) => e !== flavor)
          flavors[flavor]--
        }
      }
    }

  let count = 0
  for (let i = 0; i < orders.length; i++) {
    if (orders[i]!.length > 0) return count
    count += 1
  }
  return count
}

// prettier-ignore
console.log(
  fulfilledOrdersBeforeFailure(
    [["chocolate"], ["chocolate"], ["chocolate"]], 
    { chocolate: 2 }
  ),
)

// prettier-ignore
console.log(
  fulfilledOrdersBeforeFailure(
    [
      ["vanilla", "vanilla"],
      ["chocolate", "mint"],
      ["strawberry"],
      ["strawberry", "mint"],
    ],
    { vanilla: 2, chocolate: 1, mint: 1, strawberry: 5 },
  ),
)

// prettier-ignore
console.log(
    fulfilledOrdersBeforeFailure(
        [["rocky road"], ["vanilla"]], 
        { vanilla: 3 }
    )
)
