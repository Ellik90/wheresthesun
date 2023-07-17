const apiKey = process.env.API_KEY;

const city = 'Stockholm'; // Byt ut mot den stad du vill ha väderdata för

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Här får du svaret från API:et i "data"-objektet
    console.log(data);
  })
  .catch(error => {
    console.error('Ett fel inträffade:', error);
  });
