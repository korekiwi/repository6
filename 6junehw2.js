const questions = [
    {
        question: 'How much is 2 + 2?',
        true: '4',
        false: '22'
    },
    {
        question: 'How much is 3 + 3?',
        true: '6',
        false: '33'
    },   {
        question: 'How much is 4 + 4?',
        true: '8',
        false: '44'
    },   {
        question: 'How much is 5 + 5?',
        true: '10',
        false: '55'
    },   {
        question: 'How much is 6 + 6?',
        true: '12',
        false: '66'
    }
]


let answers = 0;

const box = document.querySelector('.box');
const question = document.querySelector('#question');
const next = document.querySelector('#next');
const result = document.querySelector(".result");

let countQuestions = 0;

function randomBoolean() {
    let number = Math.random();
    if (Math.round(number) == 1) {
        return true
    }
    else {
        return false
    }
}

randomBoolean();

function test() {
    let bool = randomBoolean();
    question.innerHTML = `<p>${countQuestions + 1}) ${questions[countQuestions]['question']}</p>
            <p><input id='${String(bool)}' name="1" type="radio">${questions[countQuestions][String(bool)]}</p>
            <p><input id='${String(!bool)}' name="1" type="radio">${questions[countQuestions][String(!bool)]}</p>`;
}

test()

next.addEventListener("click", () => {
    let trueAnswer = document.querySelector('#true');
    let falseAnswer = document.querySelector('#false');
    if (trueAnswer.checked) {
        answers++
    }
    if (trueAnswer.checked || falseAnswer.checked) {
        if (countQuestions < questions.length - 1) {
            countQuestions++
            test()
        }
        else {
            box.style.display = 'none';
            result.innerText = `Result: ${answers} correct answers to ${questions.length} questions.`
            result.style.display = 'block';
        }
    }
})