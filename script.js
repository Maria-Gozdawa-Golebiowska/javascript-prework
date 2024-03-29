{
  const clearMessages = function() {
    document.getElementById('messages').innerText = '';
  };

  const playGame = function(playerInput) {
    clearMessages();
    console.log('Gracz wpisał: ' + playerInput);
  
    const getPlayerMove = function() {
      if (playerInput === '1') {
        return 'kamień';
      } else if (playerInput === '2') {
        return 'papier';
      } else if (playerInput === '3') {
        return 'nożyce';
      } else {
        return 'nieznany ruch';
      }
    };
    
    const playerMoveResult = getPlayerMove();
    console.log(playerMoveResult);
    alert('Twój ruch to: ' + playerMoveResult);
  
    // komputer
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerMove;
    if (randomNumber === 1) {
      computerMove = 'kamień';
    } else if (randomNumber === 2) {
      computerMove = 'papier';
    } else if (randomNumber === 3) {
      computerMove = 'nożyce';
    }
  
    console.log('Ruch komputera to: ' + computerMove);
    alert('Ruch komputera to: ' + computerMove);
  
    if (playerMoveResult === 'nieznany ruch') {
      console.log('Niepoprawy wybór gracza. Wybierz 1, 2 lub 3.');
    } else if (playerMoveResult === computerMove) {
      console.log('Remis');
      alert('Remis');
    } else if (
      (playerMoveResult === 'kamień' && computerMove === 'nożyce') ||
      (playerMoveResult === 'papier' && computerMove === 'kamień') ||
      (playerMoveResult === 'nożyce' && computerMove === 'papier')
    ) {
      console.log('Gracz wygrywa!');
      alert('Gracz wygrywa!');
    } else {
      console.log('Komputer wygrywa!');
      alert('Komputer wygrywa!');
    }
  };
  
  // Wywołanie funkcji playGame 
  document.getElementById('play-rock').addEventListener('click', function () {
    playGame('1');
  });
  
  document.getElementById('play-paper').addEventListener('click', function () {
    playGame('2');
  });
  
  document.getElementById('play-scissors').addEventListener('click', function () {
    playGame('3');
  });
}
