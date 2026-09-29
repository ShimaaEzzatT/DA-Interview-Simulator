/* =====================================================
   SECTION 01 — CORE DATA ANALYTICS
===================================================== */


const questions = [

    {
        category: "Data Analytics Fundamentals",

        question:
            "What is the primary goal of Data Analysis?",

        options: [

            "Store as much data as possible",

            "Create complex dashboards",

            "Extract meaningful insights to support decisions",

            "Replace business decisions with automated systems"

        ],

        correct: 2
    },


    {
        category: "Data Analytics Fundamentals",

        question:
            "Which step should generally come first when starting a data analysis project?",

        options: [

            "Create charts",

            "Understand the business problem",

            "Write Python code",

            "Build a Power BI dashboard"

        ],

        correct: 1
    },


    {
        category: "Data Analytics Fundamentals",

        question:
            "A stakeholder asks: Why did sales decrease last month? What type of analytical question is this?",

        options: [

            "Descriptive",

            "Diagnostic",

            "Predictive",

            "Prescriptive"

        ],

        correct: 1
    },


    {
        category: "Data Analytics Fundamentals",

        question:
            "Which type of analytics focuses on answering What happened?",

        options: [

            "Descriptive Analytics",

            "Diagnostic Analytics",

            "Predictive Analytics",

            "Prescriptive Analytics"

        ],

        correct: 0
    },


    {
        category: "Data Analytics Fundamentals",

        question:
            "Which type of analytics focuses on predicting future outcomes?",

        options: [

            "Descriptive",

            "Diagnostic",

            "Predictive",

            "Exploratory"

        ],

        correct: 2
    },


    {
        category: "Data Analytics Fundamentals",

        question:
            "Which of the following is an example of Prescriptive Analytics?",

        options: [

            "Sales decreased by 8% last month",

            "Sales decreased because of lower customer demand",

            "Sales are expected to decrease next month",

            "Increase promotion spending in the lowest-performing region"

        ],

        correct: 3
    },


    {
        category: "Data Quality",

        question:
            "A dataset contains the same customer record multiple times. What is the issue?",

        options: [

            "Missing values",

            "Duplicate records",

            "Outliers",

            "Data type mismatch"

        ],

        correct: 1
    },


    {
        category: "Data Quality",

        question:
            "A Revenue column contains NULL values. What issue should the analyst investigate?",

        options: [

            "Duplicate data",

            "Missing values",

            "Incorrect relationship",

            "Data granularity"

        ],

        correct: 1
    },


    {
        category: "Data Quality",

        question:
            "A date column contains both 2025-01-15 and 15/01/2025 formats. What is the main concern?",

        options: [

            "Duplicate records",

            "Inconsistent formatting",

            "Outlier detection",

            "Aggregation error"

        ],

        correct: 1
    },


    {
        category: "Data Quality",

        question:
            "Why is data validation important before performing analysis?",

        options: [

            "To make dashboards more colorful",

            "To increase the number of rows",

            "To ensure the analysis is based on reliable data",

            "To eliminate the need for business knowledge"

        ],

        correct: 2
    },


    {
        category: "KPIs & Metrics",

        question:
            "A company generated $500,000 in Revenue and had $320,000 in Cost of Goods Sold. What is Gross Profit?",

        options: [

            "$180,000",

            "$320,000",

            "$500,000",

            "$820,000"

        ],

        correct: 0
    },


    {
        category: "KPIs & Metrics",

        question:
            "If Revenue = $500,000 and Gross Profit = $180,000, what is Gross Margin %?",

        options: [

            "18%",

            "32%",

            "36%",

            "64%"

        ],

        correct: 2
    },


    {
        category: "KPIs & Metrics",

        question:
            "A company's revenue increased from $100,000 to $120,000. What is the Growth Rate?",

        options: [

            "10%",

            "15%",

            "20%",

            "25%"

        ],

        correct: 2
    },


    {
        category: "KPIs & Metrics",

        question:
            "Which KPI would be most appropriate for measuring the percentage of orders that were returned?",

        options: [

            "Conversion Rate",

            "Return Rate",

            "Gross Margin",

            "Average Order Value"

        ],

        correct: 1
    },


    {
        category: "KPIs & Metrics",

        question:
            "A retail company wants to understand how much customers spend per order on average. Which KPI should it monitor?",

        options: [

            "Average Order Value",

            "Return Rate",

            "Gross Margin",

            "Customer Churn"

        ],

        correct: 0
    },


    {
        category: "Analytical Thinking",

        question:
            "Revenue increased by 20%, but profit decreased by 10%. What should the analyst investigate first?",

        options: [

            "Only the number of customers",

            "Costs, discounts, and margins",

            "Dashboard colors",

            "Number of columns in the dataset"

        ],

        correct: 1
    },


    {
        category: "Analytical Thinking",

        question:
            "A product has high revenue but very low profit margin. What should the analyst investigate?",

        options: [

            "Only the number of transactions",

            "Product cost, pricing, and discounts",

            "Customer names",

            "Number of rows"

        ],

        correct: 1
    },


    {
        category: "Analytical Thinking",

        question:
            "Region A generated $1M revenue from 10,000 orders, while Region B generated $800K from 2,000 orders. Which metric would help compare order-level performance?",

        options: [

            "Total Revenue",

            "Number of Regions",

            "Average Order Value",

            "Total Rows"

        ],

        correct: 2
    },


    {
        category: "Analytical Thinking",

        question:
            "An analyst notices that one customer's purchase amount is 100 times higher than the average. What should the analyst do first?",

        options: [

            "Automatically delete the record",

            "Automatically replace it with the average",

            "Investigate whether it is a valid value or an outlier",

            "Ignore it"

        ],

        correct: 2
    },


    {
        category: "Analytical Thinking",

        question:
            "A dashboard shows that sales decreased by 15%. Before presenting this insight, what should the analyst verify?",

        options: [

            "Whether the dashboard uses attractive colors",

            "Whether the data period and calculation are correct",

            "Whether the company logo is visible",

            "Whether there are enough charts"

        ],

        correct: 1
    },


    {
        category: "Business Scenarios",

        question:
            "A company has 1 million sales transactions. The manager asks: Which product category generated the highest revenue? What is the most appropriate first step?",

        options: [

            "Analyze revenue by product category",

            "Calculate customer age",

            "Remove all transactions",

            "Analyze employee salaries"

        ],

        correct: 0
    },


    {
        category: "Business Scenarios",

        question:
            "A company notices that sales are increasing but the number of customers is decreasing. What should the analyst investigate?",

        options: [

            "Only total revenue",

            "Revenue per customer and customer behavior",

            "Number of columns",

            "Dashboard layout"

        ],

        correct: 1
    },


    {
        category: "Business Scenarios",

        question:
            "A business has high sales during December every year. What should the analyst investigate?",

        options: [

            "Seasonality",

            "Duplicate records only",

            "Data types only",

            "Primary keys only"

        ],

        correct: 0
    },


    {
        category: "Business Scenarios",

        question:
            "An analyst discovers that 30% of customer records have missing Customer IDs. What is the most important concern?",

        options: [

            "Dashboard design",

            "Customer-level analysis may be inaccurate",

            "The dataset has too many rows",

            "Revenue will automatically increase"

        ],

        correct: 1
    },


    {
        category: "Business Scenarios",

        question:
            "A manager asks: What should we do to improve sales? Which answer demonstrates the strongest analytical approach?",

        options: [

            "Sales are low.",

            "We should create a dashboard.",

            "Sales are lower in Region A, mainly due to Category X; targeted promotions could be investigated.",

            "The data contains 100,000 rows."

        ],

        correct: 2
    }

];



