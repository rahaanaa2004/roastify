<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

Roastify 🎯
Basic Details

Team Name: XYZ
Team Members:

Member 1: Rahana Santhosh – [Viswajyothi college of engineering and technology,Vazhakulam]

Member 2: Neethu Cheriyan – [Viswajyothi college of engineering and technology,Vazhakulam]

Hosted Project Link: https://your-username.github.io/roastify-frontend

Project Description

Roastify is a web-based application that lets users submit their code and receive instant AI-generated roasts or improvement suggestions. The platform makes coding feedback fun, interactive, and educational.

The Problem Statement

Beginner programmers often struggle to identify errors or inefficiencies in their code. Traditional code reviews are slow, boring, or unclear. There’s a need for instant, engaging feedback that motivates users to improve.

The Solution

Roastify solves this problem by providing:

AI-powered roasting to highlight code issues in a humorous and engaging way.

Improvement suggestions to guide users toward better coding practices.

Interactive star rating and feedback system to collect user experience data.

Technical Details

Technologies/Components Used

Software:

Languages: HTML, CSS, JavaScript, Python

Frameworks: Flask

Libraries: Flask-CORS, Fetch API, AI API for code roasting (e.g., OpenAI API)

Tools: VS Code, Git, GitHub, ngrok (local testing), Render (deployment)

Hardware: N/A (fully web-based)

Features

Feature 1: AI-powered code roasting — humorous feedback

Feature 2: AI-powered code improvement suggestions

Feature 3: Star rating feedback system with mandatory comment box

Feature 4: Smooth transitions across Home → Login → Code → Roast/Improve → Feedback pages

Implementation
For Software

Installation

# Clone frontend repo
git clone https://github.com/your-username/roastify-frontend.git
cd roastify-frontend
# Open index.html in browser or use Live Server in VS Code

# Clone backend repo
git clone https://github.com/your-username/roastify-backend.git
cd roastify-backend
pip install -r requirements.txt
python app.py

Run

Frontend: open index.html in browser or via Live Server

Backend: python app.py (Flask server runs on localhost or deployed URL)

Project Documentation
For Software

Screenshots
![Screenshot1](https://github.com/rahaanaa2004/roastify/blob/main/Screenshot%202026-02-22%20070006.png)
*Screenshot showing the home webpage*

![Screenshot2](https://github.com/rahaanaa2004/roastify/blob/main/Screenshot%202026-02-22%20070041.png)
*Screenshot showing the user interface accepting the code with roast and improve buttons*

![Screenshot3](https://github.com/rahaanaa2004/roastify/blob/main/Screenshot%202026-02-22%20070102.png)
*screenshot showing the result of the roast action with feedback option*

Diagrams

System Architecture:
Frontend (HTML/CSS/JS) → Backend (Python/Flask) → AI API → Feedback returned to Frontend

Application Workflow:

User visits Home page → clicks Login

Enters code → chooses Roast or Improve

Backend processes code via AI API → sends roast or improvement suggestions back

User submits star rating + comment → stored in backend database

Additional Documentation

API Documentation

Base URL: https://roastify-backend.onrender.com

Endpoints

POST /roast

Description: Generates AI roast for submitted code

Request Body: { "code": "<user code>" }

Response: { "status": "success", "roast": "<AI roast>" }

POST /improve

Description: Provides suggestions to improve code

Request Body: { "code": "<user code>" }

Response: { "status": "success", "improvements": "<suggestions>" }

POST /feedback

Description: Submits user rating and comments

Request Body: { "rating": 5, "feedback": "Loved the roasts!" }

Response: { "status": "success", "message": "Feedback submitted" }

### Video
[https://drive.google.com/file/d/1nWSJQwKlyeDer8hemWKmrGOBtH3fDbjX/view?usp=sharing]

*Explain what the video demonstrates - key features, user flow, technical highlights*

AI Tools Used (Optional)

Tool Used: OpenAI API

Purpose: Generate humorous roasts and improvement suggestions

Example Usage:

“Generate a funny roast for this Python function”

“Suggest code improvements for clarity and efficiency”

Percentage of AI-generated code: Approximately 20% (roasts and improvement text generation)

Team Contributions

Rahana Santhosh: Frontend development, UI/UX design, page transitions, star rating & feedback integration

Neethu Cheriyan: Backend development, Flask API endpoints, AI integration, deployment, feedback storage

License

MIT License – see LICENSE file

Made with ❤️ at TinkerHub
