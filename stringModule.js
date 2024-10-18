export function toUpperCase(str) { 
    return str.toUpperCase();
}
export function toLowerCase(str) { 
    return str.toLowerCase();
}
function combine() {
    const max = findmax()
    const mult = multiply(max,5)
    const result = toUpper(mult)
    return result;
}
