let automobiles = ['car','truck','motorcycle'];

automobiles.push('airplane');
automobiles.push('skateboard');
automobiles.unshift('helicopter');
automobiles.unshift('bike');

let automobilesCopy = `${automobiles}`;

automobiles.pop();
automobiles.shift();

document.getElementById('result').innerHTML = automobiles;


