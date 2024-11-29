const questions = [];
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        questions.push({ question: `What is ${i} x ${j}?`, answer: i * j });
    }
}

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function displayQuestion() {
    const randomQuestion = getRandomQuestion();
    document.getElementById('question').innerText = randomQuestion.question;
    document.getElementById('question').dataset.answer = randomQuestion.answer;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = parseInt(document.getElementById('question').dataset.answer);
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.innerText = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.innerText = 'Incorrect. Try again!';
        feedback.style.color = 'red';
    }
}

window.onload = displayQuestion;