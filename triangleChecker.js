const prompt = require("prompt-sync")();

let numberOfTriangles = 3;
let equiTriangles = 0;
let isosTriangles = 0;
let scalTriangles = 0;

while (numberOfTriangles > 0) {
  const side1 = parseInt(prompt("Please enter side 1 length "));
  const side2 = parseInt(prompt("Please enter side 2 length "));
  const side3 = parseInt(prompt("Please enter side 3 length "));

  if (side1 < 0 || side2 < 0 || side3 < 0) {
    console.log("Please enter valid value for triangle side. No -ve values");
    continue;
  }
  if ((side1 == side2) == side3) {
    equiTriangles++;
    console.log(`Side 1 : ${side1}
        Side 2: ${side2}
        Side 3 : ${side3}
        This triangle is an Equilateral because all the sides are equal to each other.
 `);
    numberOfTriangles--;
    continue;
  } else if (side1 == side2 || side2 == side3 || side1 == side3) {
    isosTriangles++;
    console.log(`Side 1 : ${side1}
        Side 2: ${side2}
        Side 3 : ${side3}
        This triangle is an Isosceles triangle because two sides are equal to each other.
 `);
  } else {
    scalTriangles++;
    console.log(`Side 1 : ${side1}
        Side 2: ${side2}
        Side 3 : ${side3}
        This triangle is a scalene because all the sides are not equal to each other.
 `);
  }
  numberOfTriangles--;
}

console.log(`The number of Isosceles triangles entered was: ${isosTriangles}
The number of Scalene triangles entered was:${scalTriangles}
The number of Equilateral triangles entered was:${equiTriangles}
`);
