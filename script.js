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

let questions = [
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
        question: '¿En qué mes se casaron Isabela y Gregory?',
        answers: [
            { text: 'Octubre', correct: true },
            { text: 'Diciembre', correct: false },
            { text: 'Noviembre', correct: false },
            { text: 'Enero', correct: false }
        ]
    },
    {
        question: '¿Quien se mudó a los Estado Unidos primero?',
        answers: [
            { text: 'tio Jorge', correct: true },
            { text: 'tia Diana', correct: false },
            { text: 'la Nona', correct: false }
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
            { text: 'Savannah, GA', correct: true },
            { text: 'St. Augustine, FL', correct: false },
            { text: 'Charleston, SC', correct: false },
            { text: 'En casa', correct: false }
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
            { text: 'Matemática', correct: false },
            { text: 'Ingeniería electrónica', correct: true },
            { text: 'Ingeniería química', correct: false },
            { text: 'Ingeniería civil', correct: false }
        ]
    },
    {
        question: '¿En qué año se fueron los Zambranos de paseo a Hawaii?',
        answers: [
            { text: '1999', correct: false },
            { text: '1998', correct: false },
            { text: '2000', correct: false },
            { text: '1996', correct: true }
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
            { text: 'Aguacate', correct: false },
            { text: 'Limón', correct: true }
        ]
    },
    {
        question: '¿Cuántos años tiene Gabriela?',
        answers: [
            { text: '24', correct: false },
            { text: '25', correct: false },
            { text: '23', correct: true },
            { text: '19', correct: false }
        ]
    },
    {
        question: '¿Cuántas Veces se ha roto la cabeza Emmanuel?',
        answers: [
            { text: '3', correct: true },
            { text: '2', correct: false },
            { text: '1', correct: false },
            { text: '0', correct: false }
        ]
    },
    {
        question: '¿Quién NO tenia que quitarse las cordales?',
        answers: [
            { text: 'Daniel', correct: false },
            { text: 'Katrinka', correct: true },
            { text: 'Alejandra', correct: false },
            { text: 'Isabela', correct: false }
        ]
    },
    {
        question: '¿Quién grita más durante la copa mundiál?',
        answers: [
            { text: 'tia Paula', correct: true },
            { text: 'la Nona', correct: false },
            { text: 'tio Jorge', correct: false },
            { text: 'Gabriela', correct: false }
        ]
    },
    {
        question: '¿Quién tiene peor memoria que un burro?',
        answers: [
            { text: 'Isabela', correct: false },
            { text: 'Daniel', correct: true },
            { text: 'Gabriel', correct: false },
            { text: 'Alejandra', correct: false }
        ]
    },
    {
        question: '¿Quién habla más en la familia?',
        answers: [
            { text: 'tia Paula', correct: false },
            { text: 'Gabriela', correct: false },
            { text: 'tio Jorge', correct: true },
            { text: 'Emmanuel', correct: false }
        ]
    },
    {
        question: '¿Quién se casó primero?',
        answers: [
            { text: 'tio Julio', correct: false },
            { text: 'tio Jorge', correct: false },
            { text: 'tia Diana', correct: true }
        ]
    }
]