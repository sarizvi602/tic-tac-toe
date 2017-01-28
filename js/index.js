$(document).ready(function() {
  var gameOn = false;
  var playSym;
  var compSym;
  var table = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  var playWin = 0;
  var compWin = 0;

  $("#xbtn").click(function() {//picking X
    if (!gameOn) {
      gameOn = true;//Turn game On
      table = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
      playSym = "X";
      compSym = "O";
      $("#xbtn,#obtn").hide();
      $("#winMess,#1,#2,#3,#4,#5,#6,#7,#8,#9").html("");
    }
  });
  $("#obtn").click(function() {//Picking O
    if (!gameOn) {
      gameOn = true;//turn on the game
      table = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
      playSym = "O";
      compSym = "X";
      $("#xbtn,#obtn").hide();
      $("#winMess,#1,#2,#3,#4,#5,#6,#7,#8,#9").html("");
    }
  });
  //check for win/loss
  function checkWin() {
    //check three in a row horizontally
    for (var i = 0; i <= 2; i++) {
      if (table[i][0] === table[i][1] && table[i][0] === table[i][2] && table[i][0] !== "") {
        gameOn = false;
        if (table[i][0] === playSym) {
          playWin += 1;
          $("#winMess").html("Congratulations! You Won!");
          $("#playWin").html(playWin);
        } else {
          compWin += 1;
          $("#winMess").html("Oops! You Lost!");
          $("#compWin").html(compWin);
        }
        $("#xbtn,#obtn").show();
        return;
      }
    }
    // check three in a row vertically
    for (var i = 0; i <= 2; i++) {
      if (table[0][i] === table[1][i] && table[0][i] === table[2][i] && table[0][i] !== "") {
        gameOn = false;
        if (table[0][i] === playSym) {
          playWin += 1;
          $("#winMess").html("Congratulations! You Won!");
          $("#playWin").html(playWin);
        } else {
          compWin += 1;
          $("#winMess").html("Oops! You Lost!");
          $("#compWin").html(compWin);
        }
        $("#xbtn,#obtn").show();
        return;
      }
    }
    //check three in a row diagonally
    if (table[0][0] === table[1][1] && table[0][0] === table[2][2] && table[0][0] !== "") {
      gameOn = false;
      if (table[0][0] === playSym) {
        playWin += 1;
        $("#winMess").html("Congratulations! You Won!");
        $("#playWin").html(playWin);
      } else {
        compWin += 1;
        $("#winMess").html("Oops! You Lost!");
        $("#compWin").html(compWin);
      }
      $("#xbtn,#obtn").show();
      return;
    }
    //checking three in a row diagonally
    if (table[0][2] === table[1][1] && table[0][2] === table[2][0] && table[0][2] !== "") {
      gameOn = false;
      if (table[0][2] === playSym) {
        playWin += 1;
        $("#winMess").html("Congratulations! You Won!");
        $("#playWin").html(playWin);
      } else {
        compWin += 1;
        $("#winMess").html("Oops! You Lost!");
        $("#compWin").html(compWin);
      }
      $("#xbtn,#obtn").show();
      return;
    }
  }
  //Move made by computer
  function compMove() {
    var emptyspots = [];//Looking for empty spots
    for (var i = 0; i < table.length; i++) {
      for (var j = 0; j < table[i].length; j++) {
        if (table[i][j] === "") {
          emptyspots.push([i, j]);
        }
      }
    }

    if (emptyspots.length === 0) {//if no empty spots
      gameOn = false;//turn off the game and call it a tie
      $("#winMess").html("It's a tie!");
      $("#xbtn,#obtn").show();
    } else {//if empty spot then pick a location at random for computer
      var spot = Math.floor(Math.random() * (emptyspots.length));
      table[emptyspots[spot][0]][emptyspots[spot][1]] = compSym;
      if (emptyspots[spot][0]===0 && emptyspots[spot][1]===0) {
        $("#1").html(compSym);
      } else if (emptyspots[spot][0]===0 && emptyspots[spot][1]===1) {
        $("#2").html(compSym);
      } else if (emptyspots[spot][0]===0 && emptyspots[spot][1]===2) {
        $("#3").html(compSym);
      } else if (emptyspots[spot][0]===1 && emptyspots[spot][1]===0) {
        $("#4").html(compSym);
      } else if (emptyspots[spot][0]===1 && emptyspots[spot][1]===1) {
        $("#5").html(compSym);
      } else if (emptyspots[spot][0]===1 && emptyspots[spot][1]===2) {
        $("#6").html(compSym);
      } else if (emptyspots[spot][0]===2 && emptyspots[spot][1]===0) {
        $("#7").html(compSym);
      } else if (emptyspots[spot][0]===2 && emptyspots[spot][1]===1) {
        $("#8").html(compSym);
      } else if (emptyspots[spot][0]===2 && emptyspots[spot][1]===2) {
        $("#9").html(compSym);
      }
    }
  }
  //if one of the box is clicked, pick it as user's choice
  $("#1").click(function() {
    if (gameOn && table[0][0] === "") {
      table[0][0] = playSym;
      $("#1").html(playSym);
      checkWin();
      if (gameOn) {
        compMove();
        checkWin();
      }
    }
  });
  $("#2").click(function() {
    if (gameOn && table[0][1] === "") {
      table[0][1] = playSym;
      $("#2").html(playSym);
      checkWin();
      if (gameOn) {
        compMove();
        checkWin();
      }
    }
  });
  $("#3").click(function() {
    if (gameOn && table[0][2] === "") {
      table[0][2] = playSym;
      $("#3").html(playSym);
      checkWin();
      if (gameOn) {
        compMove();
        checkWin();
      }
    }
  });
  $("#4").click(function() {
    if (gameOn && table[1][0] === "") {
      table[1][0] = playSym;
      $("#4").html(playSym);
      checkWin();
      if (gameOn) {
        compMove();
        checkWin();
      }
    }
  });
  $("#5").click(function() {
    if (gameOn && table[1][1] === "") {
      table[1][1] = playSym;
      $("#5").html(playSym);
      checkWin();
      if (gameOn) {
        compMove();
        checkWin();
      }
    }
  });
  $("#6").click(function() {
    if (gameOn && table[1][2] === "") {
      table[1][2] = playSym;
      $("#6").html(playSym);
      checkWin();
      if (gameOn) {
        compMove();
        checkWin();
      }
    }
  });
  $("#7").click(function() {
    if (gameOn && table[2][0] === "") {
      table[2][0] = playSym;
      $("#7").html(playSym);
      checkWin();
      if (gameOn) {
        compMove();
        checkWin();
      }
    }
  });
  $("#8").click(function() {
    if (gameOn && table[2][1] === "") {
      table[2][1] = playSym;
      $("#8").html(playSym);
      checkWin();
      if (gameOn) {
        compMove();
        checkWin();
      }
    }
  });
  $("#9").click(function() {
    if (gameOn && table[2][2] === "") {
      table[2][2] = playSym;
      $("#9").html(playSym);
      checkWin();
      if (gameOn) {
        compMove();
        checkWin();
      }
    }
  });
});