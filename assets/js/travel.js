const visitedCountries = [
  { name: 'Australia', wiki: 'https://wikipedia.org/wiki/Australia' },
  { name: 'Austria', wiki: 'https://wikipedia.org/wiki/Austria' },
  { name: 'Bolivia', wiki: 'https://wikipedia.org/wiki/Bolivia' },
  { name: 'Bulgaria', wiki: 'https://wikipedia.org/wiki/Bulgaria' },
  { name: 'Cambodia', wiki: 'https://wikipedia.org/wiki/Cambodia' },
  { name: 'Canada', wiki: 'https://wikipedia.org/wiki/Canada' },
  { name: 'Croatia', wiki: 'https://wikipedia.org/wiki/Croatia' },
  { name: 'Czechia', wiki: 'https://wikipedia.org/wiki/Czech_Republic' },
  { name: 'Denmark', wiki: 'https://wikipedia.org/wiki/Denmark' },
  { name: 'England', wiki: 'https://wikipedia.org/wiki/England' },
  { name: 'Fiji', wiki: 'https://wikipedia.org/wiki/Fiji' },
  { name: 'Finland', wiki: 'https://wikipedia.org/wiki/Finland' },
  { name: 'France', wiki: 'https://wikipedia.org/wiki/France' },
  { name: 'Germany', wiki: 'https://wikipedia.org/wiki/Germany' },
  { name: 'Hong Kong', wiki: 'https://wikipedia.org/wiki/Hong_Kong' },
  { name: 'Indonesia', wiki: 'https://wikipedia.org/wiki/Indonesia' },
  { name: 'Ireland', wiki: 'https://wikipedia.org/wiki/Ireland' },
  { name: 'Japan', label: 'Japan (airport only)', wiki: 'https://wikipedia.org/wiki/Japan' },
  { name: 'Madagascar', wiki: 'https://wikipedia.org/wiki/Madagascar' },
  { name: 'Malaysia', wiki: 'https://wikipedia.org/wiki/Malaysia' },
  { name: 'Mexico', wiki: 'https://wikipedia.org/wiki/Mexico' },
  { name: 'New Caledonia', wiki: 'https://wikipedia.org/wiki/New_Caledonia' },
  { name: 'New Zealand', wiki: 'https://wikipedia.org/wiki/New_Zealand' },
  { name: 'Romania', wiki: 'https://wikipedia.org/wiki/Romania' },
  { name: 'Singapore', wiki: 'https://wikipedia.org/wiki/Singapore' },
  { name: 'Slovenia', wiki: 'https://wikipedia.org/wiki/Slovenia' },
  { name: 'South Africa', wiki: 'https://wikipedia.org/wiki/South_Africa' },
  { name: 'Spain', wiki: 'https://wikipedia.org/wiki/Spain' },
  { name: 'Sweden', wiki: 'https://wikipedia.org/wiki/Sweden' },
  { name: 'Thailand', wiki: 'https://wikipedia.org/wiki/Thailand' },
  { name: 'United States', wiki: 'https://wikipedia.org/wiki/United_States' }
];

