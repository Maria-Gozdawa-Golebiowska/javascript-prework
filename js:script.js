let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');


console.log('Gracz wpisał: ' + playerInput);


let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
}


console.log( playerMove);

alert(' Twój ruch to: ' + playerMove);


let randomNumber = Math.floor(Math.random() * 3) + 1;

if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';
}

console.log('Ruch komputera to: ' + computerMove);
alert('Ruch komputera to: ' + computerMove);


if (playerMove === 'nieznany ruch') {
  console.log('Niepoprawy wybór gracza. Wybierz 1, 2 lub 3.');
} else if (playerMove === computerMove) {
  console.log('Remis');
  alert('Remis');
} else if (
  (playerMove == 'kamień' && computerMove == 'nożyce') ||
  (playerMove == 'papier' && computerMove == 'kamień') ||
  (playerMove == 'nożyce' && computerMove == 'papier')
) {
  console.log('Gracz wygrywa!');
  alert('Gracz wygrywa!');
} else {
  console.log('Komputer wygrywa!');
  alert('Komputer wygrywa!');
}