function clearMessages() {
  // Funkcja czyszcząca wiadomości
}

function playGame(playerInput) {
  clearMessages();

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = 'nieznany ruch';
  if (playerInput == '1') {
    playerMove = 'kamień';
  } else if (playerInput == '2') {
    playerMove = 'papier';
  } else if (playerInput == '3') {
    playerMove = 'nożyce';
  }

  console.log(playerMove);
  alert('Twój ruch to: ' + playerMove);

  // Losowanie ruchu komputera
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerMove;
  if (randomNumber == 1) {
    computerMove = 'kamień';
  } else if (randomNumber == 2) {
    computerMove = 'papier';
  } else if (randomNumber == 3) {
    computerMove = 'nożyce';
  }

  console.log('Ruch komputera to: ' + computerMove);
  alert('Ruch komputera to: ' + computerMove);

  // Sprawdzenie wyniku gry
  if (playerMove === 'nieznany ruch') {
    console.log('Niepoprawny wybór gracza. Wybierz 1, 2 lub 3.');
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
}

// Wywołanie funkcji playGame po kliknięciu odpowiedniego przycisku
document.getElementById('play-rock').addEventListener('click', function () {
  playGame('1');
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame('2');
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame('3');
});
