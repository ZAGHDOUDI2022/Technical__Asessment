# Part III: Functions

*Note: Before getting started on these exercises, please be certain that you've read through the root [README.md](../README.md) file in this repository.*

## Exercises

### Basic Requirements

1. In your console, copy the following function and verify
   that the following invocations match your expectations:

   ```js
   function square(num){
      return num * num;
   }

   square(10) + 2;
   square(100) + square(77);
   square(8 / 2)
   square(2 + 17);
   square(square(15));//15*15*15*15 =>50625
   ```

2. Write a sentence in plain English describing how `square(square(15))` is
   evaluated.
   // first square the number 15; 15 * 15 = 225
// then square the result from the first square; 225 * 225

3. Rename `square`'s `num` parameter in your above code to `monkey`, and
   rename the uses of that parameter in the body to `monkey` as well. Will the
   function `square` still work? Why or why not?

   ```js
    function square(monkey){
      return monkey * monkey;
   }
   ```
   //yes, the function 'square' still work 
    because the parameter doesn't matter the way we put it, it is just a name
    but we must to avoid some functional mentions like string,array//
    
4. What is wrong with the following definitions of `square`? Write a sentence or
   two describing the issue(s); then, try copying the erroneous examples into a
   console one-at-a-time and observing the error(s) generated (you may have to
   attempt to invoke the functions to see the error). What errors are produced
   (if any) for each erroneous version? Do the errors make sense?

   ```js
   function square(monkey) {
     return x * x;
   }
   //We have not defined X
   //console.log(monkey(10))

   function square(5) {
     return 5 * 5;
   }
   //It does not matter what number is entered in as the argument the result will be 25

   function square("x") {
     return "x" * "x";
   }
   //The parameter X is a string and not a number
   ```


5. Fix the invalid syntax in the following functions (you can copy and paste these
   invalid definitions into your console and then edit them there):

   ```js
   function square1(x) { //missing parens, function not spelled out
  return x * x;
  }

   function square2 (x){ //missing parens and curly brace, need space between name and function
  return x * x;
  }

   function square3 (x) { //missing curly brace, parameter in wrong location 
  return x * x;
  }
   ```

6. The following functions exhibit poor style -- fix these issues using the
   original version of `square` as a reference.

```js
  // function square(x){return x*x;}

function square(x){
	return x*x;
} 

// function square (x) { return x *x;
// }

function square (x){ 
	return x *x;
}

// function square(x)
// {
// return x * x;
// }

function square(x){
	return x * x;
}
```

7. Complete the function `cube` that returns the cube of x:

  ```js
  function cube(x) {
  // your code here
  return x * x * x;
  }
  ```

8. Complete the function `fullName` that should take two parameters, `firstName`
   and `lastName`, and returns the `firstName` and `lastName` concatenated
   together with a space in between.

  ```js
   // // don't forget the parameters!
   function fullName(firstName, lastName) {
   // your code here
   return firstName + ' ' + lastName;
   }
   console.log(fullName("John", "Doe")); // => "John Doe"
  ```

9. Write a function `average` that takes two numbers as input (parameters), and
   returns the average of those numbers.
   ```js
     function average(num1, num2){
	   return (num1 + num2) / 2
     }
   ```

10. Write a function `greeter` that takes a name as an argument and *greets*
    that name by returning something along the lines of `"Hello, <name>!"`

```js
function greeter(name){
	return 'Hello ' + name + '!'
}

```
11. Using the document found at <a href="http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf" target="_blank">this link</a>, translate the first page of geometric
    formulas into JavaScript functions.

    As an example, a function to compute the perimeter of a rectangle might look
    like this:

    ```js
    function perimeterRect(l, w) {
      return 2 * (l + w);
    }
    ```

    **NOTE:** JavaScript provides some nifty mathematical functions and
    constants built into the language that you'll need for this exercise. The
    two that we'll be making use of are:

    ```js
    Math.PI; // => 3.141592653589793
    Math.sqrt(256); // => 16
    ```

    To test your answers, you'll need to:

    1. Code your function in the console in the way that you think it will work
    2. Call the function with arguments in the console to see the result, e.g.
      `perimeterRect(2, 6)`.
    3. Eventually, you may want to verify that the output is correct. Google is a
       great tool for this:
 ```js
       function perimeterRect(l, w) {
       return 2 * (l + w);
       }

       console.log(perimeterRect(2, 6))//2*(2+6)=>16 it's correct output
 ```
 ```js
//Square Perimeter
function squarePerimeter (s){
	return 4 * s; 
}

//Perimeter Parallelogram
function parallelogramPerimeter (l, w){
	return (2 * l) + (2 * w);
}

//Perimeter Trapezoid
function trapezoidPerimeter (s1, s2, b1, b2) {
	return s1 + s2 + b1 + b2;
}

//Perimeter Triangle
function trianglePerimeter (s1, s2, b){
	return s1 + s2 + b;
}

//Perimeter Circle

function circlePerimeter (r){
	return (2 * Math.PI) * r;
}




```

