import courseImg1 from "./assets/courseimg1.png";
import courseImg2 from "./assets/courseimg2.png";
import courseImg3 from "./assets/courseimg3.png";
import testingVideo from "./assets/videos/testing.mp4";

export const courseData = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    level: "Beginner to Advanced",
    image: courseImg1,
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
      "SQL Basics",
      "Introduction to SQL",
      "Data Types and Operators",
      "Data Manipulation",
      "Joins and Subqueries",
      "Advanced SQL Concepts",
    ],
    exams: [
      {
        id: 1,
        title: "SQL Basics - intermediate",
        questions: [
          {
            question: "Scenario: You are analyzing an Orders table containing OrderID, CustomerID, and OrderDate. You want to find the total number of orders placed by each customer.",
            options: [
              "\nSELECT CustomerID, COUNT(OrderID)\nFROM Orders;",
              "\nSELECT CustomerID, COUNT(OrderID)\nFROM Orders\nGROUP BY CustomerID;",
              "\nSELECT COUNT(OrderID)\nFROM Orders\nGROUP BY CustomerID;",
              "\nSELECT DISTINCT CustomerID, COUNT(OrderID)\nFROM Orders;"
            ],
            correctAnswer: 1,
            category: "Aggregation"
          },
          {
            question: "Scenario: You have a table named Sales with columns Region and Revenue. You want to filter records where the revenue is greater than $10,000.",
            options: [
              "\nSELECT *\nFROM Sales\nWHERE Revenue >= 10000;",
              "\nSELECT *\nFROM Sales\nWHERE Revenue > 10000;",
              "\nSELECT *\nFROM Sales\nHAVING Revenue > 10000;",
              "\nSELECT *\nFROM Sales\nWHERE Revenue = 10000;"
            ],
            correctAnswer: 1,
            category: "Filtering"
          },
          {
            question: "Scenario: You are tasked with finding duplicate entries in a Customers table based on the Email column.",
            options: [
              "\nSELECT Email\nFROM Customers\nWHERE COUNT(*) > 1;",
              "\nSELECT Email, COUNT(*)\nFROM Customers\nGROUP BY Email\nHAVING COUNT(*) > 1;",
              "\nSELECT DISTINCT Email\nFROM Customers;",
              "\nSELECT Email\nFROM Customers\nGROUP BY Email;"
            ],
            correctAnswer: 1,
            category: "Data Quality"
          },
          {
            question: "Scenario: You have two tables: Employees with columns EmployeeID and DepartmentID, and Departments with columns DepartmentID and DepartmentName. You want to display each employee's department name.",
            options: [
              "\nSELECT *\nFROM Employees;",
              "\nSELECT EmployeeID, DepartmentName\nFROM Employees;",
              "\nSELECT EmployeeID, DepartmentName\nFROM Employees\nJOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;",
              "\nSELECT EmployeeID, DepartmentID\nFROM Employees;"
            ],
            correctAnswer: 2,
            category: "Joins"
          },
          {
            question: "Scenario: You want to find the average order value from the Orders table, which has a column OrderAmount.",
            options: [
              "\nSELECT SUM(OrderAmount)\nFROM Orders;",
              "\nSELECT AVG(OrderAmount)\nFROM Orders;",
              "\nSELECT COUNT(OrderAmount)\nFROM Orders;",
              "\nSELECT MAX(OrderAmount)\nFROM Orders;"
            ],
            correctAnswer: 1,
            category: "Aggregation"
          },
          {
            question: "Scenario: You need to fetch the names of employees who earn more than the average salary in an Employees table.",
            options: [
              "\nSELECT Name\nFROM Employees\nWHERE Salary > AVG(Salary);",
              "\nSELECT Name\nFROM Employees\nHAVING Salary > AVG(Salary);",
              "\nSELECT Name\nFROM Employees\nWHERE Salary > (SELECT AVG(Salary) FROM Employees);",
              "\nSELECT Name\nFROM Employees\nGROUP BY Salary > AVG(Salary);"
            ],
            correctAnswer: 2,
            category: "Subqueries"
          },
          {
            question: "Scenario: You are tasked with creating a new column in a query that calculates the profit as Revenue - Cost from a Sales table.",
            options: [
              "\nSELECT Revenue, Cost, Revenue - Cost\nFROM Sales;",
              "\nSELECT Revenue, Cost, Profit\nFROM Sales;",
              "\nSELECT Revenue, Cost, Revenue + Cost AS Profit\nFROM Sales;",
              "\nSELECT Revenue, Cost, (Revenue - Cost) AS Profit\nFROM Sales;"
            ],
            correctAnswer: 3,
            category: "Calculated Columns"
          },
          {
            question: "Scenario: You have a Products table and want to display all rows, sorted by Price in descending order.",
            options: [
              "\nSELECT *\nFROM Products\nORDER BY Price ASC;",
              "\nSELECT *\nFROM Products\nORDER BY Price;",
              "\nSELECT *\nFROM Products\nORDER BY Price DESC;",
              "\nSELECT *\nFROM Products\nWHERE Price DESC;"
            ],
            correctAnswer: 2,
            category: "Sorting"
          },
          {
            question: "Scenario: You need to calculate the total revenue for each region, and only include regions with a total revenue greater than $50,000.",
            options: [
              "\nSELECT Region, SUM(Revenue)\nFROM Sales\nGROUP BY Region\nWHERE SUM(Revenue) > 50000;",
              "\nSELECT Region, SUM(Revenue)\nFROM Sales\nHAVING SUM(Revenue) > 50000;",
              "\nSELECT Region, SUM(Revenue)\nFROM Sales\nGROUP BY Region\nHAVING SUM(Revenue) > 50000;",
              "\nSELECT Region\nFROM Sales\nWHERE Revenue > 50000;"
            ],
            correctAnswer: 2,
            category: "Aggregation with Filtering"
          },
          {
            question: "Scenario: You want to display records from the Customers table where the City is either 'New York' or 'Chicago'.",
            options: [
              "\nSELECT *\nFROM Customers\nWHERE City IN ('New York', 'Chicago');",
              "\nSELECT *\nFROM Customers\nWHERE City = 'New York' OR 'Chicago';",
              "\nSELECT *\nFROM Customers\nWHERE City = 'New York' AND City = 'Chicago';",
              "\nSELECT *\nFROM Customers\nHAVING City IN ('New York', 'Chicago');"
            ],
            correctAnswer: 0,
            category: "Filtering"
          },
          {
            question: "Scenario: Your database includes an Orders table with columns OrderID, CustomerID, and OrderDate. You want to fetch the most recent order date.",
            options: [
              "\nSELECT MIN(OrderDate)\nFROM Orders;",
              "\nSELECT MAX(OrderDate)\nFROM Orders;",
              "\nSELECT OrderDate\nFROM Orders\nORDER BY OrderDate DESC;",
              "\nSELECT MAX(OrderDate)\nFROM Orders\nGROUP BY OrderDate;"
            ],
            correctAnswer: 1,
            category: "Aggregation"
          },
          {
            question: "Scenario: You have a Products table with columns ProductID, ProductName, and Category. You want to find the number of products in each category.",
            options: [
              "\nSELECT Category, COUNT(ProductID)\nFROM Products;",
              "\nSELECT Category, COUNT(ProductID)\nFROM Products\nGROUP BY Category;",
              "\nSELECT COUNT(ProductID)\nFROM Products\nWHERE Category;",
              "\nSELECT Category, COUNT(*)\nFROM Products;"
            ],
            correctAnswer: 1,
            category: "Aggregation"
          },
          {
            question: "Scenario: You are tasked with updating the Status column in an Orders table to 'Completed' for all orders where the OrderDate is before '2023-01-01'.",
            options: [
              "\nUPDATE Orders\nSET Status = 'Completed'\nWHERE OrderDate < '2023-01-01';",
              "\nSELECT Status = 'Completed'\nWHERE OrderDate < '2023-01-01';",
              "\nUPDATE Orders\nWHERE OrderDate < '2023-01-01'\nSET Status = 'Completed';",
              "\nUPDATE Orders\nSET Status = 'Completed';"
            ],
            correctAnswer: 0,
            category: "Data Manipulation"
          },
          {
            question: "Scenario: You want to create a new table called ArchivedOrders by copying all the data from the Orders table.",
            options: [
              "\nCOPY Orders TO ArchivedOrders;",
              "\nCREATE TABLE ArchivedOrders\nAS SELECT * FROM Orders;",
              "\nINSERT INTO ArchivedOrders\nSELECT * FROM Orders;",
              "\nCREATE TABLE ArchivedOrders LIKE Orders;"
            ],
            correctAnswer: 1,
            category: "Data Definition"
          },
          {
            question: "Scenario: You want to combine rows from two tables, Sales2023 and Sales2024, into a single result set.",
            options: [
              "\nSELECT *\nFROM Sales2023\nUNION ALL\nSELECT *\nFROM Sales2024;",
              "\nSELECT *\nFROM Sales2023\nJOIN Sales2024;",
              "\nSELECT *\nFROM Sales2023, Sales2024;",
              "\nSELECT *\nFROM Sales2023\nUNION\nSELECT *\nFROM Sales2024;"
            ],
            correctAnswer: 3,
            category: "Set Operations"
          },
          {
            question: "Scenario: Your company wants to rank products based on their profit margins within each category to determine which products perform best. Which query ranks products by profit margin in each category and displays the top 2 products per category?",
            options: [
              "\nSELECT Category, ProductName, Profit,\n  RANK() OVER (PARTITION BY Category ORDER BY Profit DESC) AS Rank\nFROM Products\nWHERE Rank <= 2;",
              "\nSELECT Category, ProductName, Profit\nFROM (\n    SELECT Category, ProductName, Profit,\n           ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Profit DESC) AS Rank\n    FROM Products\n) SubQuery\nWHERE Rank <= 2;",
              "\nSELECT Category, ProductName, Profit\nFROM Products\nWHERE ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Profit DESC) <= 2;",
              "\nSELECT Category, ProductName, Profit,\n  DENSE_RANK() OVER (PARTITION BY Category ORDER BY Profit DESC) AS Rank\nFROM Products\nWHERE Rank <= 2;"
            ],
            correctAnswer: 1,
            category: "Window Functions",
            difficulty: "Advanced",
            explanation: "Option B is correct because window functions cannot be used directly in WHERE clauses. The subquery approach allows us to first calculate the ranks and then filter based on them."
          },
          {
            question: "Scenario: You're tasked with calculating the customer retention rate by determining how many customers placed orders in both January and February 2023. Which query would correctly return customers who placed orders in both months?",
            options: [
              "\nSELECT DISTINCT CustomerID\nFROM Orders\nWHERE MONTH(OrderDate) = 1 AND MONTH(OrderDate) = 2;",
              "\nSELECT CustomerID\nFROM Orders\nWHERE MONTH(OrderDate) IN (1, 2)\nGROUP BY CustomerID\nHAVING COUNT(DISTINCT MONTH(OrderDate)) = 2;",
              "\nSELECT CustomerID\nFROM Orders\nWHERE MONTH(OrderDate) BETWEEN 1 AND 2\nGROUP BY CustomerID\nHAVING COUNT(*) > 1;",
              "\nSELECT CustomerID\nFROM Orders\nWHERE MONTH(OrderDate) IN (1, 2)\nGROUP BY CustomerID\nHAVING COUNT(*) = 2;"
            ],
            correctAnswer: 1,
            category: "Data Analysis",
            difficulty: "Intermediate",
            explanation: "Option B correctly identifies customers who placed orders in both months by counting distinct months for each customer."
          },
          {
            question: "Scenario: A logistics company wants to identify days with no recorded orders in 2023. Which query will correctly find missing dates from the Orders table?",
            options: [
              "\nSELECT OrderDate\nFROM Calendar\nWHERE OrderDate NOT IN (SELECT DISTINCT OrderDate FROM Orders);",
              "\nSELECT Calendar.Date\nFROM Calendar\nLEFT JOIN Orders ON Calendar.Date = Orders.OrderDate\nWHERE Orders.OrderDate IS NULL;",
              "\nSELECT Calendar.Date\nFROM Calendar\nWHERE Calendar.Date NOT EXISTS (SELECT OrderDate FROM Orders);",
              "\nSELECT Calendar.Date\nFROM Calendar\nFULL OUTER JOIN Orders ON Calendar.Date = Orders.OrderDate\nWHERE Orders.OrderDate IS NULL;"
            ],
            correctAnswer: 1,
            category: "Joins",
            difficulty: "Intermediate",
            explanation: "Option B uses a LEFT JOIN to find dates in the Calendar table that don't have corresponding entries in the Orders table."
          },
          {
            question: "Scenario: Your manager suspects a revenue drop on certain dates and wants to identify days where total revenue was less than 10% of the average daily revenue for the last year. Which query will correctly detect these anomalous dates?",
            options: [
              "\nWITH AvgRevenue AS (\n    SELECT AVG(SUM(Sales)) AS AvgDailyRevenue\n    FROM Orders\n    GROUP BY OrderDate\n)\nSELECT OrderDate, SUM(Sales) AS DailyRevenue\nFROM Orders\nGROUP BY OrderDate\nHAVING SUM(Sales) < 0.1 * (SELECT AvgDailyRevenue FROM AvgRevenue);",
              "\nWITH AvgRevenue AS (\n    SELECT AVG(DailyRevenue) AS AvgDailyRevenue\n    FROM (SELECT OrderDate, SUM(Sales) AS DailyRevenue\n          FROM Orders\n          GROUP BY OrderDate) SubQuery\n)\nSELECT OrderDate, SUM(Sales) AS DailyRevenue\nFROM Orders\nGROUP BY OrderDate\nHAVING SUM(Sales) < 0.1 * AvgDailyRevenue;",
              "\nWITH AvgRevenue AS (\n    SELECT AVG(SUM(Sales)) AS AvgDailyRevenue\n    FROM Orders\n)\nSELECT OrderDate, SUM(Sales) AS DailyRevenue\nFROM Orders\nGROUP BY OrderDate\nHAVING SUM(Sales) < 0.1 * AvgDailyRevenue;",
              "\nWITH AvgRevenue AS (\n    SELECT AVG(DailyRevenue) AS AvgDailyRevenue\n    FROM (SELECT OrderDate, SUM(Sales) AS DailyRevenue\n          FROM Orders\n          GROUP BY OrderDate) SubQuery\n)\nSELECT OrderDate, DailyRevenue\nFROM (SELECT OrderDate, SUM(Sales) AS DailyRevenue\n      FROM Orders\n      GROUP BY OrderDate) SubQuery\nWHERE DailyRevenue < 0.1 * (SELECT AvgDailyRevenue FROM AvgRevenue);"
            ],
            correctAnswer: 3,
            category: "CTEs and Complex Analysis",
            difficulty: "Advanced",
            explanation: "Option D correctly calculates the average daily revenue first, then compares each day's revenue against this benchmark."
          },
          {
            question: "Scenario: Your table contains duplicate rows. You are tasked with removing them using ROW_NUMBER(). Which query will correctly delete duplicates while retaining the first occurrence of each row?",
            options: [
              "\nWITH CTE AS (\n    SELECT *, ROW_NUMBER() OVER (PARTITION BY Column1, Column2 ORDER BY ID) AS RowNum\n    FROM TableName\n)\nDELETE FROM CTE\nWHERE RowNum > 1;",
              "\nWITH CTE AS (\n    SELECT *, ROW_NUMBER() OVER (PARTITION BY Column1, Column2 ORDER BY ID) AS RowNum\n    FROM TableName\n)\nDELETE FROM TableName\nWHERE RowNum > 1;",
              "\nWITH CTE AS (\n    SELECT *, ROW_NUMBER() OVER (PARTITION BY Column1, Column2 ORDER BY ID) AS RowNum\n    FROM TableName\n)\nDELETE\nFROM TableName\nWHERE ID IN (SELECT ID FROM CTE WHERE RowNum > 1);",
              "\nWITH CTE AS (\n    SELECT *, ROW_NUMBER() OVER (PARTITION BY Column1, Column2 ORDER BY ID) AS RowNum\n    FROM TableName\n)\nDELETE FROM TableName\nWHERE EXISTS (SELECT 1 FROM CTE WHERE RowNum > 1);"
            ],
            correctAnswer: 2,
            category: "Data Manipulation",
            difficulty: "Advanced",
            explanation: "Option C correctly identifies and removes duplicate rows while keeping the first occurrence by using ROW_NUMBER() in a CTE and then deleting rows with higher row numbers."
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
            question: "Scenario: You are analyzing sales data and want to calculate the total sales for each region. Sales data includes columns for Region and Sales. Which feature will you use?",
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
            question: "Scenario: You want to count how many times a specific product appears in a column. Which formula will you use?",
            options: [
              "=COUNTIF(Range, \"Product Name\")",
              "=COUNTIF(\"Product Name\", Range)",
              "=COUNT(Range, \"Product Name\")",
              "=IF(COUNT(Range))"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You need to extract the year from a Date column in Excel. Which formula will you use?",
            options: [
              "=YEAR(Date)",
              "=TEXT(Date, \"YYYY\")",
              "=DATEVALUE(Date)",
              "=EXTRACT(Date, \"Year\")"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You have a dataset with duplicate customer entries and want to remove duplicates while keeping the first occurrence. Which Excel feature will you use?",
            options: [
              "Conditional Formatting",
              "Remove Duplicates",
              "Sort and Filter",
              "Data Validation"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You need to display the sales totals from one sheet on another sheet, but only if the sales region matches a specific value. Which function will you use?",
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
            question: "Scenario: You are working with a dataset containing sales transactions. You need to create a measure that calculates the total sales amount for each region. Which DAX formula will you use?",
            options: [
              "Total Sales = SUM(Sales[Amount])",
              "Total Sales = SUMX(Sales, Sales[Amount])",
              "Total Sales = CALCULATE(SUM(Sales[Amount]))",
              "Total Sales = SUM(Sales[Amount]) BY Region"
            ],
            correctAnswer: 2
          },
          {
            question: "Scenario: You have a table with Product, SalesAmount, and SalesDate. You need to create a visual showing monthly sales trends. Which visualization type would you choose?",
            options: [
              "Column Chart",
              "Line Chart",
              "Pie Chart",
              "Matrix"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You want to create a report that only shows data for the last 30 days from the Sales table, which includes a column SalesDate. Which DAX formula will you use to filter the data?",
            options: [
              "FILTER(Sales, Sales[SalesDate] > TODAY() - 30)",
              "CALCULATE(Sales, Sales[SalesDate] > TODAY() - 30)",
              "DATEADD(Sales[SalesDate], -30, DAY)",
              "FILTER(Sales, DATEDIFF(Sales[SalesDate], TODAY(), DAY) <= 30)"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You need to create a calculated column in Power BI that determines if the SalesAmount is above the average sales amount. Which DAX formula will you use?",
            options: [
              "IF(Sales[SalesAmount] > AVERAGE(Sales[SalesAmount]), \"Above Average\", \"Below Average\")",
              "IF(Sales[SalesAmount] > MAX(Sales[SalesAmount]), \"Above Average\", \"Below Average\")",
              "IF(AVERAGE(Sales[SalesAmount]) > Sales[SalesAmount], \"Above Average\", \"Below Average\")",
              "IF(Sales[SalesAmount] < AVERAGE(Sales[SalesAmount]), \"Above Average\", \"Below Average\")"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You need to create a relationship between two tables in Power BI. The Sales table has a CustomerID column, and the Customers table has a CustomerID column. Which type of relationship will you create?",
            options: [
              "One-to-One",
              "One-to-Many",
              "Many-to-One",
              "Many-to-Many"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You want to calculate the percentage of total sales for each product in Power BI. Which DAX formula will you use?",
            options: [
              "Product Sales % = SUM(Sales[Amount]) / SUM(Sales[Amount])",
              "Product Sales % = DIVIDE(SUM(Sales[Amount]), CALCULATE(SUM(Sales[Amount])))",
              "Product Sales % = SUM(Sales[Amount]) * 100 / SUM(Sales[Amount])",
              "Product Sales % = SUM(Sales[Amount]) * 100 / SUM(Sales[Amount]) OVERALL"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You need to create a table that shows Product, SalesAmount, and SalesDate, but the sales table contains duplicate records. Which Power BI feature will you use to remove duplicates?",
            options: [
              "Merge Queries",
              "Remove Duplicates in the Query Editor",
              "Remove Duplicates in the Data View",
              "Remove Duplicates in the Report View"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You want to create a measure that calculates the year-over-year growth in sales. Which DAX formula will you use?",
            options: [
              "YoY Sales = SUM(Sales[Amount]) - SUM(Sales[Amount]) PREVIOUSYEAR(Sales[SalesDate])",
              "YoY Sales = SUM(Sales[Amount]) - CALCULATE(SUM(Sales[Amount]), SAMEPERIODLASTYEAR(Sales[SalesDate]))",
              "YoY Sales = SUM(Sales[Amount]) / SAMEPERIODLASTYEAR(Sales[SalesDate])",
              "YoY Sales = CALCULATE(SUM(Sales[Amount]), YEAR(Sales[SalesDate]) = YEAR(TODAY()) - 1)"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You need to create a slicer in Power BI that filters data by Region. Which field should you place in the slicer?",
            options: [
              "Region",
              "SalesAmount",
              "Date",
              "CustomerID"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You want to create a matrix visual to display sales by Product and Region. Which type of Power BI visual should you use?",
            options: [
              "Table",
              "Matrix",
              "Clustered Column Chart",
              "Card"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You have a report that includes a Sales table and a Products table. You want to show the total sales for each product in a bar chart. Which type of relationship should you use between the two tables?",
            options: [
              "One-to-One",
              "One-to-Many",
              "Many-to-One",
              "Many-to-Many"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You need to create a calculated column that extracts the year from the SalesDate column in the Sales table. Which DAX formula will you use?",
            options: [
              "Year = YEAR(Sales[SalesDate])",
              "Year = DATEPART(\"YEAR\", Sales[SalesDate])",
              "Year = EXTRACT(Sales[SalesDate], YEAR)",
              "Year = SALES[SalesDate].[Year]"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You need to show sales growth compared to last year. Which visualization is best suited for this?",
            options: [
              "Line Chart",
              "KPI Visual",
              "Column Chart",
              "Combo Chart"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You need to filter the data for the current year in a Sales table using a DAX formula. Which DAX formula will you use?",
            options: [
              "FILTER(Sales, YEAR(Sales[SalesDate]) = YEAR(TODAY()))",
              "CALCULATE(SUM(Sales[Amount]), YEAR(Sales[SalesDate]) = YEAR(TODAY()))",
              "FILTER(Sales, Sales[SalesDate] = TODAY())",
              "FILTER(Sales, YEAR(Sales[SalesDate]) = YEAR(TODAY()) - 1)"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You want to highlight cells in a table where SalesAmount exceeds $100,000. Which Power BI feature should you use?",
            options: [
              "Conditional Formatting",
              "Data Labels",
              "Data Colors",
              "Formatting by Theme"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You are working with a sales dataset and want to visualize the top 5 products by revenue. Which DAX function can you use to rank the products?",
            options: [
              "RANKX()",
              "RANK()",
              "TOPN()",
              "DENSE_RANK()"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You need to filter out records where SalesAmount is negative in Power BI. Which option will you use in the Query Editor?",
            options: [
              "Remove Rows",
              "Filter Rows",
              "Replace Values",
              "Remove Columns"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You need to display the total sales for the top 10 performing products in a Product and Sales dataset. Which Power BI feature would you use?",
            options: [
              "TOPN function in DAX",
              "Power Query Editor",
              "Rank column",
              "Filter pane"
            ],
            correctAnswer: 0
          },
          {
            question: "Scenario: You want to create a drill-through report that allows users to right-click on a product and see detailed sales information for that product. What should you configure?",
            options: [
              "Page-level filters",
              "Drill-through filters",
              "Slicer",
              "Conditional formatting"
            ],
            correctAnswer: 1
          },
          {
            question: "Scenario: You need to create a report that includes both a bar chart for sales by region and a line chart showing sales trends over time. Which visual combination should you use?",
            options: [
              "Combo Chart",
              "Line and Clustered Column Chart",
              "KPI and Bar Chart",
              "Stacked Area Chart"
            ],
            correctAnswer: 0
          }
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
