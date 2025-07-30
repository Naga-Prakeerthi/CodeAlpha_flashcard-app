let flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the color of the sky?", answer: "Blue" }
];

let currentCard = 0;
let flipped = false;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const cardEl = document.getElementById("flashcard");

function renderCard() {
  questionEl.textContent = flashcards[currentCard].question;
  answerEl.textContent = flashcards[currentCard].answer;
  cardEl.classList.remove("flipped");
  flipped = false;
}

function showAnswer() {
  cardEl.classList.toggle("flipped");
  flipped = !flipped;
}

function nextCard() {
  currentCard = (currentCard + 1) % flashcards.length;
  renderCard();
}

function previousCard() {
  currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
  renderCard();
}

function addCard() {
  const question = prompt("Enter the question:");
  const answer = prompt("Enter the answer:");
  if (question && answer) {
    flashcards.push({ question, answer });
    currentCard = flashcards.length - 1;
    renderCard();
  }
}

function editCard() {
  const question = prompt("Edit the question:", flashcards[currentCard].question);
  const answer = prompt("Edit the answer:", flashcards[currentCard].answer);
  if (question && answer) {
    flashcards[currentCard] = { question, answer };
    renderCard();
  }
}

function deleteCard() {
  if (flashcards.length > 1) {
    flashcards.splice(currentCard, 1);
    currentCard = 0;
    renderCard();
  } else {
    alert("You need at least one card.");
  }
}

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

renderCard();