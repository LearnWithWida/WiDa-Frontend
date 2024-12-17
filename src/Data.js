import courseImg1 from "./assets/courseimg1.png";
import courseImg2 from "./assets/courseimg2.png";
import courseImg3 from "./assets/courseimg3.png";
import testingVideo from "./assets/videos/testing.mp4";

export const courseData = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    level: "Beginner to Advanced",
    image: "/path/to/image.jpg",
    description:
      "Master the fundamentals of data analysis with our comprehensive course.",
    modules: [
      "Introduction to Data Analysis",
      "Data Collection Methods",
      "Data Cleaning and Preparation",
      "Statistical Analysis",
      "Data Visualization",
      "Advanced Analytics",
    ],
    exams: [
      {
        id: 1,
        title: "Introduction to Data Analysis",
        questions: [
          {
            question: "What is the best feature to use?",
            options: [
              "Conditional Formatting",
              "PivotTable",
              "VLOOKUP",
              "Data Validation",
            ],
            correctAnswer: 1,
          },
          {
            question:
              "Your SQL database has a table named Orders with columns CustomerID and OrderID. You want to find customers who placed more than 3 orders. Which SQL query will you write?",
            options: [
              "SELECT CustomerID FROM Orders WHERE OrderID > 3;",
              "SELECT CustomerID, COUNT(OrderID) FROM Orders GROUP BY CustomerID HAVING COUNT(OrderID) > 3;",
              "SELECT DISTINCT CustomerID FROM Orders WHERE COUNT(OrderID) > 3;",
              "SELECT CustomerID FROM Orders GROUP BY OrderID HAVING COUNT(CustomerID) > 3;",
            ],
            correctAnswer: 1,
          },
          {
            question:
              "You are asked to visualize a sales trend over time using Python. Which library will you use for creating a line chart?",
            options: ["Matplotlib", "NumPy", "Scikit-learn", "Pandas"],
            correctAnswer: 0,
          },
          {
            question:
              "Your Power BI dashboard includes a map visual plotting sales by city. However, some city names are duplicated in different countries. What should you do to ensure accurate visualization?",
            options: [
              "Add a country field to the map visual.",
              "Apply a drill-through filter.",
              "Use the 'Region' column as the primary key.",
              "Enable cross-filtering.",
            ],
            correctAnswer: 0,
          },
          {
            question:
              "You are tasked with identifying the highest sales value from a column in Excel. Which function will you use?",
            options: ["MIN()", "MAX()", "AVERAGE()", "SUM()"],
            correctAnswer: 1,
          },
          {
            question:
              "A table in your SQL database has duplicate rows. You want to remove duplicates in your query. Which SQL clause should you use?",
            options: ["GROUP BY", "DISTINCT", "HAVING", "ORDER BY"],
            correctAnswer: 1,
          },
          {
            question:
              "You are working with a Python DataFrame and need to count the number of unique values in the column ProductID. Which code snippet will you use?",
            options: [
              "df['ProductID'].count()",
              "df['ProductID'].nunique()",
              "len(df['ProductID'])",
              "df['ProductID'].unique()",
            ],
            correctAnswer: 1,
          },
          {
            question:
              "Your client wants to categorize revenue in Power BI into 'High', 'Medium', and 'Low' tiers based on thresholds. Which feature should you use?",
            options: [
              "Power Query Editor",
              "DAX with IF statements",
              "Report Filters",
              "Aggregated Measures",
            ],
            correctAnswer: 1,
          },
          {
            question:
              "A column in your dataset contains dates stored as text strings. You need to convert them into Python’s datetime objects for analysis. Which function will you use?",
            options: [
              "pd.to_datetime()",
              "datetime()",
              "df['date'].parse()",
              "convert(df['date'], to='datetime')",
            ],
            correctAnswer: 0,
          },
          {
            question:
              "Your manager wants to see only the top 5 performing regions in your Power BI sales report. Which feature can you use to achieve this?",
            options: ["Tooltip", "Top N Filter", "Drill-through", "Slicer"],
            correctAnswer: 1,
          },
          {
            question:
              "In a customer segmentation project, you need to group customers based on their purchasing behavior. Which technique will you use?",
            options: ["Classification", "Clustering", "Regression", "ETL"],
            correctAnswer: 1,
          },
          {
            question:
              "Your sales dataset in Excel contains a column of product prices. To calculate a 15% discount on each price in a new column, what formula will you use?",
            options: [
              "=Price - (Price * 0.15)",
              "=Price + 0.15",
              "=Price / 0.85",
              "=SUM(Price - 0.15)",
            ],
            correctAnswer: 0,
          },
          {
            question:
              "Your SQL table contains sales data with a Date column. Your manager asks for monthly revenue. Which function will help you group data by month?",
            options: ["DATEPART()", "MONTH()", "GROUP BY Date", "SUM()"],
            correctAnswer: 1,
          },
          {
            question:
              "You’re working on a Power BI report and need to calculate total revenue for the last 12 months, regardless of the current filters. Which DAX function will you use?",
            options: [
              "DATESINPERIOD()",
              "TOTALYTD()",
              "CALCULATE() with ALL()",
              "SUMX()",
            ],
            correctAnswer: 0,
          },
          {
            question:
              "You are analyzing survey responses, and the comments include phrases like 'Great product!' and 'Not satisfied.' What type of data is this?",
            options: ["Quantitative", "Ordinal", "Structured", "Qualitative"],
            correctAnswer: 3,
          },
          {
            question:
              "You are cleaning a dataset in Python and want to drop all rows with missing values. Which Pandas method will you use?",
            options: ["fillna()", "dropna()", "isna()", "replace()"],
            correctAnswer: 1,
          },
          {
            question:
              "You are analyzing customer purchase data and notice significant variation in monthly revenue, as shown by a high standard deviation. What does this indicate?",
            options: [
              "Revenue is consistent.",
              "There are large fluctuations in revenue.",
              "Revenue data is normally distributed.",
              "The mean and median are equal.",
            ],
            correctAnswer: 1,
          },
          {
            question:
              "You are merging two datasets in Python. You want all rows from both datasets to appear in the result, even if they don’t match. Which type of merge will you perform?",
            options: [
              "Inner Join",
              "Left Join",
              "Right Join",
              "Full Outer Join",
            ],
            correctAnswer: 3,
          },
          {
            question:
              "A column in your Power BI report shows null values for some rows. What should you do to handle these missing values during the transformation stage?",
            options: [
              "Remove rows with null values.",
              "Replace null values with the mean or median.",
              "Leave the null values as they are.",
              "Replace null values with random data.",
            ],
            correctAnswer: 1,
          },
          {
            question:
              "You’re tasked with tracking quarterly sales trends in Excel. You decide to display a rolling 4-quarter average alongside the data. Which formula will achieve this?",
            options: [
              "=AVERAGE(OFFSET([Row],-3,0,4))",
              "=SUMIF(Sales,Quarter,-4)",
              "=SUM(Sales)/4",
              "=FILTER(Sales,-4)",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: 2,
        title: "Data Collection Methods",
        questions: [
          {
            question: "Which method is best for collecting qualitative data?",
            options: [
              "Surveys with multiple choice questions",
              "Interviews and focus groups",
              "Automated sensor data",
              "Website analytics",
            ],
            correctAnswer: 1,
          },
          {
            question: "What is primary data?",
            options: [
              "Data collected from existing sources",
              "Data collected directly for your specific research",
              "Historical data from databases",
              "Secondary data that has been cleaned",
            ],
            correctAnswer: 1,
          },
          {
            question:
              "Which sampling method involves dividing the population into subgroups?",
            options: [
              "Random sampling",
              "Systematic sampling",
              "Stratified sampling",
              "Convenience sampling",
            ],
            correctAnswer: 2,
          },
        ],
      },
      {
        id: 3,
        title: "Data Cleaning",
        questions: [
          {
            question: "What is data cleaning?",
            options: [
              "Creating new data",
              "Removing all data",
              "Identifying and correcting errors in data",
              "Collecting more data",
            ],
            correctAnswer: 2,
          },
          {
            question: "Which is a common data quality issue?",
            options: [
              "Missing values",
              "Too much data",
              "Data that's too clean",
              "Data that's too organized",
            ],
            correctAnswer: 0,
          },
          {
            question: "What is data normalization?",
            options: [
              "Making data bigger",
              "Making data smaller",
              "Adjusting values to a common scale",
              "Removing all data",
            ],
            correctAnswer: 2,
          },
        ],
      },
      {
        id: 4,
        title: "Statistical Analysis",
        questions: [
          {
            question: "What is the mean?",
            options: [
              "The middle value",
              "The average value",
              "The most frequent value",
              "The largest value",
            ],
            correctAnswer: 1,
          },
          {
            question: "What does standard deviation measure?",
            options: [
              "Average value",
              "Data spread",
              "Data size",
              "Data accuracy",
            ],
            correctAnswer: 1,
          },
          {
            question: "What is correlation?",
            options: [
              "Causation",
              "Relationship between variables",
              "Data cleaning",
              "Data collection",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: 5,
        title: "Data Visualization",
        questions: [
          {
            question: "Which chart is best for showing trends over time?",
            options: ["Pie chart", "Line chart", "Bar chart", "Scatter plot"],
            correctAnswer: 1,
          },
          {
            question: "What is the purpose of data visualization?",
            options: [
              "To make data look pretty",
              "To hide data",
              "To communicate insights effectively",
              "To confuse readers",
            ],
            correctAnswer: 2,
          },
          {
            question: "Which tool is NOT commonly used for data visualization?",
            options: [
              "Tableau",
              "Power BI",
              "Microsoft Word",
              "Python matplotlib",
            ],
            correctAnswer: 2,
          },
        ],
      },
      {
        id: 6,
        title: "Python for Data Analysis",
        questions: [
          {
            question:
              "Which Python library is primarily used for data manipulation?",
            options: ["Matplotlib", "Pandas", "Seaborn", "Scikit-learn"],
            correctAnswer: 1,
          },
          {
            question: "What is NumPy?",
            options: [
              "A text editor",
              "A numerical computing library",
              "A database",
              "A visualization tool",
            ],
            correctAnswer: 1,
          },
          {
            question:
              "Which file format is commonly used for data storage in Python?",
            options: ["CSV", "DOC", "PPT", "EXE"],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: 7,
        title: "SQL for Data Analysis",
        questions: [
          {
            question: "What does SQL stand for?",
            options: [
              "Strong Question Language",
              "Structured Query Language",
              "Simple Query Language",
              "System Query Language",
            ],
            correctAnswer: 1,
          },
          {
            question: "Which SQL command is used to retrieve data?",
            options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
            correctAnswer: 2,
          },
          {
            question: "What is a JOIN used for in SQL?",
            options: [
              "To delete data",
              "To combine rows from different tables",
              "To create new tables",
              "To update data",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: 8,
        title: "Machine Learning Basics",
        questions: [
          {
            question: "What is supervised learning?",
            options: [
              "Learning without labels",
              "Learning with labels",
              "Learning without data",
              "Learning without supervision",
            ],
            correctAnswer: 1,
          },
          {
            question: "Which is NOT a type of machine learning?",
            options: [
              "Supervised learning",
              "Unsupervised learning",
              "Reinforcement learning",
              "Manual learning",
            ],
            correctAnswer: 3,
          },
          {
            question: "What is overfitting?",
            options: [
              "Model performs well on training data but poorly on new data",
              "Model performs poorly on all data",
              "Model performs well on all data",
              "Model doesn't fit the data at all",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        id: 9,
        title: "Data Ethics and Privacy",
        questions: [
          {
            question: "What is data privacy?",
            options: [
              "Making all data public",
              "Protecting sensitive information",
              "Deleting all data",
              "Sharing all data",
            ],
            correctAnswer: 1,
          },
          {
            question: "What is GDPR?",
            options: [
              "A programming language",
              "A database system",
              "A data protection regulation",
              "A visualization tool",
            ],
            correctAnswer: 2,
          },
          {
            question: "What is data anonymization?",
            options: [
              "Deleting data",
              "Removing identifying information",
              "Publishing data",
              "Collecting more data",
            ],
            correctAnswer: 1,
          },
        ],
      },
      {
        id: 10,
        title: "Advanced Analytics",
        questions: [
          {
            question: "What is predictive analytics?",
            options: [
              "Analyzing past events",
              "Predicting future outcomes",
              "Describing current state",
              "Organizing data",
            ],
            correctAnswer: 1,
          },
          {
            question: "Which technique is used for time series analysis?",
            options: ["ANOVA", "Chi-square test", "ARIMA", "t-test"],
            correctAnswer: 2,
          },
          {
            question: "What is cluster analysis used for?",
            options: [
              "Predicting outcomes",
              "Grouping similar data points",
              "Testing hypotheses",
              "Visualizing data",
            ],
            correctAnswer: 1,
          },
        ],
      },
    ],
  },
  {
    id: "python",
    title: "Python Programming",
    level: "Beginner to Advanced",
    image: "/path/to/python-image.jpg",
    description: "Learn Python programming from basics to advanced concepts.",
    modules: [
      "Python Basics",
      "Data Structures",
      "Functions and OOP",
      "File Handling",
      "Libraries and Frameworks",
      "Advanced Python Concepts",
    ],
    exams: [
      {
        id: 1,
        title: "Python Basics",
        questions: [
          {
            question: "What is Python?",
            options: [
              "A programming language",
              "A snake",
              "A database",
              "An operating system",
            ],
            correctAnswer: 0,
          },
          {
            question: "Which of these is a valid Python variable name?",
            options: ["2variable", "_variable", "my-variable", "class"],
            correctAnswer: 1,
          },
          {
            question: "What is the output of print(2 + 2)?",
            options: ["22", "4", "Error", "None"],
            correctAnswer: 1,
          },
        ],
      },
    ],
  },
  {
    id: "excel",
    title: "Microsoft Excel",
    level: "Beginner to Advanced",
    image: "/path/to/excel-image.jpg",
    description: "Master Excel for data analysis and business intelligence.",
    modules: [
      "Excel Basics",
      "Formulas and Functions",
      "Data Analysis Tools",
      "Pivot Tables",
      "Charts and Graphs",
      "Macros and VBA",
    ],
    exams: [
      {
        id: 1,
        title: "Excel Fundamentals",
        questions: [
          {
            question:
              "What is the symbol for multiplication in Excel formulas?",
            options: ["x", "*", "×", "."],
            correctAnswer: 1,
          },
          {
            question: "Which function calculates the average of a range?",
            options: ["SUM", "AVERAGE", "MEAN", "COUNT"],
            correctAnswer: 1,
          },
          {
            question: "What is a pivot table used for?",
            options: [
              "Formatting cells",
              "Creating charts",
              "Summarizing data",
              "Printing worksheets",
            ],
            correctAnswer: 2,
          },
        ],
      },
    ],
  },
  {
    id: "power-bi",
    title: "Power BI",
    level: "Beginner to Advanced",
    image: "/path/to/powerbi-image.jpg",
    description:
      "Create powerful business intelligence reports and dashboards.",
    modules: [
      "Power BI Basics",
      "Data Modeling",
      "DAX Formulas",
      "Visualizations",
      "Report Design",
      "Data Transformation",
    ],
    exams: [
      {
        id: 1,
        title: "Power BI Fundamentals",
        questions: [
          {
            question: "What is Power BI primarily used for?",
            options: [
              "Word processing",
              "Data visualization",
              "Programming",
              "Email management",
            ],
            correctAnswer: 1,
          },
          {
            question:
              "What language is used for creating calculations in Power BI?",
            options: ["SQL", "Python", "DAX", "Java"],
            correctAnswer: 2,
          },
          {
            question: "Which Power BI component is used for data cleaning?",
            options: ["Power Query", "Power Pivot", "Power View", "Power Map"],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
];

export const pricing = {
  virtual: {
    original: "150,000",
    current: "100,000",
  },
  physical: {
    original: "200,000",
    current: "150,000",
  },
};
