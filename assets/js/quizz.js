/**
 * shuffleQuestions randomly shuffles the questions shuffledQuestions
 */
let shuffledQuestions;

function shuffleQuestions(){
    shuffledQuestions = rpsQuestions.sort(() => Math.random() - 0.5);
  }
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

// harvest all possible choices from the quizz
let choicesContainers = quizzArea.querySelectorAll(".answers");

//count corect answers
let ansCorrect = 0;

//loop trhough each question and check right answrer

rpsQuestions.forEach( (index, questionNumber) => {
// find selected answer
const choicesContainer = choicesContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
// preparing for incomplete user input
const userAnswer = (choicesContainer.querySelector(selector) || {}).value;

//evaluate the answers
//is the answer is correct
if(userAnswer === index.correctAnswer){
    // increment correct answers
    ansCorrect++;
    //display green font
    choicesContainers[questionNumber].style.color ="green"
}
else {choicesContainers[questionNumber].style.color ="red"} 
    
}
)
// Display totalnumber of  correct answers
resultArea.innerHTML = `${ansCorrect} out of ${rpsQuestions.length}`;
};


// select quizz element from HTML document and save them in variables
let quizzArea = document.getElementById("quizz");
let resultArea = document.getElementById("results");
let submitButton = document.getElementById("submit");

//create the list of questions

const rpsQuestions = [
    {
        question: "Where does Rock Paper Scissors originate from?",
        choices:{
            a: "China",
            b: "Belgium",
            c: "Ireland",
            d: "Vatican"
        },
        correctAnswer: "a"
    },
    {
        question: "By what other name is is known?",
        choices:{
           a:"Mirabelle",
            b: "Patton",
            c:"Bush",
            d:"Ro-Sham-Bo"},
    
        correctAnswer: "d"   
    },
    {
        question: "How many Players does it require?",
        choices:{
            a:"1",
            b:"2",
            c:"3",
            d:"more than 5"
        },
        correctAnswer: "b" 
    },
    {
        question: "when was the game invented?",
        choices:{
            a:"1913",
            b:"1789",
            c:"2001",
            d:"260 BCE"
        },
        correctAnswer: "d" 
    }
];
shuffleQuestions();
runQuizz();

// dispaly results when click submit
submitButton.addEventListener("click", checkResults);
