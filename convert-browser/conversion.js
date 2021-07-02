import CSVToJSON from 'csvtojson';

const input = document.querySelector('#simple_file');
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
        console.log(JSON.stringify(elem));
      });
  };
  reader.onerror = function () {
    console.log(reader.error);
  };
}
