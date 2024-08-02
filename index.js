const questions = [
    {
        question: 'Какая функция используется для вывода информационного сообщения на консоль?',
        answers: [
            {text: 'alert()', correct: false},
            {text: 'console.log()', correct: true},
            {text: 'prompt()', correct: false},
            {text: 'confirm()', correct: false}
        ]
    },

    {
        question: 'Какой метод используется для добавления элемента в конец массива?',
        answers: [
            {text: 'push()', correct: true},
            {text: 'pop()', correct: false},
            {text: 'shift()', correct: false},
            {text: 'unshift()', correct: false}
        ]
    },

    {
        question: 'Какое значение будет у переменной x после выполнения кода: let x = 5; x += 3;?',
        answers: [
            {text: '5', correct: false},
            {text: '3', correct: false},
            {text: 'error', correct: false},
            {text: '8', correct: true},
        ]
    },

    {
        question: 'Что делает метод array.join()?',
        answers: [
            {text: 'Возвращает первый элемент массива', correct: false},
            {text: 'Преобразует массив в строку, объединяя все элементы с заданным разделителем', correct: true},
            {text: 'Удаляет последний элемент массива', correct: false},
            {text: 'Добавляет элемент в начало массива', correct: false}
        ]
    },

    {
        question: 'Что такое DOM?',
        answers: [
            {text: 'Data Object Model - объектная модель данных', correct: false},
            {text: 'Document Order Management - управление порядком документа', correct: false},
            {text: 'Document Object Model - объектная модель документа', correct: true},
            {text: 'Data Operations Model - модель операций с данными', correct: false}
        ]
    }
]

 
const pol = document.getElementById('pol');
const navbarQuestion = document.getElementById('navbar-question');
const NextBtn = document.getElementById('next');

let questionElement = 0;
let score = 0;

function start(){
    questionElement = 0;
    score = 0;
    NextBtn.innerHTML = 'Следующий';
    showQuestion()    
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[questionElement];
    let currentNumber = questionElement + 1;
    pol.innerHTML = currentNumber + '.' + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerHTML = answer.text;
        btn.classList.add('btn');
        navbarQuestion.appendChild(btn);
        if(answer.correct){
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer)
    })
}

function selectAnswer(e) {
    let current = e.target;
    let isCorrect = current.dataset.correct === 'true';
    if(isCorrect){
        current.classList.add('correct');
        score++;
    } else {
        current.classList.add('incorrect');
    }
    Array.from(navbarQuestion.children).forEach(btn => {
        if(btn.dataset.correct === 'true'){
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });
    NextBtn.style.display = 'block';
}

function resetState(){
    NextBtn.style.display = 'none';
    while(navbarQuestion.firstChild){
        navbarQuestion.removeChild(navbarQuestion.firstChild);
    }
}

NextBtn.addEventListener('click', () => {
    if(questionElement < questions.length){
        handleNextQuestion()
    } else {
        start()
    }
})

function showscore(){
    resetState()
    pol.innerHTML = `${score} из ${questions.length}`;
    NextBtn.innerHTML = 'Занова';
    NextBtn.style.display = 'block';
}

function handleNextQuestion(){
    questionElement ++;
    if(questionElement < questions.length){
        showQuestion()
    } else {
        showscore()
    }
}


 

start();