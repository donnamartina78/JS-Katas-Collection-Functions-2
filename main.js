function add(x, y) {
    return x + y
}
console.log(add(9, 2))


function multiply(x, y) {
    let z = 0
    for (let i = 0; i<y; i += 1) {
        z = add(x, z)
     } 
     return z
    }

console.log(multiply(5, 3))



function power(x, n) {
    let total = 1
    for (let i = 0; i< n; i += 1) {
        total = multiply(x, total)
    }
    return total
    }
    
    console.log(power(3, 4))



    function factorial(x){
        let n = 1
    for (let i = x; i > 1; i -= 1) {
        n= multiply(n, i)
    }
    return n
    }
    console.log(factorial(5))
    Js-Karta-Collections-Functions-2

    //function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use functions you wrote in earlier katas to write this function.

// For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:

// 0  1  1  2  3  5  8  [13]  21So, the number in brackets is the 8th Fibonacci number.

