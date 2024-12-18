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
            question: "You are analyzing sales data in Excel and want to calculate the total sales for each salesperson from a dataset with columns for sales and salesperson names. What is the best feature to use?",
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
            question: "Which feature will you use?",
            options: [
              "PivotTable",
              "VLOOKUP",
              "CONCATENATE",
              "Data Validation"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You need to create a formula that calculates the total revenue for a dataset where Quantity and Unit Price are in two different columns. Which formula will you use?",
            options: [
              "=SUM(Quantity, Unit Price)",
              "=SUM(Quantity * Unit Price)",
              "=Quantity * Unit Price",
              "=SUMPRODUCT(Quantity, Unit Price)"
            ],
            correctAnswer: 3
          },
          {
            question: "Scenario: Your manager asks you to display only unique values from a column of customer names. Which function will you use?",
            options: [
              "FILTER()",
              "UNIQUE()",
              "SORT()",
              "COUNTIF()"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You have a dataset with a column of sales amounts, and you want to calculate a 10% commission for each sale in a new column. Which formula should you use?",
            options: [
              "=Sales/0.10",
              "=Sales*10%",
              "=Sales+10%",
              "=SUM(Sales*0.10)"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You are tasked with highlighting all cells where sales exceed $50,000. Which Excel feature should you use?",
            options: [
              "Filters",
              "Conditional Formatting",
              "Sort and Filter",
              "Data Validation"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You need to calculate the number of days between two dates stored in Start Date and End Date columns. Which formula will you use?",
            options: [
              "=DATEDIF(Start Date, End Date, \"d\")",
              "=NETWORKDAYS(Start Date, End Date)",
              "=DATEDIF(Start Date, End Date)",
              "=DATE(Start Date, End Date)"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You are working with a dataset where product prices include tax, and you need to calculate the tax-exclusive price. The tax rate is 15%. What formula would you use?",
            options: [
              "=Price*15%",
              "=Price/1.15",
              "=Price-15%",
              "=Price/0.85"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You want to summarize sales data in a PivotTable, but your data has blank rows. What should you do first?",
            options: [
              "Apply a filter to exclude blanks",
              "Use the Remove Duplicates feature",
              "Delete blank rows using Go To Special",
              "Highlight blank cells with Conditional Formatting"
            ],
            correctAnswer: 2
          },
          {
            question: "Scenario: You need to combine the first name and last name from two separate columns into one full name column. Which formula will you use?",
            options: [
              "=JOIN(\" \", First Name, Last Name)",
              "=MERGE(First Name, Last Name)",
              "=CONCATENATE(First Name, \" \", Last Name)",
              "=CONCAT(First Name, Last Name)"
            ],
            correctAnswer: 2
          },
          {
            question: "Scenario: You are analyzing data and want to create a dynamic dropdown list that updates automatically when new entries are added to a range. Which feature should you use?",
            options: [
              "Data Validation with a defined name range",
              "Data Validation with fixed cell references",
              "Slicers",
              "Filters"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: Your boss asks you to display only the top 10 sales values from a column. Which feature should you use?",
            options: [
              "Sort Largest to Smallest",
              "Top 10 Filter",
              "Conditional Formatting",
              "Advanced Filter"
            ],
            correctAnswer: 1
          },
          {
            question: "You want to count how many times a specific product appears in a column. Which formula will you use?",
            options: [
              "=COUNTIF(Range, \"Product Name\")",
              "=COUNTIF(\"Product Name\", Range)",
              "=COUNT(Range, \"Product Name\")",
              "=IF(COUNT(Range))"
            ],
            correctAnswer: 0
          },
          {
            question: "You need to extract the year from a Date column in Excel. Which formula will you use?",
            options: [
              "=YEAR(Date)",
              "=TEXT(Date, \"YYYY\")",
              "=DATEVALUE(Date)",
              "=EXTRACT(Date, \"Year\")"
            ],
            correctAnswer: 0
          },
          {
            question: "You have a dataset with duplicate customer entries and want to remove duplicates while keeping the first occurrence. Which Excel feature will you use?",
            options: [
              "Conditional Formatting",
              "Remove Duplicates",
              "Sort and Filter",
              "Data Validation"
            ],
            correctAnswer: 1
          },
          {
            question: "You need to display the sales totals from one sheet on another sheet, but only if the sales region matches a specific value. Which function will you use?",
            options: [
              "VLOOKUP",
              "INDEX-MATCH",
              "FILTER",
              "IF"
            ],
            correctAnswer: 2
          },
          {
            question: "Scenario: You are tasked with calculating the compound interest for a loan. Which Excel function is most suitable?",
            options: [
              "FV()",
              "PMT()",
              "NPV()",
              "PV()"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You need to calculate the moving average of sales over the past 3 months. Which formula will you use?",
            options: [
              "=AVERAGE(Sales[Row-2]:[Row])",
              "=AVERAGE(OFFSET([Row],-2,0,3))",
              "=SUM(Sales)/3",
              "=FILTER(Sales,Last3Months)"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: Your dataset includes sales data, and your manager asks for the percentage contribution of each salesperson's sales to the total sales. Which formula will you use?",
            options: [
              "=Sales/SUM(Sales)",
              "=Sales/COUNT(Sales)",
              "=Sales*100%",
              "=SUM(Sales)/Sales"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You are working with a dataset that includes sales revenue and want to display the running total of revenue. Which formula will you use?",
            options: [
              "=SUM(Revenue)",
              "=SUM($Revenue$1:Revenue[Row])",
              "=CUMULATIVE(Revenue)",
              "=OFFSET(Revenue, Row)"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You need to create a chart to visualize the comparison of sales performance across different regions. Which chart type is most appropriate?",
            options: [
              "Line Chart",
              "Pie Chart",
              "Column Chart",
              "Scatter Chart"
            ],
            correctAnswer: 2
          }
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
    id: "SQL",
    title: "SQL",
    level: "Beginner to Advanced",
    image: "/path/to/python-image.jpg",
    description: "Learn SQL from basics to advanced concepts.",
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
            question: "What does SQL stand for?",
            options: [
              "Structured Query Language",
              "Simple Query Language",
              "Standard Query Language",
              "Sequential Query Language"
            ],
            correctAnswer: 0
          },
          {
            question: "Which SQL statement is used to retrieve data from a database?",
            options: [
              "GET",
              "SELECT",
              "RETRIEVE",
              "FETCH"
            ],
            correctAnswer: 1
          },
          {
            question: "Which clause is used to filter records in SQL?",
            options: [
              "WHERE",
              "FILTER",
              "HAVING",
              "SELECT"
            ],
            correctAnswer: 0
          },
          {
            question: "What is the purpose of the JOIN clause?",
            options: [
              "To combine rows from two or more tables",
              "To filter records",
              "To sort records",
              "To group records"
            ],
            correctAnswer: 0
          },
          {
            question: "Which SQL function is used to count the number of rows in a table?",
            options: [
              "COUNT()",
              "SUM()",
              "TOTAL()",
              "NUM()"
            ],
            correctAnswer: 0
          },
          {
            question: "What is the default sorting order of the ORDER BY clause?",
            options: [
              "Ascending",
              "Descending",
              "Random",
              "None"
            ],
            correctAnswer: 0
          },
          {
            question: "Which SQL statement is used to update existing records in a table?",
            options: [
              "UPDATE",
              "MODIFY",
              "SET",
              "CHANGE"
            ],
            correctAnswer: 0
          },
          {
            question: "What is a primary key?",
            options: [
              "A unique identifier for a record in a table",
              "A foreign key",
              "A type of index",
              "A column that can have null values"
            ],
            correctAnswer: 0
          },
          {
            question: "Which SQL statement is used to delete records from a table?",
            options: [
              "REMOVE",
              "DELETE",
              "DROP",
              "CLEAR"
            ],
            correctAnswer: 1
          },
          {
            question: "What does the GROUP BY clause do?",
            options: [
              "Groups rows that have the same values in specified columns",
              "Filters records",
              "Sorts records",
              "Joins tables"
            ],
            correctAnswer: 0
          },
          {
            question: "Which SQL function is used to find the maximum value in a column?",
            options: [
              "MAX()",
              "MIN()",
              "AVG()",
              "SUM()"
            ],
            correctAnswer: 0
          },
          {
            question: "What is the purpose of the HAVING clause?",
            options: [
              "To filter records after grouping",
              "To filter records before grouping",
              "To sort records",
              "To join tables"
            ],
            correctAnswer: 0
          },
          {
            question: "Which SQL command is used to create a new table?",
            options: [
              "CREATE TABLE",
              "NEW TABLE",
              "ADD TABLE",
              "MAKE TABLE"
            ],
            correctAnswer: 0
          },
          {
            question: "What is a foreign key?",
            options: [
              "A key used to link two tables together",
              "A unique identifier for a record",
              "A type of index",
              "A column that can have null values"
            ],
            correctAnswer: 0
          },
          {
            question: "Which SQL statement is used to retrieve unique values from a column?",
            options: [
              "SELECT DISTINCT",
              "SELECT UNIQUE",
              "SELECT DIFFERENT",
              "SELECT ONLY"
            ],
            correctAnswer: 0
          },
          {
            question: "What does the LIMIT clause do?",
            options: [
              "Restricts the number of records returned",
              "Filters records",
              "Sorts records",
              "Groups records"
            ],
            correctAnswer: 0
          },
          {
            question: "Which SQL function is used to calculate the average value in a column?",
            options: [
              "AVG()",
              "MEAN()",
              "MEDIAN()",
              "SUM()"
            ],
            correctAnswer: 0
          },
          {
            question: "What is the purpose of the ALTER TABLE statement?",
            options: [
              "To modify an existing table structure",
              "To delete a table",
              "To create a new table",
              "To insert data into a table"
            ],
            correctAnswer: 0
          },
          {
            question: "Which SQL command is used to remove a table from a database?",
            options: [
              "DELETE TABLE",
              "DROP TABLE",
              "REMOVE TABLE",
              "CLEAR TABLE"
            ],
            correctAnswer: 1
          },
          {
            question: "What is the purpose of the UNION operator?",
            options: [
              "To combine the results of two or more SELECT statements",
              "To filter records",
              "To sort records",
              "To group records"
            ],
            correctAnswer: 0
          }
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
            question: "Which function would you use to find the maximum value in a range?",
            options: [
              "MAX()",
              "MIN()",
              "SUM()",
              "AVERAGE()"
            ],
            correctAnswer: 0
          },
          {
            question: "What is the shortcut for creating a new worksheet in Excel?",
            options: [
              "Ctrl + N",
              "Ctrl + W",
              "Ctrl + Shift + N",
              "Ctrl + T"
            ],
            correctAnswer: 0
          },
          {
            question: "Which of the following is a valid Excel formula?",
            options: [
              "=SUM(A1:A10)",
              "=SUM A1:A10",
              "SUM(A1:A10)",
              "=SUM(A1:A10)"
            ],
            correctAnswer: 0
          },
          {
            question: "What does the VLOOKUP function do?",
            options: [
              "Looks up a value in a vertical column",
              "Looks up a value in a horizontal row",
              "Calculates the average of a range",
              "Counts the number of cells in a range"
            ],
            correctAnswer: 0
          },
          {
            question: "How can you freeze panes in Excel?",
            options: [
              "View > Freeze Panes",
              "Data > Freeze Panes",
              "Home > Freeze Panes",
              "Insert > Freeze Panes"
            ],
            correctAnswer: 0
          },
          {
            question: "Which chart type is best for showing proportions?",
            options: [
              "Line Chart",
              "Bar Chart",
              "Pie Chart",
              "Scatter Plot"
            ],
            correctAnswer: 2
          },
          {
            question: "What is the purpose of conditional formatting?",
            options: [
              "To format cells based on their values",
              "To create charts",
              "To protect cells from editing",
              "To sort data"
            ],
            correctAnswer: 0
          },
          {
            question: "Which function would you use to count the number of cells that meet a specific condition?",
            options: [
              "COUNT()",
              "COUNTA()",
              "COUNTIF()",
              "SUMIF()"
            ],
            correctAnswer: 2
          },
          {
            question: "What is the maximum number of rows in an Excel worksheet?",
            options: [
              "65,536",
              "1,048,576",
              "1,000,000",
              "2,000,000"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of the following is NOT a data type in Excel?",
            options: [
              "Text",
              "Number",
              "Date",
              "Image"
            ],
            correctAnswer: 3
          },
          {
            question: "What does the CONCATENATE function do?",
            options: [
              "Joins two or more text strings together",
              "Calculates the sum of a range",
              "Finds the average of a range",
              "Counts the number of characters in a string"
            ],
            correctAnswer: 0
          },
          {
            question: "How can you create a drop-down list in Excel?",
            options: [
              "Data Validation",
              "Conditional Formatting",
              "Data Table",
              "Pivot Table"
            ],
            correctAnswer: 0
          },
          {
            question: "What is the purpose of the IF function?",
            options: [
              "To perform a logical test and return one value for TRUE and another for FALSE",
              "To sum a range of cells",
              "To find the maximum value in a range",
              "To count the number of cells"
            ],
            correctAnswer: 0
          },
          {
            question: "Which of the following is a way to protect a worksheet?",
            options: [
              "File > Protect Workbook",
              "Review > Protect Sheet",
              "Home > Protect Sheet",
              "Data > Protect Workbook"
            ],
            correctAnswer: 1
          },
          {
            question: "What is the shortcut to open the Format Cells dialog box?",
            options: [
              "Ctrl + 1",
              "Ctrl + Shift + 1",
              "Alt + F1",
              "Shift + F1"
            ],
            correctAnswer: 0
          },
          {
            question: "Which function would you use to find the average of a range of cells?",
            options: [
              "AVERAGE()",
              "AVG()",
              "MEAN()",
              "SUM()"
            ],
            correctAnswer: 0
          },
          {
            question: "What is the purpose of a Pivot Table?",
            options: [
              "To summarize and analyze data",
              "To create charts",
              "To format cells",
              "To protect data"
            ],
            correctAnswer: 0
          },
          {
            question: "How can you quickly sum a column of numbers in Excel?",
            options: [
              "Use the SUM function",
              "Use AutoSum",
              "Use the COUNT function",
              "Use the AVERAGE function"
            ],
            correctAnswer: 1
          },
          {
            question: "What does the PMT function calculate?",
            options: [
              "Loan payment",
              "Interest rate",
              "Total amount",
              "Future value"
            ],
            correctAnswer: 0
          },
          {
            question: "Which of the following is a valid Excel formula?",
            options: [
              "=A1 + B1",
              "A1 + B1",
              "=SUM(A1, B1)",
              "Both A and C"
            ],
            correctAnswer: 3
          }
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
          },
          {
            question: "What is the purpose of a measure in Power BI?",
            options: [
              "To store data",
              "To perform calculations on data",
              "To visualize data",
              "To clean data"
            ],
            correctAnswer: 1
          },
          {
            question: "Which visualization is best for showing the relationship between two variables?",
            options: [
              "Bar Chart",
              "Line Chart",
              "Scatter Plot",
              "Pie Chart"
            ],
            correctAnswer: 2
          },
          {
            question: "What does the DAX function CALCULATE() do?",
            options: [
              "Changes the context in which data is evaluated",
              "Creates a new table",
              "Filters data",
              "Aggregates data"
            ],
            correctAnswer: 0
          },
          {
            question: "Which of the following is NOT a type of visualization in Power BI?",
            options: [
              "Table",
              "Matrix",
              "Pie Chart",
              "Text Box"
            ],
            correctAnswer: 3
          },
          {
            question: "What is the purpose of the Power BI Service?",
            options: [
              "To create reports",
              "To publish and share reports",
              "To clean data",
              "To model data"
            ],
            correctAnswer: 1
          },
          {
            question: "Which feature allows you to create interactive reports in Power BI?",
            options: [
              "Slicers",
              "Filters",
              "Bookmarks",
              "All of the above"
            ],
            correctAnswer: 3
          },
          {
            question: "What is the purpose of a calculated column in Power BI?",
            options: [
              "To store static data",
              "To perform calculations on a row-by-row basis",
              "To aggregate data",
              "To filter data"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of the following is a valid DAX function?",
            options: [
              "SUMX()",
              "AVERAGEIF()",
              "COUNTIF()",
              "FILTER()"
            ],
            correctAnswer: 0
          },
          {
            question: "What is the purpose of the Power Query Editor?",
            options: [
              "To create visualizations",
              "To clean and transform data",
              "To write DAX formulas",
              "To publish reports"
            ],
            correctAnswer: 1
          },
          {
            question: "Which visualization is best for showing parts of a whole?",
            options: [
              "Line Chart",
              "Bar Chart",
              "Pie Chart",
              "Scatter Plot"
            ],
            correctAnswer: 2
          },
          {
            question: "What does the term 'data model' refer to in Power BI?",
            options: [
              "The structure of data in a report",
              "The visual layout of a report",
              "The calculations used in a report",
              "The data sources connected to Power BI"
            ],
            correctAnswer: 0
          },
          {
            question: "Which of the following is a benefit of using Power BI?",
            options: [
              "Real-time data analysis",
              "Complex programming required",
              "Limited data sources",
              "Static reports only"
            ],
            correctAnswer: 0
          },
          {
            question: "What is the purpose of a dashboard in Power BI?",
            options: [
              "To display a single report",
              "To provide a high-level view of key metrics",
              "To clean data",
              "To create new data sources"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of the following is a way to share Power BI reports?",
            options: [
              "Emailing the .pbix file",
              "Publishing to the Power BI Service",
              "Exporting to PDF",
              "All of the above"
            ],
            correctAnswer: 3
          },
          {
            question: "What is the purpose of the 'Get Data' feature in Power BI?",
            options: [
              "To import data from various sources",
              "To clean data",
              "To create visualizations",
              "To publish reports"
            ],
            correctAnswer: 0
          },
          {
            question: "Which of the following is a common data source for Power BI?",
            options: [
              "Excel",
              "SQL Server",
              "Web APIs",
              "All of the above"
            ],
            correctAnswer: 3
          },
          {
            question: "What is the purpose of the 'Publish to Web' feature in Power BI?",
            options: [
              "To share reports publicly on the internet",
              "To create a backup of reports",
              "To export reports to PDF",
              "To clean data"
            ],
            correctAnswer: 0
          },
        ],
      },
    ],
  },
  {
    id: "python-programming",
    title: "Python Programming",
    level: "Beginner to Advanced",
    image: "/path/to/python-image.jpg",
    description: "Master Python programming with our comprehensive course.",
    modules: [
      "Python Basics",
      "Data Structures",
      "Functions and OOP",
      "File Handling",
      "Libraries and Frameworks",
      "Error Handling",
    ],
    exams: [
      {
        id: 1,
        title: "Python Programming Fundamentals",
        questions: [
          {
            question: "You are given a list of numbers: [2, 4, 6, 8, 10]. You need to create a new list containing each number squared. Which Python code will achieve this?",
            options: [
              "new_list = [n ** 2 for n in numbers]",
              "new_list = map(lambda x: x ** 2, numbers)",
              "new_list = [n * n for n in numbers]",
              "Both A and B"
            ],
            correctAnswer: 3
          },
          {
            question: "You are tasked with writing a function that returns the factorial of a given number. Which Python code implements this correctly?",
            options: [
              "def factorial(n):\n    return 1 if n == 0 else n * factorial(n-1)",
              "def factorial(n):\n    return n * factorial(n-1)",
              "def factorial(n):\n    return 1 if n == 1 else n * factorial(n-1)",
              "def factorial(n):\n    return 0 if n == 0 else n * factorial(n-1)"
            ],
            correctAnswer: 0
          },
          {
            question: "You have a list of strings: ['apple', 'banana', 'cherry']. You want to create a new list containing only the strings that have more than 5 characters. Which Python code will achieve this?",
            options: [
              "long_words = [word for word in words if len(word) > 5]",
              "long_words = filter(lambda x: len(x) > 5, words)",
              "long_words = [word for word in words if word > 5]",
              "Both A and B"
            ],
            correctAnswer: 3
          },
          {
            question: "You have a dictionary of employees and their ages. You need to find the employee with the highest age. Which Python code will do this?",
            options: [
              "max(employees, key=employees.get)",
              "max(employees)",
              "min(employees)",
              "max(employees.values())"
            ],
            correctAnswer: 0
          },
          {
            question: "You want to find the median of a list of numbers [1, 3, 3, 6, 7, 8, 9]. Which Python code will calculate this correctly?",
            options: [
              "import statistics\nstatistics.median([1, 3, 3, 6, 7, 8, 9])",
              "sorted_list = sorted([1, 3, 3, 6, 7, 8, 9])\nmedian = sorted_list[len(sorted_list)//2]",
              "sorted_list = sorted([1, 3, 3, 6, 7, 8, 9])\nmedian = (sorted_list[3] + sorted_list[4]) / 2",
              "Both A and B"
            ],
            correctAnswer: 0
          },
          {
            question: "You need to remove all elements from a list except for the unique ones. Which Python code will accomplish this?",
            options: [
              "unique_list = list(set(my_list))",
              "unique_list = list(dict.fromkeys(my_list))",
              "unique_list = [x for x in my_list if my_list.count(x) == 1]",
              "All of the above"
            ],
            correctAnswer: 3
          },
          {
            question: "You are given a list of integers: [1, 2, 3, 4, 5]. You need to calculate the sum of these numbers. Which Python code will do this?",
            options: [
              "sum_of_numbers = sum(numbers)",
              "sum_of_numbers = reduce(lambda x, y: x + y, numbers)",
              "sum_of_numbers = 0\nfor num in numbers:\n    sum_of_numbers += num",
              "All of the above"
            ],
            correctAnswer: 3
          },
          {
            question: "You have a string 'hello world' and need to replace all occurrences of 'hello' with 'hi'. Which Python code will do this?",
            options: [
              "new_string = string.replace('hello', 'hi')",
              "new_string = string.replace('hi', 'hello')",
              "new_string = string.substitute('hello', 'hi')",
              "new_string = string.replace('hello', 'hi', 1)"
            ],
            correctAnswer: 0
          },
          {
            question: "You are given two lists: [1, 2, 3] and [4, 5, 6]. You need to combine these two lists into one. Which Python code will achieve this?",
            options: [
              "combined_list = list(zip(list1, list2))",
              "combined_list = list1 + list2",
              "combined_list = [x for x in list1, y in list2]",
              "combined_list = [list1, list2]"
            ],
            correctAnswer: 1
          },
          {
            question: "You need to find the most frequent element in a list: [1, 2, 3, 3, 2, 1, 2]. Which Python code will do this?",
            options: [
              "from collections import Counter\ncounter = Counter(my_list)\nmost_common = counter.most_common(1)",
              "most_common = max(set(my_list), key=my_list.count)",
              "Both A and B",
              "most_common = min(my_list)"
            ],
            correctAnswer: 2
          },
          {
            question: "You need to convert a list of integers [1, 2, 3] to a string where each element is separated by a comma. Which Python code will do this?",
            options: [
              "', '.join(map(str, my_list))",
              "', '.join(my_list)",
              "' '.join(my_list)",
              "', '.join(list(map(str, my_list)))"
            ],
            correctAnswer: 0
          },
          {
            question: "You need to create a dictionary with keys 'a', 'b', and 'c', and values 1, 2, and 3 respectively. Which Python code will do this?",
            options: [
              "my_dict = {'a': 1, 'b': 2, 'c': 3}",
              "my_dict = dict(a=1, b=2, c=3)",
              "my_dict = dict([('a', 1), ('b', 2), ('c', 3)])",
              "All of the above"
            ],
            correctAnswer: 3
          },
          {
            question: "You have a file data.txt that contains several lines of text. You need to read the content of the file and print each line. Which Python code will do this?",
            options: [
              "with open('data.txt', 'r') as file:\n    for line in file:\n        print(line)",
              "file = open('data.txt', 'r')\nfor line in file:\n    print(line)\nfile.close()",
              "Both A and B",
              "None of the above"
            ],
            correctAnswer: 0
          },
          {
            question: "You have a function that takes two arguments and returns their sum. Which code defines this function correctly?",
            options: [
              "def add(x, y):\n    return x + y",
              "def add(x, y):\n    return sum(x, y)",
              "def add(x, y):\n    return x * y",
              "def add(x, y):\n    return x + y + 1"
            ],
            correctAnswer: 0
          },
          {
            question: "You want to filter a list of numbers [1, 2, 3, 4, 5, 6] to include only even numbers. Which Python code will do this?",
            options: [
              "even_numbers = [n for n in numbers if n % 2 == 0]",
              "even_numbers = filter(lambda x: x % 2 == 0, numbers)",
              "even_numbers = [n if n % 2 == 0 else None for n in numbers]",
              "Both A and B"
            ],
            correctAnswer: 3
          },
          {
            question: "You need to reverse a string 'hello'. Which Python code will do this?",
            options: [
              "reversed_string = ''.join(reversed('hello'))",
              "reversed_string = 'hello'.reverse()",
              "reversed_string = 'hello'[::-1]",
              "Both A and C"
            ],
            correctAnswer: 3
          },
          {
            question: "You have a list of integers: [10, 20, 30, 40]. You need to find the minimum value in the list. Which Python code will do this?",
            options: [
              "min_value = min(numbers)",
              "min_value = numbers[0]",
              "min_value = numbers.sort()[0]",
              "min_value = sorted(numbers)[0]"
            ],
            correctAnswer: 0
          },
          {
            question: "You want to check if a key exists in a dictionary my_dict = {'a': 1, 'b': 2}. Which Python code will do this?",
            options: [
              "'a' in my_dict",
              "my_dict.contains('a')",
              "my_dict.has_key('a')",
              "my_dict.exists('a')"
            ],
            correctAnswer: 0
          },
          {
            question: "You need to create a list of even numbers from 1 to 10. Which Python code will do this?",
            options: [
              "even_numbers = [i for i in range(1, 11) if i % 2 == 0]",
              "even_numbers = filter(lambda x: x % 2 == 0, range(1, 11))",
              "Both A and B",
              "None of the above"
            ],
            correctAnswer: 2
          },
          {
            question: "You want to convert a string '123' to an integer. Which Python code will do this?",
            options: [
              "int('123')",
              "float('123')",
              "str(123)",
              "convert('123')"
            ],
            correctAnswer: 0
          }
        ]
      }
    ]
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
