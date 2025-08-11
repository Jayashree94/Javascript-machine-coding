const questions = [
    {
        question : "which is the frontend programming language?",
        answers : [
            {text: "PhP", correct:false},
            {text: "REACT", correct:true},
            {text: "NodeJS", correct:false},
            {text: "C++", correct:false}

        ]
    },
    {
        question : "which is the backend programming language?",
        answers : [
            {text: "PhP", correct:false},
            {text: "REACT", correct:false},
            {text: "NodeJS", correct:true},
            {text: "Angular", correct:false}

        ]
    },
     {
        question : "Wat are datatypes in JS?",
        answers : [
            {text: "let var const", correct:false},
            {text: "int main small", correct:false},
            {text: "integer ", correct:true},
            {text: "String image", correct:false}

        ]
    },
     {
        question : "what are promises?",
        answers : [
            {text: "PhP", correct:false},
            {text: "REACT", correct:false},
            {text: "NodeJS", correct:true},
            {text: "Angular", correct:false}

        ]
    },
     {
        question : "What is a closure?",
        answers : [
            {text: "PhP", correct:false},
            {text: "REACT", correct:false},
            {text: "NodeJS", correct:true},
            {text: "Angular", correct:false}

        ]
    },
     {
        question : "when usestate is called?",
        answers : [
            {text: "PhP", correct:false},
            {text: "REACT", correct:false},
            {text: "NodeJS", correct:true},
            {text: "Angular", correct:false}

        ]
    }
]

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;

function startQuiz(){
    console.log("hello")
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)


    })
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);

    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct")
    }else{
        selectedBtn.classList.add("incorrect")
    }




}

startQuiz();


