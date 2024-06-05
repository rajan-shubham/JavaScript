'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        let output = `${firstName} You are ${age}, born in ${birthYear}`;
        console.log(output);
        
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating New variable with same name as outer scope's variable
            const firstName = "Steven";
            
            // Reassigning outer acope's variable
            output = "NEW OUTPUT!";
            
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str); ReferenceError: str is not defined
        console.log(millenial); // var is functional scoped
        // console.log(add(2,3)); // ReferenceError: add is not defined (function are only blocked scoped(true for strict mode))
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = "shubham";
calcAge(1991);
// const firstName = "rajan"; // ReferenceError: Cannot access 'firstName' before initialization
// console.log(age); ReferenceError: age is not defined
// printAge(); ReferenceError: printAge is not defined