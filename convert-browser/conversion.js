import CSVToJSON from 'csvtojson';

const text = document.querySelector('.text');
const input = document.querySelector('#profile_pic');
const reader = new FileReader();

input.addEventListener('change', fileUploadHandler);

function fileUploadHandler(event) {
  const files = [...event.target.files];
  reader.readAsText(files[0]);
  reader.onload = function () {
    // reader.result.toString().split(',');
    CSVToJSON()
      .fromString(reader.result)
      .then((elem) => {
        // elem.push({
        //   Header: 'Money',
        //   Description: '$ 1.000.000.000.000 for safety',
        // });
        renderTable(elem);
        // elem.forEach((file) => text.insertAdjacentText('beforeend', file.IP_ADDRESS));
        // console.log(JSON.stringify(elem)); // запрос на сервер при нажатии на кнопку отправить
      });
  };
}

function renderTable(elem) {
  elem.push({
    Header: 'Money',
    Description: '$ 1.000.000.000.000 for safety',
  });
  elem.forEach((file) => text.insertAdjacentText('beforeend', file.IP_ADDRESS));
}
