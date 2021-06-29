const CSVToJSON = require('csvtojson');
const JSONTOCSV = require('json2csv').parse;
const fs = require('fs');

CSVToJSON()
  .fromFile('files/events.csv')
  .then((elem) => {
    elem.push({
      Header: 'Money',
      Description: '$ 1.000.000.000.000 for safety',
    });
    console.log(elem);
    const csv = JSONTOCSV(elem, { fields: ['Header', 'Description', 'Money'] });
    fs.writeFileSync('files/jsonto.csv', csv);
  });
