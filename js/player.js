/*
 CREATED BY LKH - 2017
*/

/**
 * The Player
 *
 * @var color
 * @var startField
 * @var pieces
 * @var hasThrownDice
 * @var attemptsLeft
 */
function Player(color, startField, pieces, thrownDice, attemptsLeft) {
  this.color = color;
  this.startField = startField; // Board
  this.pieces = pieces; // array of Pieces
  this.thrownDice = thrownDice; // Dice
  this.attemptsLeft = attemptsLeft; // Dice
}

/**
 * Change to the next player
 * Resets the hasThrownDice
 * Sets the attemptsLeft correctly
 *
 * @return bool
 */
Player.prototype.changePlayer = function () {
  var index = players.indexOf(activePlayer);
  activePlayer = (index == 3) ? players[0] : players[index + 1];

  activePlayer.attemptsLeft = (activePlayer.hasActivePieces()) ? 1 : 3;
  activePlayer.thrownDice = false;
  $("#showActivePlayer").html(activePlayer.color);
  $("#attemptsLeft").html(activePlayer.attemptsLeft);
}

/**
 * Tell if the activeplayer can move a piece.
 *
 * @return bool
 */
Player.prototype.canMovePiece = function () {
  var returnValue = false;
  if (activePlayer.thrownDice == true && activePlayer.hasActivePieces()) {
    returnValue = true;
  }

  if (dice.number == 6 && !activePlayer.hasActivePieces()) {
    returnValue = true;
  }
  return returnValue;
}

/**
 * Check if the all pieces are home or finished.
 *
 * @return bool
 */
Player.prototype.hasActivePieces = function () {
  var returnValue = false;
  for (var i = 0; i < this.pieces.length; i++) {
    if (this.pieces[i].position !== this.color + "-base" &&
      this.pieces[i].position !== this.color + "-home") {
      returnValue = true;
    }
  }
  return returnValue;
}
