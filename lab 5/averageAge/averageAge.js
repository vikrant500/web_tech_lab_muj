function getAverageAge(people) {
    if (people.length === 0) {
        return 0; // Return 0 if the array is empty
    }

    const totalAge = people.reduce((acc, person) => acc + person.age, 0);
    return totalAge / people.length;
}

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

console.log(getAverageAge(people)); // Output: 30 (average of 30, 25, and 35)