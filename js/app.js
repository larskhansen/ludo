/*
 CREATED BY LKH - 2017
*/

$("#showActivePlayer").html(activePlayer.color);
$("#attemptsLeft").html(activePlayer.attemptsLeft);

/**
 * Manipulate piece.
 */
$("circle[type='piece']").click(function () {
  if (activePlayer.color === $(this).attr('color')) {

    var pieceId = (parseInt($(this).attr('id').split('-')[1]) - 1);

    if (activePlayer.pieces[pieceId].position !== activePlayer.color + "-home") {
      activePiece = activePlayer.pieces[pieceId];
      if (movesLeft === 0) {
        movesLeft = dice.number;
      }
      activePiece.newMove($(this));
    }
  }
});

$("#diceButton").click(function () {
  if (!activePlayer.canMovePiece()) {
    dice.throwDice();
  }
});
