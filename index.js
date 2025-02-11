let spanPoints = document.querySelector("h1 span"),
  h1 = document.querySelector("h1"),
  items = document.querySelectorAll(".game span"),
  endGame = 0;
turn = "X";

clearInput();

items.forEach((ele) => {
  ele.addEventListener("click", function (event) {
    // console.log(turn);
    if (turn == "X" && !event.target.innerHTML) {
      event.target.innerHTML = "X";
      h1.firstChild.nodeValue = "O";
      spanPoints.innerHTML = "";
      turn = "O";
      endGame++;
    } else if (turn == "O" && !event.target.innerHTML) {
      event.target.innerHTML = "O";
      h1.firstChild.nodeValue = "X";
      turn = "X";
      endGame++;
    }

    winner();
    if (endGame == 9) notWin();
  });
});

/**
 * Check if the game is over and if there is a winner.
 * If there is a winner, it will call the win function with the correct parameters.
 * If there is no winner, it will call the notWin function.
 * @function winner
 */
function winner() {
  // Handle rows
  if (
    items[0].innerHTML == items[1].innerHTML &&
    items[1].innerHTML == items[2].innerHTML &&
    items[1].innerHTML
  ) {
    win(0, 1, 2, items[0].innerHTML);
  } else if (
    items[3].innerHTML == items[4].innerHTML &&
    items[4].innerHTML == items[5].innerHTML &&
    items[4].innerHTML
  ) {
    win(3, 4, 5, items[3].innerHTML);
  } else if (
    items[6].innerHTML == items[7].innerHTML &&
    items[7].innerHTML == items[8].innerHTML &&
    items[6].innerHTML
  ) {
    win(6, 7, 8, items[6].innerHTML);
  }

  // Handle columns
  else if (
    items[0].innerHTML == items[3].innerHTML &&
    items[3].innerHTML == items[6].innerHTML &&
    items[6].innerHTML
  ) {
    win(0, 3, 6, items[0].innerHTML);
  } else if (
    items[1].innerHTML == items[4].innerHTML &&
    items[4].innerHTML == items[7].innerHTML &&
    items[4].innerHTML
  ) {
    win(1, 4, 7, items[1].innerHTML);
  } else if (
    items[2].innerHTML == items[5].innerHTML &&
    items[5].innerHTML == items[8].innerHTML &&
    items[8].innerHTML
  ) {
    win(2, 5, 8, items[2].innerHTML);
  }

  // Handle diagonals
  else if (
    items[0].innerHTML == items[4].innerHTML &&
    items[4].innerHTML == items[8].innerHTML &&
    items[8].innerHTML
  ) {
    win(0, 4, 8, items[0].innerHTML);
  } else if (
    items[2].innerHTML == items[4].innerHTML &&
    items[4].innerHTML == items[6].innerHTML &&
    items[4].innerHTML
  ) {
    win(2, 4, 6, items[2].innerHTML);
  }
}

function win(idx1, idx2, idx3, val) {
  items[idx1].classList.add("colorful");
  items[idx2].classList.add("colorful");
  items[idx3].classList.add("colorful");
  h1.firstChild.nodeValue = `${val} win`;
  setInterval(() => {
    spanPoints.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, 3000);
  setTimeout(() => {
    window.location.reload();
  }, 3200);
}
function notWin() {
  h1.innerHTML = "No One Win";
  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

function clearInput() {
  items.forEach((ele) => (ele.innerHTML = ""));
}
