function getAverageAge(people) {
    if (people.length === 0) {
        return 0; // Return 0 if the array is empty
    }

    const totalAge = people.reduce((acc, person) => acc + person.age, 0);
    return totalAge / people.length;
}

const people = [
    { name: "Vik", age: 30 },
    { name: "Aryan", age: 25 },
    { name: "Ayan", age: 35 }
];

console.log(getAverageAge(people)); // Output: 30 (average of 30, 25, and 35)