/* =====================================================
   ELEMENTS
===================================================== */

const questionsContainer =
    document.getElementById("questionsContainer");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const finishBtn =
    document.getElementById("finishBtn");

const finishMessage =
    document.getElementById("finishMessage");

const resultSection =
    document.getElementById("resultSection");

const correctCount =
    document.getElementById("correctCount");

const wrongCount =
    document.getElementById("wrongCount");

const unansweredCount =
    document.getElementById("unansweredCount");

const scorePercentage =
    document.getElementById("scorePercentage");

const resultMessage =
    document.getElementById("resultMessage");

const reviewContainer =
    document.getElementById("reviewContainer");

const retryBtn =
    document.getElementById("retryBtn");



/* =====================================================
   LETTERS
===================================================== */

const letters = [
    "A",
    "B",
    "C",
    "D"
];



/* =====================================================
   RENDER QUESTIONS
===================================================== */

function renderQuestions() {

    questionsContainer.innerHTML = "";


    questions.forEach((item, index) => {


        const questionCard =
            document.createElement("div");


        questionCard.className =
            "question-card";


        questionCard.innerHTML = `

            <div class="question-number">
                QUESTION ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="question-category">
                ${item.category}
            </div>

            <h3>
                ${item.question}
            </h3>

            <div class="answers">

                ${item.options.map((option, optionIndex) => `

                    <div class="answer">

                        <input
                            type="radio"
                            id="q${index}_${optionIndex}"
                            name="question_${index}"
                            value="${optionIndex}"
                        >

                        <label
                            for="q${index}_${optionIndex}"
                        >

                            <span class="answer-letter">
                                ${letters[optionIndex]}
                            </span>

                            <span>
                                ${option}
                            </span>

                        </label>

                    </div>

                `).join("")}

            </div>

        `;


        questionsContainer.appendChild(
            questionCard
        );

    });


    addAnswerListeners();

}



