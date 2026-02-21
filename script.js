// Store code temporarily
function storeCode() {
    const code = document.getElementById("codeInput").value;
    localStorage.setItem("userCode", code);
}

// Random Roast Generator
function generateRoast() {
    const roasts = [
        "Did you write this during a power cut?",
        "Your indentation is fighting for freedom.",
        "Even Stack Overflow needs a break after seeing this.",
        "This code works... but at what emotional cost?",
        "Copy-paste engineering at its finest."
    ];

    const tips = [
        "Proper indentation improves readability.",
        "Break long functions into smaller reusable modules.",
        "Use meaningful variable names.",
        "Comment important logic sections.",
        "Test edge cases before final submission."
    ];

    const randomIndex = Math.floor(Math.random() * roasts.length);

    document.getElementById("roastText").innerText = roasts[randomIndex];
    document.getElementById("roastTip").innerText = tips[randomIndex];
}

// Random Improve Suggestions
function generateImprove() {
    const improvements = [
        "Refactor repeated logic into functions.",
        "Use consistent naming conventions.",
        "Improve error handling.",
        "Optimize nested loops.",
        "Add proper documentation comments."
    ];

    const randomIndex = Math.floor(Math.random() * improvements.length);

    document.getElementById("improveText").innerText =
        improvements[randomIndex];
}

// Feedback submission
let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;

    const stars = document.querySelectorAll("#starRating span");

    stars.forEach((star, index) => {
        if (index < rating) {
            star.textContent = "⭐";
        } else {
            star.textContent = "☆";
        }
    });
}

async function submitFeedback() {

    if (selectedRating === 0) {
        document.getElementById("ratingError").style.display = "block";
        return;
    }

    const feedbackText = document.getElementById("feedbackText").value;

    const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            rating: selectedRating,
            feedback: feedbackText
        })
    });

    alert("Thank you for your feedback! ⭐");
}