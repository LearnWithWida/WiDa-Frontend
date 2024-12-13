import courseImg1 from './assets/courseimg1.png';
import courseImg2 from './assets/courseimg2.png';
import courseImg3 from './assets/courseimg3.png';
import testingVideo from './assets/videos/testing.mp4';

export const courseData = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    level: "Beginner to Advanced",
    image: "/path/to/image.jpg",
    description: "Master the fundamentals of data analysis with our comprehensive course.",
    modules: [
      "Introduction to Data Analysis",
      "Data Collection Methods",
      "Data Cleaning and Preparation",
      "Statistical Analysis",
      "Data Visualization",
      "Advanced Analytics"
    ],
    exams: [
      {
        id: 1,
        title: "Introduction to Data Analysis",
        questions: [
          {
            question: "What is data analysis?",
            options: [
              "The process of cleaning, transforming, and modeling data",
              "Writing computer programs",
              "Creating databases",
              "Making spreadsheets"
            ],
            correctAnswer: 0
          },
          {
            question: "Which of the following is NOT a type of data analysis?",
            options: [
              "Descriptive Analysis",
              "Predictive Analysis",
              "Creative Analysis",
              "Prescriptive Analysis"
            ],
            correctAnswer: 2
          },
          {
            question: "What is the first step in the data analysis process?",
            options: [
              "Data Visualization",
              "Data Collection",
              "Data Interpretation",
              "Data Modeling"
            ],
            correctAnswer: 1
          }
        ]
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
              "Website analytics"
            ],
            correctAnswer: 1
          },
          {
            question: "What is primary data?",
            options: [
              "Data collected from existing sources",
              "Data collected directly for your specific research",
              "Historical data from databases",
              "Secondary data that has been cleaned"
            ],
            correctAnswer: 1
          },
          {
            question: "Which sampling method involves dividing the population into subgroups?",
            options: [
              "Random sampling",
              "Systematic sampling",
              "Stratified sampling",
              "Convenience sampling"
            ],
            correctAnswer: 2
          }
        ]
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
              "Collecting more data"
            ],
            correctAnswer: 2
          },
          {
            question: "Which is a common data quality issue?",
            options: [
              "Missing values",
              "Too much data",
              "Data that's too clean",
              "Data that's too organized"
            ],
            correctAnswer: 0
          },
          {
            question: "What is data normalization?",
            options: [
              "Making data bigger",
              "Making data smaller",
              "Adjusting values to a common scale",
              "Removing all data"
            ],
            correctAnswer: 2
          }
        ]
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
              "The largest value"
            ],
            correctAnswer: 1
          },
          {
            question: "What does standard deviation measure?",
            options: [
              "Average value",
              "Data spread",
              "Data size",
              "Data accuracy"
            ],
            correctAnswer: 1
          },
          {
            question: "What is correlation?",
            options: [
              "Causation",
              "Relationship between variables",
              "Data cleaning",
              "Data collection"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 5,
        title: "Data Visualization",
        questions: [
          {
            question: "Which chart is best for showing trends over time?",
            options: [
              "Pie chart",
              "Line chart",
              "Bar chart",
              "Scatter plot"
            ],
            correctAnswer: 1
          },
          {
            question: "What is the purpose of data visualization?",
            options: [
              "To make data look pretty",
              "To hide data",
              "To communicate insights effectively",
              "To confuse readers"
            ],
            correctAnswer: 2
          },
          {
            question: "Which tool is NOT commonly used for data visualization?",
            options: [
              "Tableau",
              "Power BI",
              "Microsoft Word",
              "Python matplotlib"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 6,
        title: "Python for Data Analysis",
        questions: [
          {
            question: "Which Python library is primarily used for data manipulation?",
            options: [
              "Matplotlib",
              "Pandas",
              "Seaborn",
              "Scikit-learn"
            ],
            correctAnswer: 1
          },
          {
            question: "What is NumPy?",
            options: [
              "A text editor",
              "A numerical computing library",
              "A database",
              "A visualization tool"
            ],
            correctAnswer: 1
          },
          {
            question: "Which file format is commonly used for data storage in Python?",
            options: [
              "CSV",
              "DOC",
              "PPT",
              "EXE"
            ],
            correctAnswer: 0
          }
        ]
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
              "System Query Language"
            ],
            correctAnswer: 1
          },
          {
            question: "Which SQL command is used to retrieve data?",
            options: [
              "INSERT",
              "UPDATE",
              "SELECT",
              "DELETE"
            ],
            correctAnswer: 2
          },
          {
            question: "What is a JOIN used for in SQL?",
            options: [
              "To delete data",
              "To combine rows from different tables",
              "To create new tables",
              "To update data"
            ],
            correctAnswer: 1
          }
        ]
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
              "Learning without supervision"
            ],
            correctAnswer: 1
          },
          {
            question: "Which is NOT a type of machine learning?",
            options: [
              "Supervised learning",
              "Unsupervised learning",
              "Reinforcement learning",
              "Manual learning"
            ],
            correctAnswer: 3
          },
          {
            question: "What is overfitting?",
            options: [
              "Model performs well on training data but poorly on new data",
              "Model performs poorly on all data",
              "Model performs well on all data",
              "Model doesn't fit the data at all"
            ],
            correctAnswer: 0
          }
        ]
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
              "Sharing all data"
            ],
            correctAnswer: 1
          },
          {
            question: "What is GDPR?",
            options: [
              "A programming language",
              "A database system",
              "A data protection regulation",
              "A visualization tool"
            ],
            correctAnswer: 2
          },
          {
            question: "What is data anonymization?",
            options: [
              "Deleting data",
              "Removing identifying information",
              "Publishing data",
              "Collecting more data"
            ],
            correctAnswer: 1
          }
        ]
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
              "Organizing data"
            ],
            correctAnswer: 1
          },
          {
            question: "Which technique is used for time series analysis?",
            options: [
              "ANOVA",
              "Chi-square test",
              "ARIMA",
              "t-test"
            ],
            correctAnswer: 2
          },
          {
            question: "What is cluster analysis used for?",
            options: [
              "Predicting outcomes",
              "Grouping similar data points",
              "Testing hypotheses",
              "Visualizing data"
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
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
      "Advanced Python Concepts"
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
              "An operating system"
            ],
            correctAnswer: 0
          },
          {
            question: "Which of these is a valid Python variable name?",
            options: [
              "2variable",
              "_variable",
              "my-variable",
              "class"
            ],
            correctAnswer: 1
          },
          {
            question: "What is the output of print(2 + 2)?",
            options: [
              "22",
              "4",
              "Error",
              "None"
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
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
      "Macros and VBA"
    ],
    exams: [
      {
        id: 1,
        title: "Excel Fundamentals",
        questions: [
          {
            question: "What is the symbol for multiplication in Excel formulas?",
            options: [
              "x",
              "*",
              "×",
              "."
            ],
            correctAnswer: 1
          },
          {
            question: "Which function calculates the average of a range?",
            options: [
              "SUM",
              "AVERAGE",
              "MEAN",
              "COUNT"
            ],
            correctAnswer: 1
          },
          {
            question: "What is a pivot table used for?",
            options: [
              "Formatting cells",
              "Creating charts",
              "Summarizing data",
              "Printing worksheets"
            ],
            correctAnswer: 2
          }
        ]
      }
    ]
  },
  {
    id: "power-bi",
    title: "Power BI",
    level: "Beginner to Advanced",
    image: "/path/to/powerbi-image.jpg",
    description: "Create powerful business intelligence reports and dashboards.",
    modules: [
      "Power BI Basics",
      "Data Modeling",
      "DAX Formulas",
      "Visualizations",
      "Report Design",
      "Data Transformation"
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
              "Email management"
            ],
            correctAnswer: 1
          },
          {
            question: "What language is used for creating calculations in Power BI?",
            options: [
              "SQL",
              "Python",
              "DAX",
              "Java"
            ],
            correctAnswer: 2
          },
          {
            question: "Which Power BI component is used for data cleaning?",
            options: [
              "Power Query",
              "Power Pivot",
              "Power View",
              "Power Map"
            ],
            correctAnswer: 0
          }
        ]
      }
    ]
  }
];

export const pricing = {
  virtual: {
    original: "150,000",
    current: "100,000"
  },
  physical: {
    original: "200,000",
    current: "150,000"
  }
};