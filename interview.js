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



/* =========================================================
   TOOLS ASSESSMENT
   ========================================================= */

const toolsQuestions = [

    /* ==================== EXCEL ==================== */

    {
        category: "Excel",
        type: "MCQ",
        question: "You need to return the Product Category based on a Product ID from another table. Which function is the most suitable?",
        options: [
            "SUMIFS",
            "XLOOKUP",
            "COUNTIFS",
            "IFERROR"
        ],
        answer: 1
    },

    {
        category: "Excel",
        type: "MCQ",
        question: "You need to calculate total Revenue for the Electronics category in Cairo only. Which function is most appropriate?",
        options: [
            "SUM",
            "SUMIF",
            "SUMIFS",
            "COUNTIFS"
        ],
        answer: 2
    },

    {
        category: "Excel",
        type: "True / False",
        question: "An absolute reference such as $A$1 remains fixed when the formula is copied to another cell.",
        options: [
            "True",
            "False"
        ],
        answer: 0
    },

    {
        category: "Excel",
        type: "Scenario",
        question: "You have 500,000 rows of sales data. Every month you receive a new file with the same structure, and you need to repeat the same cleaning steps. What would be the most appropriate approach?",
        options: [
            "Use formulas manually every month",
            "Use Conditional Formatting",
            "Use Power Query",
            "Create a new Pivot Table every month"
        ],
        answer: 2
    },

    {
        category: "Excel",
        type: "MCQ",
        question: "Which Excel feature is most suitable for summarizing Revenue by Category and Year?",
        options: [
            "Data Validation",
            "Pivot Table",
            "Find & Replace",
            "Text to Columns"
        ],
        answer: 1
    },

    {
        category: "Excel",
        type: "Scenario",
        question: "A lookup formula returns #N/A when a Product ID doesn't exist. Which function can be used to handle this error and display 'Not Found'?",
        options: [
            "IF",
            "IFERROR",
            "ISBLANK",
            "COUNTIF"
        ],
        answer: 1
    },


    /* ==================== POWER QUERY ==================== */

    {
        category: "Power Query",
        type: "MCQ",
        question: "You have three monthly tables with the same columns: January, February and March. You want one table containing all rows. What should you use?",
        options: [
            "Merge",
            "Append",
            "Pivot",
            "Group By"
        ],
        answer: 1
    },

    {
        category: "Power Query",
        type: "MCQ",
        question: "You have a Sales table and a Products table. You want to bring Category into Sales using ProductID. What should you use?",
        options: [
            "Append",
            "Merge",
            "Unpivot",
            "Group By"
        ],
        answer: 1
    },

    {
        category: "Power Query",
        type: "True / False",
        question: "Power Query's Unpivot operation converts columns into rows.",
        options: [
            "True",
            "False"
        ],
        answer: 0
    },

    {
        category: "Power Query",
        type: "Scenario",
        question: "A Date column contains values such as 01/05/2026 and 02/05/2026, but Power Query recognizes the column as Text. What should you do?",
        options: [
            "Delete the column",
            "Change the Data Type to Date",
            "Use Append",
            "Use Group By"
        ],
        answer: 1
    },

    {
        category: "Power Query",
        type: "MCQ",
        question: "Which transformation would you use to summarize total Revenue by Category?",
        options: [
            "Group By",
            "Merge",
            "Unpivot",
            "Split Column"
        ],
        answer: 0
    },

    {
        category: "Power Query",
        type: "Scenario",
        question: "You have columns Product, Jan, Feb, Mar and Apr. You want Product, Month and Sales. Which transformation is most appropriate?",
        options: [
            "Merge",
            "Append",
            "Unpivot Columns",
            "Replace Values"
        ],
        answer: 2
    },


    /* ==================== POWER BI ==================== */

    {
        category: "Power BI",
        type: "MCQ",
        question: "Which data model is generally recommended for analytical Power BI models?",
        options: [
            "Star Schema",
            "Flat Schema",
            "Circular Schema",
            "Many-to-Many Schema"
        ],
        answer: 0
    },

    {
        category: "Power BI",
        type: "MCQ",
        question: "A Product table contains one row per Product, while Sales contains many rows per Product. What relationship should normally exist?",
        options: [
            "One-to-One",
            "One-to-Many",
            "Many-to-Many",
            "No relationship"
        ],
        answer: 1
    },

    {
        category: "Power BI",
        type: "True / False",
        question: "A Measure is calculated dynamically based on the current filter context.",
        options: [
            "True",
            "False"
        ],
        answer: 0
    },

    {
        category: "Power BI",
        type: "Scenario",
        question: "You need to calculate Revenue dynamically and allow it to respond to slicers for Year, Region and Product Category. What should you create?",
        options: [
            "Calculated Column",
            "Measure",
            "Power Query Parameter",
            "Static Excel Column"
        ],
        answer: 1
    },

    {
        category: "Power BI",
        type: "MCQ",
        question: "Which storage mode loads the data into Power BI's in-memory engine?",
        options: [
            "DirectQuery",
            "Import",
            "Live Connection",
            "Streaming"
        ],
        answer: 1
    },

    {
        category: "Power BI",
        type: "Scenario",
        question: "Your Sales and Returns tables are both large Fact tables. You want to analyze them using common dimensions such as Date, Product and Store. What is generally the better modeling approach?",
        options: [
            "Create a direct relationship between the two Fact tables",
            "Connect both Fact tables to shared Dimension tables",
            "Merge both Fact tables automatically",
            "Delete one of the Fact tables"
        ],
        answer: 1
    },


    /* ==================== DAX ==================== */

    {
        category: "DAX",
        type: "MCQ",
        question: "What is the primary purpose of CALCULATE?",
        options: [
            "Create relationships",
            "Modify filter context",
            "Remove duplicates",
            "Change data types"
        ],
        answer: 1
    },

    {
        category: "DAX",
        type: "MCQ",
        question: "What is the main difference between SUM and SUMX?",
        options: [
            "SUM works with text while SUMX works with numbers",
            "SUM aggregates a column, while SUMX iterates over a table and evaluates an expression",
            "They are identical",
            "SUMX only works with calculated columns"
        ],
        answer: 1
    },

    {
        category: "DAX",
        type: "True / False",
        question: "Filter Context can affect the result of a DAX Measure.",
        options: [
            "True",
            "False"
        ],
        answer: 0
    },

    {
        category: "DAX",
        type: "Scenario",
        question: "Why would you use SUMX for Revenue when Revenue depends on Quantity × NetPrice for each row?",
        options: [
            "Because Revenue depends on a row-level calculation",
            "Because SUM cannot work with numbers",
            "Because SUMX removes filters",
            "Because SUMX creates relationships"
        ],
        answer: 0
    },

    {
        category: "DAX",
        type: "MCQ",
        question: "Which function is commonly used to calculate the same period in the previous year?",
        options: [
            "PREVIOUSMONTH",
            "SAMEPERIODLASTYEAR",
            "NEXTYEAR",
            "LASTYEAR"
        ],
        answer: 1
    },

    {
        category: "DAX",
        type: "Scenario",
        question: "You want to calculate Revenue Growth compared with the previous year. Which approach is appropriate?",
        options: [
            "Current Revenue − Previous Year Revenue, divided by Previous Year Revenue",
            "Current Revenue + Previous Year Revenue",
            "Current Revenue × Previous Year Revenue",
            "Previous Year Revenue − Current Revenue only"
        ],
        answer: 0
    },


    /* ==================== SQL ==================== */

    {
        category: "SQL",
        type: "MCQ",
        question: "Which clause filters rows before aggregation?",
        options: [
            "HAVING",
            "WHERE",
            "GROUP BY",
            "ORDER BY"
        ],
        answer: 1
    },

    {
        category: "SQL",
        type: "MCQ",
        question: "Which JOIN returns all records from the left table and matching records from the right table?",
        options: [
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
            "CROSS JOIN"
        ],
        answer: 1
    },

    {
        category: "SQL",
        type: "True / False",
        question: "HAVING is commonly used to filter aggregated results.",
        options: [
            "True",
            "False"
        ],
        answer: 0
    },

    {
        category: "SQL",
        type: "Scenario",
        question: "You need to find customers whose total Revenue is greater than 100,000. Which approach is correct?",
        options: [
            "WHERE SUM(Revenue) > 100000",
            "HAVING SUM(Revenue) > 100000",
            "ORDER BY SUM(Revenue)",
            "DISTINCT SUM(Revenue)"
        ],
        answer: 1
    },

    {
        category: "SQL",
        type: "MCQ",
        question: "Which function assigns a sequential number to rows within a result set?",
        options: [
            "RANK()",
            "ROW_NUMBER()",
            "DENSE_RANK()",
            "COUNT()"
        ],
        answer: 1
    },

    {
        category: "SQL",
        type: "Scenario",
        question: "You need to find the Top 3 products in each Category. Which SQL feature is particularly useful?",
        options: [
            "GROUP BY only",
            "Window Functions with PARTITION BY",
            "DISTINCT only",
            "UNION"
        ],
        answer: 1
    },


    /* ==================== PYTHON ==================== */

    {
        category: "Python",
        type: "MCQ",
        question: "Which Python library is primarily used for working with tabular datasets?",
        options: [
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Flask"
        ],
        answer: 1
    },

    {
        category: "Python",
        type: "MCQ",
        question: "What does df.head() return?",
        options: [
            "Dataset statistics",
            "First rows of the DataFrame",
            "Column data types only",
            "Missing values only"
        ],
        answer: 1
    },

    {
        category: "Python",
        type: "True / False",
        question: "drop_duplicates() can be used to remove duplicate rows from a DataFrame.",
        options: [
            "True",
            "False"
        ],
        answer: 0
    },

    {
        category: "Python",
        type: "MCQ",
        question: "Which method is commonly used to aggregate data by a category?",
        options: [
            "groupby()",
            "sortby()",
            "categorize()",
            "summarize()"
        ],
        answer: 0
    },

    {
        category: "Python",
        type: "Scenario",
        question: "You want to calculate total Revenue for every Category. Which approach is appropriate?",
        options: [
            'df.groupby("Category")["Revenue"].sum()',
            'df.sort_values("Revenue")',
            'df.dropna()',
            'df.head()'
        ],
        answer: 0
    },

    {
        category: "Python",
        type: "Scenario",
        question: "You have customers and orders DataFrames. Both contain CustomerID. You want to combine information based on CustomerID. Which Pandas operation should you use?",
        options: [
            "concat()",
            "merge()",
            "groupby()",
            "append()"
        ],
        answer: 1
    },


    /* ==================== BONUS ==================== */

    {
        category: "Power BI",
        type: "Technical",
        question: "In Power BI, which is generally more appropriate for a reusable aggregation such as Total Revenue?",
        options: [
            "Calculated Column",
            "Measure",
            "Power Query Custom Column",
            "Excel Formula"
        ],
        answer: 1
    },

    {
        category: "SQL",
        type: "Technical",
        question: "In SQL, the WHERE condition is applied when filtering rows in a query with GROUP BY.",
        options: [
            "Before aggregation",
            "After aggregation",
            "After ORDER BY",
            "Only to the final result"
        ],
        answer: 0
    },

    {
        category: "Power Query",
        type: "Technical",
        question: "You have Sales_Jan, Sales_Feb and Sales_Mar with identical columns and need to combine their rows. Should you use Merge or Append?",
        options: [
            "Merge",
            "Append",
            "Both",
            "Neither"
        ],
        answer: 1
    },

    {
        category: "Power BI",
        type: "Technical",
        question: "A user selects 2025 from a Year slicer. A normal Revenue Measure should respond to that filter context.",
        options: [
            "True",
            "False"
        ],
        answer: 0
    }

];


