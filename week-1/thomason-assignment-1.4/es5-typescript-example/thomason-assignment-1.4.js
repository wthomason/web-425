/*
=====================================
 ; Title: thomason-exercise-1.4.ts
 ; Author: William Thomason
 ; Date: July 8 2019
 ; Modified By: William Thomason
 ; Description: This example takes who variables and has a funtion that takes those two variables
 : and outputs them in a console.log()
======================================
*/
//Variables
var make = "Chevy";
var model = "Silverado 2500 HD";
//message funtion
function message(one, two) {
    return 'My new truck is a ' + one + " " + two + ' Crew cab.';
}
//Output
console.log(message(make, model));
