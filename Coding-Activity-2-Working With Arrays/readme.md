# Arrays
There are many situations in which you will have a collection of related data.

Suppose you have a roster of students in a classroom. One way you could store information about the individual students is to assign each to a variable.
```
var student1 = "Mary";
var student2 = "Joseph";
var student3 = "Alan";
var student4 = "Beatrice";
```
But what if you had hundreds of students? Assigning each student to a separate variable will quickly become tedious.

Thankfully, you can handle collections of data in JavaScript by using `Arrays`.

Assigning Values
A JavaScript array is a data structure that can store multiple values. Here's an example of an array containing student names:
```
var students = ["Mary" ,"Joseph", "Alan", "Beatrice"];
```
An array is defined using brackets []. You can assign values when creating the array by including them in between the brackets, with commas separating the values.

You can also create an empty array by declaring a variable and assigning empty brackets to it. Here's an example:
```
var emptyArray = []
```
## Accessing Array Values
Every item in the array has an index that defines its position in the array, starting with zero. In the example array for `students`, the first position has the index 0 and the value `Mary`. The second item will have an index of one, and so forth.

Values in an array are accessed using their index. Here's an example of how this works:
```
console.log(students[0])
```
This will print the value `Mary` to the console since that is the value of index `0`.

In an array, you can store any valid JavaScript data type and you are not limited to storing data of a single type. This means that you can store numbers, strings, etc. in the same array.

For example, here's an array containing multiple data types:
```
var diverseArray = ["Janice", 31, "Doctor", "01/12/2020"]
```
The array `diverseArray` contains strings, number and dates. You can access any of these elements using their index as shown earlier.

## Task Instructions
In this activity you are given an array named `numArray` that contains numbers 1 through 10. Your task is to do the following:

- Using the Javascript `let` keyword declare a new variable called `elementAtIndexFive`. The value of this variable should be the element with index 5 in the `numArray` array.
## A Note About Commenting Code__
Comments are the lines in a code file that begin with `//.` These lines are ignored by JavaScript, and they allow you to explain your code. Commenting your code is an extremely useful habit as it allows other developers to read your code more easily. It will also help you better understand your own applications when you look back at them. In the `main.js` file for this exercise, you can view some instructions in the comments as well as viewing the task instructions here, in the instructions panel.

## Task

- Declare a variable called `elementAtIndexFive` using the `let` keyword. The value of this variable should be the element with index 5 in the `numArray` array.