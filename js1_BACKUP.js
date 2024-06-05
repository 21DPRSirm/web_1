// js1.js

// Initialize scores
let programmingScore = 0;
let itScore = 0;

// Retrieve answers and update scores
function processAnswers() {
    const q1Answer = document.querySelector('input[name="q0"]:checked');
    if (q1Answer) {
        const answerValue = q1Answer.value;
        if (answerValue === 'a') {
            programmingScore += 1;
        } else if (answerValue === 'b') {
            itScore += 1;
        }
    }
}

// ################################################################################################################

// ################################################################################################################

// js1.js

// ... (previous code)

// Prevent form submission and display recommendation
function displayRecommendation(event) {
    event.preventDefault(); // Prevent default form submission

    const recommendationDiv = document.getElementById('recommendation-text');
    if (programmingScore > 2) {
        recommendationDiv.textContent = "You are best suited for programming!";
    } else if (itScore > 2) {
        recommendationDiv.textContent = "The best fit for you is IT management.";
    } else {
        recommendationDiv.textContent = "Need further exploration.";
    }

    // Show the "Refresh" button
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.style.display = 'block';
}

// Call displayRecommendation() when the Submit button is clicked
document.getElementById('submit-button').addEventListener('click', displayRecommendation);

// Handle refresh button click
document.getElementById('refresh-button').addEventListener('click', function () {
    location.reload(); // Reload the page
});