/*
var car = {
    color: 'red',
    speed: 200,
    drive: function() { return 'drive'; },
};

var shoppinglist = [
    'apple',
    'pear',
    'orange',
];

// console.log(shoppinglist);

var newcar = {
    make: 'volvo',
    speed: 160,
    engine: {
      size: 2.0,
      make: 'BMW',
      fuel: 'petrol',
      pistons: [ 'piston1', 'piston2', 'pistpn3' ]
    },
    drive: function() { return 'drive'; }
  }

// console.log(newcar);
// console.log(newcar.engine.pistons[2])
// console.log(newcar.drive)
// console.log(newcar.drive())
// console.log(newcar['engine']);
// console.log(newcar['drive']());

var array = [
  'hello',
  100,
  [ 'embed', 200 ],
  { car: 'ford' },
  function() { return 'drive'; }
];

// console.log(array);


function name() {
  var fullname = 'John Doe';
  function concat(name) {
    return 'Hello, ' + name;
  }

  return concat(fullname);
}

// console.log(name());

function print_name(fullname) {
  return fullname.firstname + ' ' + fullname.lastname;
}

// console.log( print_name({ firstname: 'John', lastname: 'Doe' }) );

function newname(fullname) {
  return fullname();
}

// console.log(
//   newname( function() { return 'embed'; } )
// )


function runExpression() {
  var a = 10;

  function add(b) {
    return a + b;
  }

  // console.log(
  //   add(90),
  //   add(20)
  // )
}

// runExpression()

// console.log( this );

// function Apple ( x, y, color, score ) {
//   this.x = x;
//   this.y = y;
//   this.color = color;
//   this.score = score;
// }

// var apple1 = new Apple(10, 20, 'red', 200);
// console.log(apple1);


function Apple( color, weight ) {
  this.color = color;
  this.weight = weight
}

Apple.prototype = {
  eat : function() { return this; },
  throw : function() { return 'throw'; }
}

var apple1 = new Apple('red', '123');
var apple2 = new Apple('green', 300);

// a = [1,2,3];
// for (let i in a) {
//   console.log(a[i]);
// }

// var a = 10;
// var a;
// console.log(a)
*/

const x = [1, 2, 3];
const y = 13;
console.log(x + y);
x.push(10);
x[0] = 53;
// x = 100;
console.log(x + y);

console.log(carName);
var carName = 'volvo';
// console.log(carName);

{
  var carName = 'Nissan';
}
console.log(carName);

console.log(l);
var l = 7;