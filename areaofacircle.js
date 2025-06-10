// 1. Declare radius using let and assign a value
let radius = 5;
console.log("Initial radius (let):", radius);

// 2. Try to redeclare radius with let (will cause an error if uncommented)
// let radius = 10; // Uncommenting this line will throw: SyntaxError: Identifier 'radius' has already been declared

// 3. Re-assign a value to radius (allowed)
radius = 10;
console.log("Re-assigned radius (let):", radius);

// 4. Repeat with var
var diameter = 20;
console.log("Initial diameter (var):", diameter);

// Redeclare diameter with var (allowed)
// eslint-disable-next-line no-redeclare
var diameter = 25;
console.log("Redeclared diameter (var):", diameter);

// Re-assign a value to diameter (allowed)
diameter = 30;
console.log("Re-assigned diameter (var):", diameter);

// 5. Declare pi using const
const pi = 3.14;
console.log("Value of pi (const):", pi);

// Try to re-assign pi (will cause an error if uncommented)
// pi = 3.14159; // Uncommenting this line will throw: TypeError: Assignment to constant variable.

// 6. Calculate area of a circle
let area = pi * radius * radius;
console.log("Area of circle:", area);