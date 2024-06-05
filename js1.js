// Initialize scores
let programmingScore = 0;
let itScore = 0;

// Retrieve answers and update scores
// Question 0: Do you enjoy solving complex problems and working with technology?
function processAnswers() {
    const q0Answer = document.querySelector('input[name="q0"]:checked');
    if (q0Answer) {
        const answerValue = q0Answer.value;
        if (answerValue === 'a') {
            programmingScore += 1; // Count towards programming
            itScore -= 1;
        } else if (answerValue === 'b') {
            programmingScore -= 1;
            itScore += 1; // Count towards IT tech
        }
    }

    // Additional questions (Q1)
    // Question 1: Are you curious about how software and systems work?
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer) {
        const answerValue = q1Answer.value;
        if (answerValue === 'a') {
            programmingScore += 1; // Count towards Programming
            itScore -= 1;
        } else if (answerValue === 'b') {
            itScore += 1; // Counting towards IT n Tech
            programmingScore -= 1;
        }
    }

    // Question 2: Have you tried coding or programming before?
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer) {
        const answerValue = q2Answer.value;
        if (answerValue === 'a') {
            programmingScore += 1;
            itScore -= 1;
        } else if (answerValue === 'b') {
            itScore += 1;
            programmingScore -= 1;
        }
        // Similar scoring logic for Q2
    }

    // Question 3: Are you comfortable with logic and algorithms?
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer) {
        const answerValue = q3Answer.value;
        if (answerValue === 'a') {
            programmingScore += 1;
            itScore -= 1;
        } else if (answerValue === 'b') {
            itScore += 1;
            programmingScore -= 1;
        }
    }
    // Question 4: Do you prefer "Option A" - creating new solutions (programming) Or "Option B" - managing existing systems (IT management)?
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer) {
        const answerValue = q4Answer.value;
        if (answerValue === 'a') {
            programmingScore += 1;
            itScore -= 1;
        } else if (answerValue === 'b') {
            itScore += 1;
            programmingScore -= 1;
        }
    }
    // Question 5: Do you prefer managing systems and processes over writing code?
    const q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer) {
        const answerValue = q5Answer.value;
        if (answerValue === 'a') {
            programmingScore += 1;
            itScore -= 1;
        } else if (answerValue === 'b') {
            itScore += 1;
            programmingScore -= 1;
        }
    }
    // Question 6: Have you handled IT support requests or system upgrades?
    const q6Answer = document.querySelector('input[name="q6"]:checked');
    if (q6Answer) {
        const answerValue = q6Answer.value;
        if (answerValue === 'a') {
            programmingScore += 1;
            itScore -= 1;
        } else if (answerValue === 'b') {
            itScore += 1;
            programmingScore -= 1;
        }
    }
    // Question 7: Do you know any/some/all programming languages?
    const q7Answer = document.querySelector('input[name="q7"]:checked');
    if (q7Answer) {
        const answerValue = q7Answer.value;
        if (answerValue === 'a') {
            programmingScore += 1;
            itScore -= 1;
        } else if (answerValue === 'b') {
            itScore += 1;
            programmingScore -= 1;
        }
    }
    // Question 8: And finaly, after these all questions, if you have answered to them, what you you think, are you programmer or IT tech person?
    const q8Answer = document.querySelector('input[name="q8"]:checked');
    if (q8Answer) {
        const answerValue = q8Answer.value;
        if (answerValue === 'a') {
            programmingScore += 1;
            itScore -= 1;
        } else if (answerValue === 'b') {
            itScore += 1;
            programmingScore -= 1;
        }
    }

    // Repeat for more questions if needed
}
// ################################################################################################################

// ################################################################################################################

// js1.js

// ... (previous code)

// Prevent form submission and display recommendation
function displayRecommendation(event) {
    event.preventDefault(); // Prevent default form submission

    const recommendationDiv = document.getElementById('recommendation-text');
    if (programmingScore > itScore) {
        recommendationDiv.textContent = "You are best suited for programming!";
    } else if (itScore > programmingScore) {
        recommendationDiv.textContent = "The best fit for you is IT management.";
    } else {
        recommendationDiv.textContent = "Need further exploration.";
    }

    // Show the "Refresh" button
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.style.display = 'block';
}
// Update the displayed scores
// document.getElementById('programming-score').textContent = programmingScore;
// document.getElementById('it-score').textContent = itScore;

// Call displayRecommendation() when the Submit button is clicked
document.getElementById('submit-button').addEventListener('click', function(event){
    processAnswers()
    displayRecommendation(event)
});

// Handle refresh button click
document.getElementById('refresh-button').addEventListener('click', function () {
    location.reload(); // Reload the page
});
