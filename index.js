const holesDiv = document.querySelectorAll(".hole");
const board = document.querySelector(".board");
const imgsTag = document.querySelectorAll(".img");
const scoreSpan = document.querySelector("#score");
const startBtn = document.querySelector(".startBtn");
const counters = document.querySelector(".counters");
const tryAgain = document.querySelector("#tryAgain");
const timerSpan = document.querySelector("#timer");
//ver a array com as imgs tags, cada index
console.log(imgsTag);

let timer = 0;
//iniciar o jogo ao clicar start
startBtn.addEventListener("click", () => {
  //zerar o score ao clicar em start
  scoreSpan.innerText = Number(00);
  //esconder o botão
  startBtn.classList.add("hide");
  //rodar o jogo
  startGame();
  // criar um timer
  let clock = setInterval(() => {
  timer++;
  timerSpan.innerText = timer;
  }, 1000);

  console.log(clock)
  //mostrar o score
  counters.classList.remove("hide");
});


function startGame() {
  //encontrar um número inteiro aleatório entre 0 e 9
  const i = Math.floor(Math.random() * 9);
  console.log(i);

  //aparecer o abacate no index aleatório após 0,6 seg
  setTimeout(() => {
    imgsTag[i].setAttribute("src", "./images/avocado.png");
  }, 500);

  //remover o abacate no mesmo index após 1,2 seg
  setTimeout(() => {
    imgsTag[i].removeAttribute("src", "");
    startGame();
  }, 1300);
}

//criar o contador do score
let currentScore = 0;

console.log(holesDiv);

//adicionar eventListener em cada hole/div
holesDiv.forEach((hole) => {
  hole.addEventListener("click", (event) => {
    console.log(event.target.currentSrc);

    //se não clicar na foto do abacate, diminuir 5 pontos
    if (!event.target.currentSrc) {
      console.log("Errei");
      currentScore -= 5;
    }
    //quando clicar no abacate, somar o score e mudar para foto dele amassado
    if (event.target.currentSrc) {
      event.target.src = "./images/smashed.png";
      currentScore += 10;
    }
    //mudar o scoreSpan para o novo valor atual de score
    scoreSpan.innerText = currentScore;
    endGame();
  });
});

function endGame() {
  //se o score chegar a 150, mostrar a mensagem e esconder o board e o score
  if (currentScore === 150) {
    window.alert("You win!! 🥑");
    board.classList.add("hide");
    counters.classList.add("hide");
    tryAgain.classList.remove("hide");
    clearInterval(clock);
  }
  //se o score chegar a -50, mostrar a mensagem e esconder o board e o score
  if (currentScore === -50) {
    window.alert("Try again 😕");
    board.classList.add("hide");
    counters.classList.add("hide");
    tryAgain.classList.remove("hide");
    clearInterval(clock);
  }

  //se eu colocar os "hide" fora dos "if", o jogo começa e o board já é escondido em seguida
}





//rgb(74, 36, 19)
