var faker = require('faker');
var database = { tutorials: []};

var subjects = ["English","Science","Social","Sanskrit","Telugu","Hindi"];

for (var i = 1; i<= 300; i++) {
database.tutorials.push({
id: i,
name: faker.commerce.productName(),
description: faker.lorem.sentences(),
price: faker.commerce.price(),
duration: faker.commerce.price(),
imageUrl: "https://source.unsplash.com/1600x900/?product",
subject: subjects[faker.datatype.number()%6]
});
}
console.log(JSON.stringify(database));