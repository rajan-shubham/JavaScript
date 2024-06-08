# HOISTING:
- Makes some types of variables accessible/usable in the code before they are actually declared. "variables lifted to the top of their scope".
--> (behind the scenes)
Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.

| Parameter                     | Hoisted?      | | Initial value | Scope              |
| ----------------------------- | ------------- | | ------------- | -------------      |
| function declaration          | YES           | | Actual fun.   | Block(*strict mode)|
| var variables                 | YES           | | undefined     | function           |
| let & const Variables         | NO (*TDZ)     | |<uninitialized>| Block              |
- fun. expression & arrow fun.  | (Depends if using var or let/const) as it is declared using let/const or var so it behaves as like it is declared

- Block(*strict mode) --> scope is Block mode in strict but in(otherwise function scoped)
- *Hoisted --> Technically, yes. But not in practice (its initial value is in Temporal Dead Zone)

- WHY TDZ? --> Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided.
- Makes const varaiable Actually works

- Why HOISTING? --> Using functions before actual declaration
- var hoisting is just a by product.

#### this keyboard/variable:
- special variable that is created for every execution context(every function).
- Takes the value of (points to) the "owner" of the function in which the 'this' keyboard is used.
- this is NOT static. It depends on how the function is called, and its value is only assigned when the functon is actually called.

##### function calling:
- Method --> this = <Object that is calling the method>
- Simple function call --> this = undefined (in strict mode! Otherwise: window(in the browser))
- Arrow functions --> this = <this of surrounding function (lexial this)> as it Don't get own this
- Event listener --> this = <DOM element that the handler is attached tom>
- NOTE: this does NOT point to the function itself, and also NOT the its variable environment of the function!
- new, call, apply, bind