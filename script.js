const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreContainer = document.getElementById('score-container')
let answerPicked = false
let shuffledQuestions 
let currentQuestionIndex = 0
let numCorrect = 0
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame()
{
    scoreContainer.classList.add('hide')
    console.log("started")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5) //shuffle questions
    for (let i = 0; i < shuffledQuestions.length; i++) //shuffle answers
    {
        shuffledQuestions[i].answers = shuffledQuestions[i].answers.sort(() => Math.random() - 0.5)
    }
    questionContainerElement.classList.remove('hide')
    currentQuestionIndex = 0
    answerPicked = false
    numCorrect = 0
    setNextQuestion()
}

function setNextQuestion()
{
    resetState()
    answerPicked = false
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question)
{
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button' )
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState()
{
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild)
    {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e)
{
    if (answerPicked == false)
    {
        answerPicked = true;
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
        if (correct)
        {
            numCorrect++
            console.log('score incremented')
        }
        if (shuffledQuestions.length > currentQuestionIndex + 1)
        {
            nextButton.classList.remove('hide')
        }
        else
        {
            startButton.innerText = 'Restart'
            startButton.classList.remove('hide')

            //print out score
            scoreContainer.classList.remove('hide')
            scoreContainer.innerText = 'Resultado: ' + numCorrect + '/20'
        }
    }
}

function setStatusClass(element, correct)
{
    clearStatusClass(element)
    if (correct)
    {
        element.classList.add('correct')
    }
    else
    {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element)
{
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: '¿En qué año nació el Nono?',
        answers: [
            { text: '1937', correct: true },
            { text: '1939', correct: false },
            { text: '1942', correct: false },
            { text: '1935', correct: false }
        ]
    },
    {
        question: '¿En qué mes se casaron Isabella y Gregory?',
        answers: [
            { text: 'Octubre', correct: true },
            { text: 'Diciembre', correct: false },
            { text: 'Noviembre', correct: false },
            { text: '', correct: false }
        ]
    },
    {
        question: '¿Quien se mudó a los Estado Unidos primero?',
        answers: [
            { text: 'tio Jorge', correct: true },
            { text: 'tia Diana', correct: false },
            { text: 'Nona', correct: false }
        ]
    },
    {
        question: '¿Qué esta estudiando Daniel en la universidad?',
        answers: [
            { text: 'Ingeniería electrónica', correct: false },
            { text: 'Ingeniería mecánica', correct: false },
            { text: 'Programación de computadores', correct: true },
            { text: 'Ingeniería de computadores', correct: false }
        ]
    },
    {
        question: '¿A cual universidad estudió Gregory?',
        answers: [
            { text: 'UF', correct: false },
            { text: 'FIU', correct: true },
            { text: 'UCF', correct: false },
            { text: 'FAU', correct: false }
        ]
    },
    {
        question: '¿Cual es nuestra música preferida?',
        answers: [
            { text: 'Pop', correct: false },
            { text: 'Rock', correct: false },
            { text: 'Salsa', correct: false },
            { text: 'Vallenato', correct: true }
        ]
    },
    {
        question: '¿A dónde fuimos a vacaciones de fin de año en 2019?',
        answers: [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: true },
            { text: '', correct: false }
        ]
    },
    {
        question: '¿En qué ciudad nació la Nona?',
        answers: [
            { text: 'Mogotes, Santander', correct: false },
            { text: 'Guaca, Santander', correct: true },
            { text: 'Bucaramanga, Santander', correct: false },
            { text: 'Bogotá, Cundinamarca', correct: false }
        ]
    },
    {
        question: '¿Cuántos carros a tenido el tio Julio?',
        answers: [
            { text: '16', correct: true },
            { text: '6', correct: false },
            { text: '28', correct: false },
            { text: '20', correct: false }
        ]
    },
    {
        question: '¿Qué carrera estudió tio Jorge?',
        answers: [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: true },
            { text: '', correct: false }
        ]
    },
    {
        question: '¿En qué año se fueron los Zambranos de paseo a Hawaii?',
        answers: [
            { text: '1996', correct: true },
            { text: '1998', correct: false },
            { text: '2000', correct: false },
            { text: '1995', correct: false }
        ]
    },
    {
        question: '¿Cómo se llamaba la compañia del Nono?',
        answers: [
            { text: 'Vaspel', correct: true },
            { text: 'Papelitos', correct: false },
            { text: 'Vasos de Postresitos', correct: false },
            { text: 'Súper Zambrano', correct: false }
        ]
    },
    {
        question: '¿Cuál arbol NO hay en la casa de Julio?',
        answers: [
            { text: 'Coco', correct: false },
            { text: 'Níspero', correct: false },
            { text: 'Limón', correct: true },
            { text: 'Aguacate', correct: false }
        ]
    },
    {
        question: '¿Cuántos años tiene Gabriela?',
        answers: [
            { text: '23', correct: true },
            { text: '25', correct: false },
            { text: '20', correct: false },
            { text: '19', correct: false }
        ]
    },
    {
        question: '¿?',
        answers: [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: true },
            { text: '', correct: false }
        ]
    },
    {
        question: '¿?',
        answers: [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: true },
            { text: '', correct: false }
        ]
    },
    {
        question: '¿?',
        answers: [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: true },
            { text: '', correct: false }
        ]
    },
    {
        question: '¿?',
        answers: [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: true },
            { text: '', correct: false }
        ]
    },
    {
        question: '¿?',
        answers: [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: true },
            { text: '', correct: false }
        ]
    },
    {
        question: '¿?',
        answers: [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: true },
            { text: '', correct: false }
        ]
    }
]