![google geometry answer](google-geometry-answer.gif)

### More Practice

Translate the rest of the geometric formulas found <a href="http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf" target="_blank">here</a> into JavaScript functions.
```js
//Volume Rectangular Solid

function rectangularSolidVolume (l, w, h){
	return l * w * h;
}

//Surface area rectangular solid

function rectangulareSurfaceArea (l, w, h){
	return (2 * (l * h)) + (2 * (w * h)) + (2 * (w * l));
}
////////////////////////////////////////////
//Cube Volume

function volumeCube(s){
	return s * s * s;
} 


//Cube Surface Area

function surfaceAreaCube(s){
	return 6 * (Math.pow(s,2));
}

////////////////////////////////////////////
//Right Circle Cylinder Volume

function righCircleCylinderVolume(r, h){
	// V = PI * (r^2 * h)
	return Math.PI * (Math.pow(r,2) * h);
}


//Right Circle Cylinder Surface Area

function rightCircleCylinderSurfaceArea(r, h){
	return ((2 * Math.PI) * (r * h)) + ((2 * Math.PI) * Math.pow(r, 2)); 
}
////////////////////////////////////////////

//Sphere Volume

function sphereVolume(r){
	return ((4/3) * Math.PI) * Math.pow(r, 3)
}


//Sphere Surface Area

function sphereSurfaceArea(r){
	return (4 * Math.PI) * Math.pow(r, 2)
}

//////////////////////////////////////////////

//Right Circular cone volume

function rightCircularConeVolume(r,h){
	return ((1/3) * Math.PI) * (Math.pow(r, 2) * h);
}


//Right Circular Cone Surface Area

function rightCircularConeSurfaceArea(r,h){
	return (Math.PI * r) * (r + Math.sqrt(Math.pow(r,2) + Math.pow(h,2)));
}


////////////////////////////////////////////

//Square or Rectangular Pyramid Volume

function squareOrRectangularPyramidVolume(l,w,h){
	return (1/3) * (l * w * h);
}
////////////////////////////////////////////

//Frustum of Right Circular Cone
function frustumOfRightCircularConeVolume(r, R, h){
	return ((Math.PI * h) / 3) * (Math.pow(R, 2) +(R * r) + Math.pow(r,2));
}

//Frustum of Right Circular Cone Surface Area

function frustumOfRightCircularConeSurfaceArea(r,R,s){
	return Math.PI * (s * (R + r));
}




```

### Advanced (extra practice)

1. Compound interest can be calculated with the formula:

    ![future value](future-value.png)

    - *F*: future value
    - *P*: present value
    - *i*: nominal interest rate
    - *n*: compounding frequency
    - *t*: time

  Write a function `futureValue` that can be used to calculate the *future value*
  of a quantity of money using compound interest.

  Use the function to calculate what the future value of $1700 (*P* = 1700)
  deposited in a bank that pays an annual interest rate of 4.7% (*i* = 0.047),
  compounded quarterly (*n* = 4) after 6 years (*t* = 6) (you can use `Math.pow`
  to do exponentiation).

2. Write a `power` function that accepts the parameters `base` and `exponent`
   and returns the result. Replace `square` and `cube` with the `power` function
   you just wrote. Do not use `Math.pow`.

3. Write your own square-root function called `sqrt` that accepts a `number`
   parameter and returns an approximate square root. Square-root approximations
   make use of averages. Be sure to use the `average` function you previously
   wrote. The first version of your square root function should perform no more
   than 3 successive averages.