/* =========================================================
   QUIZ VARIABLES
   ========================================================= */

let currentToolsQuestion = 0;
let toolsScore = 0;
let selectedAnswer = false;


/* =========================================================
   START ASSESSMENT
   ========================================================= */

function startToolsAssessment() {

    currentToolsQuestion = 0;
    toolsScore = 0;

    document
        .getElementById("toolsQuizModal")
        .classList.add("active");

    loadToolsQuestion();
}


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadToolsQuestion() {

    const question = toolsQuestions[currentToolsQuestion];

    selectedAnswer = false;

    document.getElementById("quizCategory").textContent =
        question.category;

    document.getElementById("quizType").textContent =
        question.type;

    document.getElementById("quizQuestion").textContent =
        question.question;

    document.getElementById("quizQuestionNumber").textContent =
        `Question ${currentToolsQuestion + 1} of ${toolsQuestions.length}`;

    document.getElementById("quizScore").textContent =
        `Score: ${toolsScore}`;

    document.getElementById("quizProgressBar").style.width =
        `${((currentToolsQuestion) / toolsQuestions.length) * 100}%`;

    const optionsContainer =
        document.getElementById("quizOptions");

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "quiz-option";

        button.textContent = option;

        button.onclick = () =>
            selectToolsAnswer(index, button);

        optionsContainer.appendChild(button);

    });

    document.getElementById("quizFeedback").textContent = "";

    document
        .getElementById("quizFeedback")
        .className = "quiz-feedback";

    document.getElementById("quizNextBtn").disabled = true;
}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectToolsAnswer(index, selectedButton) {

    if (selectedAnswer) return;

    selectedAnswer = true;

    const question =
        toolsQuestions[currentToolsQuestion];

    const options =
        document.querySelectorAll(".quiz-option");

    options.forEach(button => {
        button.disabled = true;
    });


    if (index === question.answer) {

        toolsScore++;

        selectedButton.classList.add("correct");

        document.getElementById("quizFeedback").textContent =
            "✓ Correct answer!";

        document
            .getElementById("quizFeedback")
            .classList.add("correct-text");

    } else {

        selectedButton.classList.add("wrong");

        options[question.answer]
            .classList.add("correct");

        document.getElementById("quizFeedback").textContent =
            "✕ Incorrect answer. The correct answer is highlighted.";

        document
            .getElementById("quizFeedback")
            .classList.add("wrong-text");
    }


    document.getElementById("quizScore").textContent =
        `Score: ${toolsScore}`;

    document.getElementById("quizNextBtn").disabled = false;
}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextToolsQuestion() {

    currentToolsQuestion++;

    if (currentToolsQuestion >= toolsQuestions.length) {

        finishToolsAssessment();

        return;
    }

    loadToolsQuestion();
}


