function runQuizz() {
    // store the HTML output in variable htmlOutput
    let htmlOutput =[];
    
    //loop through each index (question) and the question number in the array
    rpsQuestions.forEach (
        (index,questionNumber)=> {
    //storing all the answers into an array called choices
    let choices =[];
    
    // for each answer in the array build a button
    for(letter in index.choices){
    
        // ...add an HTML radio button
        choices.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${index.choices[letter]}
          </label>`
        );
      }    
    // add this question and its answers to the output
    htmlOutput.push (
    `<div class="question"> ${index.question} </div>
    <div class="answers"> ${choices.join('')} </div>`
    );
    }
);
quizzArea.innerHTML = htmlOutput.join('');
}

function checkResults() {
// harvest all choices from the quizz
let answersContainers = quizzArea.querySelectorAll("choices");

//count corect answers
let numCorrect =0;
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
];
runQuizz();

// dispaly results when click submit
submitButton.addEventListener("click", checkResults);