/* =====================================================
   ANSWER LISTENERS
===================================================== */

function addAnswerListeners() {

    const inputs =
        document.querySelectorAll(
            '.answer input[type="radio"]'
        );


    inputs.forEach(input => {

        input.addEventListener(
            "change",
            updateProgress
        );

    });

}



/* =====================================================
   UPDATE PROGRESS
===================================================== */

function updateProgress() {

    const answered =
        getAnsweredCount();


    const total =
        questions.length;


    const percentage =
        (answered / total) * 100;


    progressText.textContent =
        `${answered} / ${total}`;


    progressFill.style.width =
        `${percentage}%`;


    if (answered === total) {

        finishBtn.disabled =
            false;

        finishMessage.textContent =
            "All questions answered. You can now submit your assessment.";

    } else {

        finishBtn.disabled =
            true;

        finishMessage.textContent =
            `Answer ${total - answered} more question(s) before submitting.`;

    }

}



/* =====================================================
   GET ANSWERED COUNT
===================================================== */

function getAnsweredCount() {

    let answered = 0;


    questions.forEach((_, index) => {

        const selected =
            document.querySelector(
                `input[name="question_${index}"]:checked`
            );


        if (selected) {

            answered++;

        }

    });


    return answered;

}



/* =====================================================
   FINISH ASSESSMENT
===================================================== */

finishBtn.addEventListener(
    "click",
    finishAssessment
);



function finishAssessment() {

    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    const userAnswers = [];


    questions.forEach((question, index) => {


        const selected =
            document.querySelector(
                `input[name="question_${index}"]:checked`
            );


        if (!selected) {

            unanswered++;

            userAnswers.push(null);

            return;

        }


        const answer =
            Number(selected.value);


        userAnswers.push(answer);


        if (answer === question.correct) {

            correct++;

        } else {

            wrong++;

        }

    });


    const percentage =
        Math.round(
            (correct / questions.length) * 100
        );


    correctCount.textContent =
        correct;


    wrongCount.textContent =
        wrong;


    unansweredCount.textContent =
        unanswered;


    scorePercentage.textContent =
        `${percentage}%`;


    showResultMessage(
        percentage
    );


    generateReview(
        userAnswers
    );


    resultSection.classList.add(
        "show"
    );


    resultSection.scrollIntoView({
        behavior: "smooth"
    });


    finishBtn.disabled =
        true;

}



/* =====================================================
   RESULT MESSAGE
===================================================== */

function showResultMessage(percentage) {


    if (percentage >= 90) {

        resultMessage.textContent =
            "Excellent performance. Your core Data Analytics knowledge is very strong.";

    }

    else if (percentage >= 75) {

        resultMessage.textContent =
            "Great job. You have a solid understanding of Data Analytics fundamentals.";

    }

    else if (percentage >= 60) {

        resultMessage.textContent =
            "Good start. Review the incorrect answers and strengthen the topics you missed.";

    }

    else {

        resultMessage.textContent =
            "Keep practicing. Review the concepts and try the assessment again.";

    }

}



/* =====================================================
   REVIEW
===================================================== */

function generateReview(userAnswers) {

    reviewContainer.innerHTML = "";


    questions.forEach((question, index) => {


        const userAnswer =
            userAnswers[index];


        const isCorrect =
            userAnswer === question.correct;


        const reviewItem =
            document.createElement("div");


        reviewItem.className =
            `review-item ${isCorrect ? "correct" : "wrong"}`;


        const userAnswerText =
            userAnswer === null
                ? "Not Answered"
                : `${letters[userAnswer]}. ${question.options[userAnswer]}`;


        const correctAnswerText =
            `${letters[question.correct]}. ${question.options[question.correct]}`;


        reviewItem.innerHTML = `

            <div class="review-question">

                ${index + 1}. ${question.question}

            </div>

            <div class="review-answer">

                Your Answer:

                <span class="${
                    isCorrect
                        ? "correct-answer"
                        : "wrong-answer"
                }">

                    ${userAnswerText}

                </span>

            </div>

            ${
                !isCorrect
                    ? `
                        <div class="review-answer">

                            Correct Answer:

                            <span class="correct-answer">

                                ${correctAnswerText}

                            </span>

                        </div>
                    `
                    : ""
            }

        `;


        reviewContainer.appendChild(
            reviewItem
        );

    });

}



/* =====================================================
   RETRY
===================================================== */

retryBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        setTimeout(() => {

            location.reload();

        }, 400);

    }
);



/* =====================================================
   START
===================================================== */

renderQuestions();

updateProgress();