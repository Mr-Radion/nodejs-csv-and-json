const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// запись текстового файла

fs.writeFile('files/one.txt', 'work', (err) => {
  if (err) console.log(err.message);
});

// запись json файла
const man = {
  name: 'Alex',
  age: '30',
  department: 'History',
  car: 'yaguar',
};

fs.writeFile('files/one.json', JSON.stringify(man), (err) => {
  if (err) console.log(err.message);
});

// создаем csv файл с помощью csv-writer

const csvWriter = createCsvWriter({
  path: 'files/test.csv', // путь к файлу
  header: [
    // name, LANGUAGE - это колонки таблицы
    { id: 'name', title: 'NAME' },
    { id: 'surname', title: 'LastName' },
    { id: 'age', title: 'AGE' },
    { id: 'gender', title: 'G' },
  ],
});

const data = [
  {
    name: 'John',
    surname: 'Snow',
    age: '26',
    gender: 'M',
  },
  {
    name: 'John',
    surname: 'Snow',
    age: '25',
    gender: 'M',
  },
  {
    name: 'John',
    surname: 'Snow',
    age: '24',
    gender: 'M',
  },
  {
    name: 'John',
    surname: 'Snow',
    age: '23',
    gender: 'M',
  },
  {
    name: 'John',
    surname: 'Snow',
    age: '30',
    gender: 'M',
  },
  {
    name: 'John',
    surname: 'Snow',
    age: '28',
    gender: 'M',
  },
];

// запись csv файла

csvWriter.writeRecords(data).then(() => {
  console.log('...Done');
});
