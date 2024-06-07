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