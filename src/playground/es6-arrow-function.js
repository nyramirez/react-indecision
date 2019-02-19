// function square (x) {
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

const getFirstName = (fullName) => {
    return (fullName.split(' ')[0]);
};

const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getFirstName('Nestor Ramirez'));
console.log('****************************');
console.log(getLastName('Nestor Ramirez'));