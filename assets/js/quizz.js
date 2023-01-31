function runQuizz() {
    // store the HTML output
    let htmlOutput =[]
    
    //loop through each index (question) and the question number in the array
    rpsQuestions.forEach ((index,questionNumber)=> {
    //storing all the answers
    let answers =[];
    
    // for each answer in the array build a button
    for(letter in index.answers){
    
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${index.answers[letter]}
          </label>`
        );
      }    
    
    
    // add this question and its answers to the output
    htmlOutput.push (
    `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join('')} </div>`
    );
    
    });
    quizzArea.innerHTML = htmlOutput.join('');
    }
    
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

function checkResults() {

}

runQuizz();

// dispaly results when click submit
submitButton.addEventListener("click", checkResults)
