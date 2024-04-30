const Api = "https://api.nationalize.io/?name=";

const text = document.querySelector("h1");
const info = document.querySelector("h4");
const record = new webkitSpeechRecognition();

record.continuous = false;

function listren() {
  record.start();
}

record.onstart = (event) => {
  console.log("start");
};

record.onresult = (result) => {
  console.log(result);
  const word = result.results[0][0].transcript;
  text.innerHTML = word;
  getData(word);
};

const getData = async (word) => {
  const response = await fetch(`${Api}${word}`);
  const data = await response.json();
  console.log(data);
  info.innerHTML = data.country[0].country_id;
};
record.onend = () => {
  console.log("end");
};
