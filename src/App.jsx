import "./App.css";
import versoCarta from "./assets/img/box.png";
import bowser from "./assets/img/bowser.png";
import luigi from "./assets/img/luigi.png";
import mario from "./assets/img/mario.png";
import peach from "./assets/img/peach.png";
import toad from "./assets/img/toad.png";
import yoshi from "./assets/img/yoshi.png";

function App() {
  window.onload = () => {
    const cards = document.querySelectorAll(".card");
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;

      this.classList.add("flip");

      if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
      }

      secondCard = this;
      hasFlippedCard = false;

      checkForMatch();
    }

    //função que checa se as cartas são iguais
    function checkForMatch() {
      if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
      }

      unflipCards();
    }

    //função que desabilita as cartas
    function disableCards() {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);

      resetBoard();
    }

    //funcão que desvira as cartas
    function unflipCards() {
      lockBoard = true;

      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
      }, 1500);
    }

    //função que reseta o tabuleiro
    function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
    }

    //função que embaralha as cartas
    (function shuffle() {
      cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
      });
    })();

    //adiciona evento de clique na carta
    cards.forEach((card) => {
      card.addEventListener("click", flipCard);
    });
  };

  return (
    <main className="memory-game">
      <div className="card" data-card="bowser">
        <img src={bowser} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="luigi">
        <img src={luigi} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="mario">
        <img src={mario} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="peach">
        <img src={peach} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="toad">
        <img src={toad} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="yoshi">
        <img src={yoshi} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="bowser">
        <img src={bowser} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="luigi">
        <img src={luigi} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="mario">
        <img src={mario} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="peach">
        <img src={peach} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="toad">
        <img src={toad} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
      <div className="card" data-card="yoshi">
        <img src={yoshi} alt="Face da carta" className="card-front" />
        <img src={versoCarta} alt="Verso da carta" className="card-back" />
      </div>
    </main>
  );
}

export default App;
