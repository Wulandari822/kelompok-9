const questions = [
    {
        question: "The one ot the other of two",
        optionA: "Also",
        optionB: "Between",
        optionC: "Either",
        optionD: "Each",
        correctOption: "optionC"
    },

    {
        question: "in the period separating (two things or object / in the middle of two things beside)",
        optionA: "Also",
        optionB: "Between",
        optionC: "Either",
        optionD: "Each",
        correctOption: "optionB"
    },

    {
        question: "Advantage",
        optionA: "To be in favorable position",
        optionB: "A set time or place to meet",
        optionC: "Not guilty of a crime or fault",
        optionD: "Ready to serve or be used",
        correctOption: "optionA"
    },

    {
        question: "The condition of being combined; union",
        optionA: "Familiar",
        optionB: "Patience",
        optionC: "Combination",
        optionD: "Arrangements",
        correctOption: "optionC"
    },

    {
        question: "Maya …… the match in Olympic Games. She is so sad.",
        optionA: "Won",
        optionB: "Jumped",
        optionC: "Celebrated",
        optionD: "Lost",
        correctOption: "optionD"
    },

    {
        question: "A : Can you help me, please?",
        optionA: "B  : Yes, of course. What can I do for you?",
        optionB: "A  : Please, …… this bag to my room.",
        optionC: "B   : Yes, Sir.",
        optionD: "A. bring",
        correctOption: "optionA"
    },

    {
        question: "The teacher’s duty is to …… the students in the school.",
        optionA: "play",
        optionB: "make",
        optionC: "teach",
        optionD: "work",
        correctOption: "optionC"
    },

    {
        question: "There are a lot of old …… in the art gallery",
        optionA: "Ships",
        optionB: "Paintings",
        optionC: "Blouses Footwear",
        optionD: "Egypt",
        correctOption: "optionB"
    },

    {
        question: "Please get me some …… .The coffee is too bitter",
        optionA: "Vinegar",
        optionB: "Pepper",
        optionC: "Salt",
        optionD: "Sugar",
        correctOption: "optionD"
    },

    {
        question: "A synonym of Increase----",
        optionA: "Decrease",
        optionB: "Expansion",
        optionC: "Reduce",
        optionD: "Reduction",
        correctOption: "optionB"
    },

    {
        question: `What is the opposite of "Close"?`,
        optionA: "Immediate",
        optionB: "Direct",
        optionC: "Open",
        optionD: "Near",
        correctOption: "optionC"
    },

  
    {
        question: "A Building used to house Aircraft",
        optionA: "Hangar",
        optionB: "Context",
        optionC: "Garage",
        optionD: "Terminal",
        correctOption: "optionA"
    },


    {
        question: "The result of process",
        optionA: "Procedure",
        optionB: "Product",
        optionC: "Action",
        optionD: "Pressure",
        correctOption: "optionB"
    },

    {
        question: "Which word is the opposite of Deny?",
        optionA: "Refuse",
        optionB: "Reject",
        optionC: "Decline",
        optionD: "Confirm",
        correctOption: "optionD"
    },

    {
        question: "What is similar to Precious?",
        optionA: "Valuable",
        optionB: "Useless",
        optionC: "Unvalued",
        optionD: "Not important",
        correctOption: "optionA"
    },

    {
        question: "An official document that lets you do, use, or have something",
        optionA: "Driver",
        optionB: "Nuance",
        optionC: "License",
        optionD: "Hypothesis",
        correctOption: "optionC"
    },

    {
        question: "Of great value",
        optionA: "Precious",
        optionB: "Difficult",
        optionC: "Useless",
        optionD: "Unvalued",
        correctOption: "optionA"
    },

    {
        question: "The way someone feels",
        optionA: "Shy",
        optionB: "Shame",
        optionC: "Attitude",
        optionD: "Overthinking",
        correctOption: "optionC"
    },

    {
        question: "The place or conditions surrounding a process or activity",
        optionA: "House",
        optionB: "Bathroom",
        optionC: "PLayground",
        optionD: "Environtmen",
        correctOption: "optionD"
    },

    {
        question: "A small word used as subtitute for a noun (Such as he,she, or it)",
        optionA: "Pronoun",
        optionB: "Verb",
        optionC: "Tense",
        optionD: "Grammar",
        correctOption: "optionA"
    },

    {
        question: "Synonym for myth?",
        optionA: "Poetry",
        optionB: "Freedom",
        optionC: "Truth",
        optionD: "Story",
        correctOption: "optionD"
    },

    {
        question: "Synonym for Typically?",
        optionA: "Usually",
        optionB: "Already",
        optionC: "Sharply",
        optionD: "Angrily",
        correctOption: "optionA"
    },

    {
        question: "What is Diet meaning?",
        optionA: "Schedule of exercise",
        optionB: "Nutritional plan",
        optionC: "Study of longevity",
        optionD: "Medicinal chart",
        correctOption: "optionB"
    },

    {
        question: "Best synonym for Partially",
        optionA: "Freely",
        optionB: "Usually",
        optionC: "Feely",
        optionD: "Not Completely",
        correctOption: "optionD"
    },

    {
        question: "It is not possible for people to recall everything that they have thought, felt, or done. Recall mean?",
        optionA: "Repeat",
        optionB: "Appreciate",
        optionC: "Remember",
        optionD: "discuss",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "Chartreuse"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "Chartreuse"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}