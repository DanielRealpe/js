function mayor(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(mayor(4, 6))
console.log(mayor(100, 6))
console.log(mayor(4, 101))

const parImpar = (numero) => {
    if (numero % 2 === 0) {
        return "Es par"
    } else {
        return "Es impar"
    }
}

console.log(parImpar(3));