const visitedStates = [
  { name: 'Alabama', wiki: 'https://wikipedia.org/wiki/Alabama' },
  { name: 'Arizona', wiki: 'https://wikipedia.org/wiki/Arizona' },
  { name: 'California', wiki: 'https://wikipedia.org/wiki/California' },
  { name: 'Colorado', wiki: 'https://wikipedia.org/wiki/Colorado' },
  { name: 'Delaware', wiki: 'https://wikipedia.org/wiki/Delaware' },
  { name: 'Florida', wiki: 'https://wikipedia.org/wiki/Florida' },
  { name: 'Georgia', wiki: 'https://wikipedia.org/wiki/Georgia' },
  { name: 'Hawaii', wiki: 'https://wikipedia.org/wiki/Hawaii' },
  { name: 'Illinois', wiki: 'https://wikipedia.org/wiki/Illinois' },
  { name: 'Indiana', wiki: 'https://wikipedia.org/wiki/Indiana' },
  { name: 'Kansas', wiki: 'https://wikipedia.org/wiki/Kansas' },
  { name: 'Kentucky', wiki: 'https://wikipedia.org/wiki/Kentucky' },
  { name: 'Maryland', wiki: 'https://wikipedia.org/wiki/Maryland' },
  { name: 'Massachusetts', wiki: 'https://wikipedia.org/wiki/Massachusetts' },
  { name: 'Michigan', wiki: 'https://wikipedia.org/wiki/Michigan' },
  { name: 'Missouri', wiki: 'https://wikipedia.org/wiki/Missouri' },
  { name: 'Nebraska', wiki: 'https://wikipedia.org/wiki/Nebraska' },
  { name: 'Nevada', wiki: 'https://wikipedia.org/wiki/Nevada' },
  { name: 'New Jersey', wiki: 'https://wikipedia.org/wiki/New_Jersey' },
  { name: 'New York', wiki: 'https://wikipedia.org/wiki/New_York_(state)' },
  { name: 'North Carolina', wiki: 'https://wikipedia.org/wiki/North_Carolina' },
  { name: 'Ohio', wiki: 'https://wikipedia.org/wiki/Ohio' },
  { name: 'Oregon', wiki: 'https://wikipedia.org/wiki/Oregon' },
  { name: 'Pennsylvania', wiki: 'https://wikipedia.org/wiki/Pennsylvania' },
  { name: 'South Carolina', wiki: 'https://wikipedia.org/wiki/South_Carolina' },
  { name: 'South Dakota', wiki: 'https://wikipedia.org/wiki/South_Dakota' },
  { name: 'Tennessee', wiki: 'https://wikipedia.org/wiki/Tennessee' },
  { name: 'Texas', label: 'Texas (airport only)', wiki: 'https://wikipedia.org/wiki/Texas' },
  { name: 'Utah', wiki: 'https://wikipedia.org/wiki/Utah' },
  { name: 'Virginia', wiki: 'https://wikipedia.org/wiki/Virginia' },
  { name: 'Washington', wiki: 'https://en.wikipedia.org/wiki/Washington_(state)' },
  { name: 'Washington D.C.', wiki: 'https://wikipedia.org/wiki/Washington,_D.C.' },
  { name: 'West Virginia', wiki: 'https://wikipedia.org/wiki/West_Virginia' },
  { name: 'Wyoming', wiki: 'https://wikipedia.org/wiki/Wyoming' },
];

function renderPlaces(items, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  container.innerHTML = items.map(item => {
    const label = item.label || item.name;
    return `<a href="${item.wiki}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin:0 0.35rem 0.45rem 0;padding:0.2rem 0.65rem;border:1px solid rgba(0,0,0,0.15);border-radius:999px;text-decoration:none;color:inherit;">${label}</a>`;
  }).join('');
}

function intToEnglish(num) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (num === 0) return 'zero';
  if (num < 0) return 'minus ' + intToEnglish(Math.abs(num));

  let words = '';

  if (Math.floor(num / 1000) > 0) {
    words += intToEnglish(Math.floor(num / 1000)) + ' thousand ';
    num %= 1000;
  }

  if (Math.floor(num / 100) > 0) {
    words += ones[Math.floor(num / 100)] + ' hundred ';
    num %= 100;
  }

  if (num > 0) {
    if (words !== '') words += 'and ';

    if (num < 10) {
      words += ones[num];
    } else if (num < 20) {
      words += teens[num - 11];
    } else {
      words += tens[Math.floor(num / 10)];
      if (num % 10 > 0) words += '-' + ones[num % 10];
    }
  }

  return words.trim();
}

document.getElementById('countryCount').textContent = intToEnglish(visitedCountries.length);
renderPlaces(visitedCountries, 'countriesVisited');
renderPlaces(visitedStates, 'statesVisited');
