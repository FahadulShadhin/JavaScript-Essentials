# Day 1 - Introduction + Basic Syntax (Functions or Subroutines)

## JavaScript has many names:

- LiveScript - First release
- JScript - Internet Explorer
- Mocha - Dev name
- ECMAScript

---

- JS is based on two languages - **Self** and **Schema**
- No relation with **Java**!
- Creator **Brendan Eich** (1995)
- Sun Microsyetems

---

- Rendering Engine - Renders HTML and CSS
- JavaScript Engine - Converts human readable JS code to machine code
- JS uses __JIT (Just In Time)__ Compiler
- JavaScript Console in browser developer tools

---

## Objects:

```JavaScript
{
  color: 'red',
  weight: 5,
  height: 27,
  width: 25,
  eat: function () { 'Eat the apple.'; },
  throw: function () { 'Throw the apple.'; }
}
```

- think of `key:value` pairs as:
  1. nouns: adjectives - __properties__
  2. nouns: verbs - __functions__
- key:value pairs are properties of an object
- A function contained within an object is called a `methods`

### Encapsulation:
- `{ encapsulation }`
- Grouping data within an object is __Encapsulation__

### Embedded Objects:
* This is __Hierarchy__ - objects within objects

```JavaScript
let computer = {
  width: 1400,
  height: 600,
  color: 'gray',
  smash: function () { 'Smash the computer!'; },

  camera: {
    quality: 'hd'
    record: function () { 'Record...'; },
  }

  screen: {
    type: 'retina',
    backlight: 'LED',
    size: '13 inch'
  }
}
```
---

## Primitive Data:
* __string__ - anything inside quotation mark `""` or `''`
* __number__ - any number int or float 
* __boolean__ - `true` or `false`
* `null`
* `undefined`
* `NaN` - Not a Number

---

## JavaScript Syntax: 

* Every programming language has its own __API__
* JS API consists of functions/methods and properties as well
* API inside API - __Embedded API__ or __Extension API__ or __Extended API__
* For example: JQuery needs JS native api to define its own API
* __Libraries__ are embedded API
---

## Variables, Constants, and Assignment:

* JS is __loosely typed__ language
* __Symbols table__ - A database containing all the variables and constants
---

## Assignment Operators:
* BODMAS - Brackets pOwers Division & Multiplication Addition & Subtraction
* exponent - `Math.pow(2, 4)`
* To the power of: `**=`
* Division: `/`
* Remainder division (modulus): `%`
* Operators Precedence:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#

### Polymorphism

```JavaScript
>> 10 + 20
30

>> 10 += 1
11

// however
>> 10 + "Hello"
"10Hello"

>> greet = "Hello"
>> 10 += greet
"10Hello"
```
* The functionality of `+` and `+=` operators changed
* Polymorphism - one with various forms
---

## Functions or Subroutines:

* Tasks defined by a set of instructions that can be run at a certain point in time.

```JavaScript
function myFunc (x, y) {
  var a = 10;
  var b = 20;
  var result = (a + b) * (x - y) ;
  return result;
}

// call function 
myFunc(11, 13);
```
* x, y are __parameters__
* 11, 13 are __arguments__
* Parameters are variables
* Arguments are values
---

# Day 2 - Basic Syntax

## Objects & Arrays:

* Object:
```JavaScript
var car = {
  color: 'red',
  speed: 200,
  drive: function() { return 'drive'; },
};
```

* Array:
```JavaScript
var shoppinglist = {
  'apple',
  'orange',
  ''
};
```

## Embedded Objects & Arrays:

```JavaScript
var car = {
  make: 'volvo',
  speed: 160,
  engine: {
    size: 2.0,
    make: 'BMW',
    fuel: 'petrol',
    pistons: [ 'piston1', 'piston2', 'pistpn3' ],
  },
}
```
---

## Member Access:

* Object member access:

```JavaScript
car.make
car.speed
car.engine.size
car.engine.pistons[1]
car.drive()
```

### Computed member access:

* Array:

```JavaScript
var arr = [ 1, 2, 3 ];
arr[0]
arr[1]
arr[2]
```
---

## Member Creation, Assignment & Deletion:
## Array Modification:

* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `splice()`
* `slice()`
* Array manipulation: https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/
---

## Callable Objects:
* Functions
---
## Memory Hoisting:
* Lift up the memory!
---
## Scope & Closures:
* Scope = Access
* Executation stack (Main Thread) - In callable objects
* Symbol table
* Garbage collection (Unused symbols) - In collable objects
* Executation stack & symbol table together creates __Outer Executation Environment__.
---

## Inferred Globals & Scope:
---

## This Context:
* `this` keyword by default points to the `window` object
---
## Constructors:

```JavaScript
function Apple ( x, y, color, score ) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = score;
}

var apple1 = new Apple(10, 20, 'red', 200);
```

## Prototype:
* Shared objects
* Protoype is unique to JavaScript
---

## Constructors with Prototypes:
```JavaScript
function Apple( color, weight ) {
  this.color = color;
  this.weight = weight
}

Apple.prototype = {
  eat : function() { return 'eat'; },
  throw : function() { return 'throw'; }
}

var apple1 = new Apple('red', '123');
```
---

# Day 3 - Comparisn & Conditional Executations

## Comparisn Operators:

* `===` & `!==` prevents polymorphism when comparing
---
## If Statement:
---
## For & For In Loops:
```JavaScript
a = [1, 2, 3]

for ( let i in a ) {
  console.log(a[i]);
}

Output:
1
2
3
```
---
## ES6:
* `var` vs `let` vs `const` 
---

# Day 4 - DOM Manipulation

* Document Object Model (DOM)
* Can change, add, and remove HTML elements
* Can change, add, and remove HTML attributes
* Can change CSS
* Can react to and event or create an event
---
