const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

const user = {
    name: 'Nestor',
    cities: ['Puebla', 'Houston', 'El Paso'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// **************************

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        // return this.numbers.map(() => this.multiplyBy * this.numbers);
        console.log(this.numbers);
        console.log(this.multiplyBy);
        return this.numbers.map((number) => number * this.multiplyBy);
    }
    
};
console.log(multiplier.multiply());