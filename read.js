const fs = require('fs');
const path = require('path');
const student = require('files/one.json');
const csv = require('csv-parser');

// чтение json файла

console.log(student);

// чтение csv файла с помощью csv-parser
const results = [];
fs.createReadStream('files/todo.csv') // название файла, которое читаю
  .pipe(csv()) // в скобках можно указать разделитель помимо запятой, которая по умолчанию стоит
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });
