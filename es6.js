const numbers = [12,23,34,56]
const student = {
    name : 'salib khan',
    age : 32,
    movies : ['king khan', 'Dhakar Mastan']
}

// 1. template string 
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65 ; 
const isEven = X => X % 2 == 0 ;
const addThree = (x,y,z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//spread operator

// const currentNumbers = [...numbers, 55]
const newNumbers = [...numbers]

//create a new array from an older array and add an element
const currentNumbers = [...numbers,55]

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);





console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);