/* =========================================================
   FINISH ASSESSMENT
   ========================================================= */

function finishToolsAssessment() {

    document
        .getElementById("toolsQuizModal")
        .classList.remove("active");

    document
        .getElementById("toolsResultModal")
        .classList.add("active");

    document.getElementById("finalScore").textContent =
        toolsScore;


    const percentage =
        Math.round(
            (toolsScore / toolsQuestions.length) * 100
        );


    let message = "";

    if (percentage >= 90) {

        message =
            "Excellent technical performance. Your fundamentals are strong.";

    } else if (percentage >= 75) {

        message =
            "Great work. Review a few technical areas before your interview.";

    } else if (percentage >= 60) {

        message =
            "Good start. Keep practicing the technical concepts.";

    } else {

        message =
            "You need more practice. Review the tools and try again.";

    }


    document.getElementById("resultMessage").textContent =
        message;
}


/* =========================================================
   CLOSE QUIZ
   ========================================================= */

function closeToolsAssessment() {

    document
        .getElementById("toolsQuizModal")
        .classList.remove("active");
}


/* =========================================================
   CLOSE RESULT
   ========================================================= */

function closeToolsResult() {

    document
        .getElementById("toolsResultModal")
        .classList.remove("active");
}


/* =========================================================
   RESTART ASSESSMENT
   ========================================================= */

function restartToolsAssessment() {

    document
        .getElementById("toolsResultModal")
        .classList.remove("active");

    startToolsAssessment();
}