function add(n1: number, n2: number) {
    // TS: we can only fail at the Development (witch allow us to fix bugs earlier)
    // JS: we can only fail at the Runtime
    // The key difference is: JavaScript uses "dynamic types" (resolved at runtime),
    // TypeScript uses "static types" (set during development).
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!')
    // }

    return n1 + n2
}

const number1 = 5
const number2 = 2.8

const result = add(number1, number2)
console.log(result)
