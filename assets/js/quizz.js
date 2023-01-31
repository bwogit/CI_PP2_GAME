// select quizz element from HTML document and save them in variables
let quizzArea = document.getElementById("quizz");
let resultArea = document.getElementById("results");
let submitButton = document.getElementById("submit");

//create the list of questions

const rpsQuestions = [
    {
        question: "Where does Rock Paper Scissors originate from?",
        choices:[
            "China",
            "Belgium",
            "Ireland",
            "Vatican"
        ],
        correctAnswer: "China"
    },
    {
        question: "By what other name is is known?",
        choices:[
            "Mirabelle",
            "Patton",
            "Bush",
            "Ro-Sham-Bo"
    ],
        correctAnswer: "Ro-Sham-Bo"
    },
    {
        question: "How many Players does it require?",
        choices:[
            "1",
            "2",
            "3",
            "more than 5"
    ],
        correctAnswer: "2" 
    },
    {
        question: "what was the game invented?",
        choices:[
            "1913",
            "1789",
            "2001",
            "260 BCE"
    ],
        correctAnswer: "260 BCE" 
    }
]

function runQuizz() {

}

function checkResults() {

}

runQuizz();

// dispaly results when click submit
submitButton.addEventListener("click", checkResults)
