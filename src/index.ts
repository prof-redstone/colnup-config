
const sum = (a:number, b:number): number => {
    if (a===0) {
        return b
    }
    else {
        return sum(a-1, b+1)
    }
}

const sub = (a:number, b:number): number => {
    if (b===0) {
        return a
    }
    else {
        return sub(a-1, b-1)
    }
}