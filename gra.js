// Funkcja getMoveName
function getMoveName(argMoveId) {
  if (argMoveId == 1) {
      return 'kamień';
  } else if (argMoveId == 2) {
      return 'papier';
  } else if (argMoveId == 3) {
      return 'nożyce';
  } else {
      return 'nieznany ruch';
  }
}

// Funkcja displayResult
function displayResult(argComputerMove, argPlayerMove) {
  console.log('Komputer zagrał ' + argComputerMove + ', a Ty zagrałeś ' + argPlayerMove);

  if (argPlayerMove === 'nieznany ruch') {
      console.log('Niepoprawny wybór gracza. Wybierz 1, 2 lub 3.');
      alert('Niepoprawny wybór gracza. Wybierz 1, 2 lub 3.');
  } else if (argPlayerMove === argComputerMove) {
      console.log('Remis');
      alert('Remis');
  } else if (
      (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') ||
      (argPlayerMove === 'papier' && argComputerMove === 'kamień') ||
      (argPlayerMove === 'nożyce' && argComputerMove === 'papier')
  ) {
      console.log('Gracz wygrywa!');
      alert('Gracz wygrywa!');
  } else {
      console.log('Komputer wygrywa!');
      alert('Komputer wygrywa!');
  }
}

// Ustawienie ruchu komputera
let randomNumber = Math.floor(Math.random() * 3) + 1;
let computerMove = getMoveName(randomNumber);

// Ustawienie ruchu gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(+playerInput);

// Wyświetlenie ruchów
console.log('Ruch komputera to: ' + computerMove);
alert('Ruch komputera to: ' + computerMove);

console.log('Twój ruch to: ' + playerMove);
alert('Twój ruch to: ' + playerMove);

// Wywołanie funkcji displayResult
displayResult(computerMove, playerMove);
