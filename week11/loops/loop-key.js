var val = 0;
var starter = 10;
var obby = {size: 5, weight: 400, color: 'pink'};
var things = [1, 2, 3, 4, 'hello', 'pink'];

for (x = 0; x <= 10; x= x + 1) {
    val = x * 10;
}

console.log(val);

// (where it starts; loop when; everytime a loop goes around, what happens?)

while (starter > 0) {
    console.log(starter);
    starter = starter - 1;
}

// (either true or false, when it's true it'll go forever)

for (x in obby) {
    console.log(x);
    console.log(obby[x]);
}

// (loop through all the values in an object)

things.forEach(function(num) {
    console.log(num);
})
