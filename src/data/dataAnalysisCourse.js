import testVideo from '../assets/videos/testing.mp4';

export const dataAnalysisContent = {
  title: "Data Analysis Course",
  weeks: [
    {
      title: "Week 1;Introduction to Data Analysis",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Understanding Data Analysis Fundamentals",
          duration: "30 mins",
          id: "da-1-1",
          content: {
            video: testVideo,
            description: "Introduction to basic concepts of data analysis",
            materials: ["Data Analysis Basics PDF", "Introduction Slides"]
          }
        },
        {
          name: "Types of Data and Data Sources",
          duration: "25 mins",
          id: "da-1-2",
          content: {
            video: testVideo,
            description: "Learn about different types of data and their sources",
            materials: ["Data Types Guide", "Source Examples"]
          }
        },
        {
          name: "Data Collection Methods",
          duration: "35 mins",
          id: "da-1-3",
          content: {
            video: testVideo,
            description: "Understanding various methods of data collection",
            materials: ["Collection Methods PDF", "Practice Worksheet"]
          }
        },
        {
          name: "Data Quality and Preparation",
          duration: "30 mins",
          id: "da-1-4",
          content: {
            video: testVideo,
            description: "Ensuring data quality and preparing data for analysis",
            materials: ["Quality Checklist", "Preparation Guide"]
          }
        }
      ],
      assessment: {
        name: "Week 1 Assessment",
        duration: "N/A",
        id: "da-1-assessment",
        isAssignment: true,
        content: {
          isAssignment: true,
          questions: [
            {
              text: "What is the primary purpose of data analysis?",
              options: [
                "To create visually appealing charts",
                "To extract meaningful insights from data",
                "To collect as much data as possible",
                "To store data securely"
              ]
            },
            {
              text: "Which of the following is NOT a type of data?",
              options: [
                "Quantitative data",
                "Qualitative data",
                "Imaginative data",
                "Categorical data"
              ]
            },
            {
              text: "What is the first step in the data analysis process?",
              options: [
                "Data visualization",
                "Data interpretation",
                "Data collection",
                "Data presentation"
              ]
            },
            {
              text: "Which of these is an example of structured data?",
              options: [
                "Database tables",
                "Social media posts",
                "Email messages",
                "Audio recordings"
              ]
            },
            {
              text: "What does data cleaning involve?",
              options: [
                "Deleting all data",
                "Identifying and correcting errors in data",
                "Encrypting data",
                "Compressing data files"
              ]
            },
            {
              text: "Which sampling method involves dividing the population into subgroups?",
              options: [
                "Simple random sampling",
                "Systematic sampling",
                "Stratified sampling",
                "Convenience sampling"
              ]
            },
            {
              text: "What is data integrity?",
              options: [
                "The accuracy and consistency of data",
                "The size of the dataset",
                "The speed of data processing",
                "The visual presentation of data"
              ]
            },
            {
              text: "Which of these is NOT a common data collection method?",
              options: [
                "Surveys",
                "Interviews",
                "Telepathy",
                "Observations"
              ]
            }
          ]
        }
      }
    },
    {
      title: "Week 2;Data Analysis Tools",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Introduction to Excel for Data Analysis",
          duration: "35 mins",
          id: "da-2-1",
          content: {
            video: testVideo,
            description: "Getting started with Excel for data analysis",
            materials: ["Excel Basics Guide", "Practice Workbook"]
          }
        },
        {
          name: "Advanced Excel Functions",
          duration: "40 mins",
          id: "da-2-2",
          content: {
            video: testVideo,
            description: "Learning advanced Excel functions for data analysis",
            materials: ["Functions Guide", "Exercise Files"]
          }
        },
        {
          name: "Pivot Tables and Data Visualization",
          duration: "35 mins",
          id: "da-2-3",
          content: {
            video: testVideo,
            description: "Creating pivot tables and visualizing data in Excel",
            materials: ["Pivot Table Guide", "Visualization Examples"]
          }
        },
        {
          name: "Introduction to SQL",
          duration: "40 mins",
          id: "da-2-4",
          content: {
            video: testVideo,
            description: "Basic SQL queries for data analysis",
            materials: ["SQL Basics PDF", "Practice Database"]
          }
        }
      ],
      assessment: {
        name: "Week 2 Assessment",
        duration: "N/A",
        id: "da-2-assessment",
        isAssignment: true,
        content: {
          isAssignment: true,
          questions: [
            {
              text: "Which Excel function would you use to find the middle value in a range of numbers?",
              options: [
                "AVERAGE",
                "MEDIAN",
                "MODE",
                "MIDDLE"
              ]
            },
            {
              text: "What is the primary purpose of a pivot table in Excel?",
              options: [
                "To format cells",
                "To create charts",
                "To summarize and analyze data",
                "To import external data"
              ]
            },
            {
              text: "Which SQL statement is used to retrieve data from a database?",
              options: [
                "UPDATE",
                "INSERT",
                "SELECT",
                "DELETE"
              ]
            },
            {
              text: "What does VLOOKUP function do in Excel?",
              options: [
                "Searches for a value in the leftmost column",
                "Searches for a value in the rightmost column",
                "Searches for a value in any column",
                "Searches for a value in the top row"
              ]
            },
            {
              text: "Which of these is NOT a chart type available in Excel?",
              options: [
                "Pie chart",
                "Bar chart",
                "Neural network chart",
                "Scatter plot"
              ]
            },
            {
              text: "What is the purpose of the WHERE clause in SQL?",
              options: [
                "To specify which table to query",
                "To sort the results",
                "To filter the results",
                "To join tables"
              ]
            },
            {
              text: "Which Excel function would you use to count cells that meet specific criteria?",
              options: [
                "SUM",
                "COUNT",
                "COUNTIF",
                "AVERAGE"
              ]
            },
            {
              text: "What does SQL stand for?",
              options: [
                "Structured Query Language",
                "Simple Question Language",
                "System Quality Language",
                "Standard Query Logic"
              ]
            }
          ]
        }
      }
    },
    {
      title: "Week 3;Statistical Analysis",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Basic Statistics Concepts",
          duration: "35 mins",
          id: "da-3-1",
          content: {
            video: testVideo,
            description: "Understanding fundamental statistical concepts",
            materials: ["Statistics Guide", "Practice Problems"]
          }
        },
        {
          name: "Descriptive Statistics",
          duration: "30 mins",
          id: "da-3-2",
          content: {
            video: testVideo,
            description: "Learning about measures of central tendency and dispersion",
            materials: ["Descriptive Stats PDF", "Exercise Sheet"]
          }
        },
        {
          name: "Inferential Statistics",
          duration: "40 mins",
          id: "da-3-3",
          content: {
            video: testVideo,
            description: "Introduction to inferential statistics and hypothesis testing",
            materials: ["Inferential Stats Guide", "Case Studies"]
          }
        },
        {
          name: "Correlation and Regression",
          duration: "35 mins",
          id: "da-3-4",
          content: {
            video: testVideo,
            description: "Understanding relationships between variables",
            materials: ["Correlation Guide", "Regression Examples"]
          }
        }
      ],
      assessment: {
        name: "Week 3 Assessment",
        duration: "N/A",
        id: "da-3-assessment",
        isAssignment: true,
        content: {
          isAssignment: true,
          questions: [
            {
              text: "What is the mean of the following data set: 2, 4, 6, 8, 10?",
              options: [
                "4",
                "5",
                "6",
                "7"
              ]
            },
            {
              text: "Which measure of central tendency is most affected by outliers?",
              options: [
                "Mean",
                "Median",
                "Mode",
                "Range"
              ]
            },
            {
              text: "What does standard deviation measure?",
              options: [
                "Central tendency",
                "Dispersion or spread of data",
                "Correlation between variables",
                "Data accuracy"
              ]
            },
            {
              text: "What is a null hypothesis?",
              options: [
                "A hypothesis that is always true",
                "A hypothesis that is always false",
                "A statement of no effect or no difference",
                "A statement that proves causation"
              ]
            },
            {
              text: "What does a correlation coefficient of +1 indicate?",
              options: [
                "No correlation",
                "Perfect positive correlation",
                "Perfect negative correlation",
                "Weak correlation"
              ]
            },
            {
              text: "Which statistical test would you use to compare means between two independent groups?",
              options: [
                "Chi-square test",
                "Correlation analysis",
                "t-test",
                "ANOVA"
              ]
            },
            {
              text: "What is the purpose of regression analysis?",
              options: [
                "To determine if data is normally distributed",
                "To predict values of one variable based on another",
                "To calculate the mean of a dataset",
                "To identify outliers"
              ]
            },
            {
              text: "What is the difference between population and sample?",
              options: [
                "There is no difference",
                "A sample is a subset of a population",
                "A population is a subset of a sample",
                "They are completely unrelated concepts"
              ]
            }
          ]
        }
      }
    },
    {
      title: "Week 4;Data Mining and Predictive Analytics",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Data Mining Techniques",
          duration: "40 mins",
          id: "da-4-1",
          content: {
            video: testVideo,
            description: "Introduction to data mining and its applications",
            materials: ["Data Mining Guide", "Case Studies"]
          }
        },
        {
          name: "Predictive Analytics",
          duration: "35 mins",
          id: "da-4-2",
          content: {
            video: testVideo,
            description: "Understanding predictive modeling and forecasting",
            materials: ["Predictive Analytics PDF", "Practice Dataset"]
          }
        },
        {
          name: "Machine Learning Basics",
          duration: "45 mins",
          id: "da-4-3",
          content: {
            video: testVideo,
            description: "Introduction to machine learning for data analysis",
            materials: ["ML Basics Guide", "Algorithm Examples"]
          }
        },
        {
          name: "Clustering and Classification",
          duration: "30 mins",
          id: "da-4-4",
          content: {
            video: testVideo,
            description: "Understanding clustering and classification techniques",
            materials: ["Clustering Guide", "Classification Examples"]
          }
        }
      ],
      assessment: {
        name: "Week 4 Assessment",
        duration: "N/A",
        id: "da-4-assessment",
        isAssignment: true,
        content: {
          isAssignment: true,
          questions: [
            {
              text: "What is data mining?",
              options: [
                "The process of extracting valuable insights from data",
                "The process of collecting data",
                "The process of storing data",
                "The process of deleting data"
              ]
            },
            {
              text: "Which of these is NOT a common data mining technique?",
              options: [
                "Classification",
                "Clustering",
                "Association rule learning",
                "Telepathic analysis"
              ]
            },
            {
              text: "What is the primary goal of predictive analytics?",
              options: [
                "To describe past events",
                "To forecast future outcomes",
                "To organize data",
                "To visualize data"
              ]
            },
            {
              text: "Which of these is an example of supervised learning?",
              options: [
                "Clustering",
                "Classification",
                "Association rules",
                "Dimensionality reduction"
              ]
            },
            {
              text: "What is overfitting in predictive modeling?",
              options: [
                "When a model performs well on training data but poorly on new data",
                "When a model is too simple to capture patterns",
                "When a model uses too few variables",
                "When a model processes data too quickly"
              ]
            },
            {
              text: "Which of these is NOT a common challenge in data analysis?",
              options: [
                "Data quality issues",
                "Data privacy concerns",
                "Too much computing power",
                "Interpreting complex results"
              ]
            },
            {
              text: "What is the purpose of cross-validation in predictive modeling?",
              options: [
                "To ensure data is properly formatted",
                "To assess how well a model will generalize to new data",
                "To visualize model results",
                "To clean the dataset"
              ]
            },
            {
              text: "Which of these tools is specifically designed for big data processing?",
              options: [
                "Excel",
                "Access",
                "Hadoop",
                "Word"
              ]
            }
          ]
        }
      }
    },
    {
      title: "Week 5;Data Visualization",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Principles of Data Visualization",
          duration: "35 mins",
          id: "da-5-1",
          content: {
            video: testVideo,
            description: "Understanding the fundamentals of effective data visualization",
            materials: ["Visualization Principles PDF", "Best Practices Guide"]
          }
        },
        {
          name: "Creating Charts and Graphs",
          duration: "40 mins",
          id: "da-5-2",
          content: {
            video: testVideo,
            description: "Learning to create effective charts and graphs",
            materials: ["Chart Types Guide", "Practice Exercises"]
          }
        },
        {
          name: "Introduction to Tableau",
          duration: "45 mins",
          id: "da-5-3",
          content: {
            video: testVideo,
            description: "Getting started with Tableau for data visualization",
            materials: ["Tableau Basics Guide", "Sample Dashboards"]
          }
        },
        {
          name: "Creating Interactive Dashboards",
          duration: "40 mins",
          id: "da-5-4",
          content: {
            video: testVideo,
            description: "Building interactive dashboards for data presentation",
            materials: ["Dashboard Design Guide", "Interactive Examples"]
          }
        }
      ],
      assessment: {
        name: "Week 5 Assessment",
        duration: "N/A",
        id: "da-5-assessment",
        isAssignment: true,
        content: {
          isAssignment: true,
          questions: [
            {
              text: "Which chart type is best for showing the composition of a whole?",
              options: [
                "Line chart",
                "Scatter plot",
                "Pie chart",
                "Bar chart"
              ]
            },
            {
              text: "What is the purpose of color in data visualization?",
              options: [
                "To make visualizations more attractive",
                "To highlight important information and create visual hierarchy",
                "To use as many colors as possible",
                "To match company branding"
              ]
            },
            {
              text: "Which of these is a principle of effective data visualization?",
              options: [
                "Using 3D effects whenever possible",
                "Adding decorative elements to charts",
                "Minimizing the data-to-ink ratio",
                "Using rainbow color scales"
              ]
            },
            {
              text: "What is a dashboard in data visualization?",
              options: [
                "A collection of visualizations that provide an overview of key metrics",
                "A single chart showing all available data",
                "A table of raw data",
                "A tool for data cleaning"
              ]
            },
            {
              text: "Which of these is NOT a feature of Tableau?",
              options: [
                "Drag-and-drop interface",
                "Interactive visualizations",
                "Built-in machine learning algorithms",
                "Data blending capabilities"
              ]
            },
            {
              text: "What is the purpose of tooltips in interactive visualizations?",
              options: [
                "To add decorative elements",
                "To provide additional information when hovering over data points",
                "To change the color scheme",
                "To export data"
              ]
            },
            {
              text: "Which chart type is best for showing trends over time?",
              options: [
                "Pie chart",
                "Bar chart",
                "Line chart",
                "Treemap"
              ]
            },
            {
              text: "What is the importance of choosing appropriate scales in visualizations?",
              options: [
                "It doesn't matter as long as the visualization looks good",
                "To ensure accurate representation of data relationships",
                "To use as much space as possible",
                "To make all charts the same size"
              ]
            }
          ]
        }
      }
    },
    {
      title: "Week 6;Big Data and Cloud Computing",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Introduction to Big Data",
          duration: "35 mins",
          id: "da-6-1",
          content: {
            video: testVideo,
            description: "Understanding big data concepts and challenges",
            materials: ["Big Data Concepts PDF", "Case Studies"]
          }
        },
        {
          name: "Hadoop Ecosystem",
          duration: "40 mins",
          id: "da-6-2",
          content: {
            video: testVideo,
            description: "Overview of Hadoop and its components",
            materials: ["Hadoop Guide", "Architecture Diagrams"]
          }
        },
        {
          name: "Cloud Computing for Data Analysis",
          duration: "35 mins",
          id: "da-6-3",
          content: {
            video: testVideo,
            description: "Using cloud platforms for data analysis",
            materials: ["Cloud Services Overview", "Setup Instructions"]
          }
        },
        {
          name: "Introduction to AWS and Azure",
          duration: "40 mins",
          id: "da-6-4",
          content: {
            video: testVideo,
            description: "Getting started with AWS and Azure for data analysis",
            materials: ["AWS/Azure Basics", "Practice Exercises"]
          }
        }
      ],
      assessment: {
        name: "Week 6 Assessment",
        duration: "N/A",
        id: "da-6-assessment",
        isAssignment: true,
        content: {
          isAssignment: true,
          questions: [
            {
              text: "What are the three Vs that characterize big data?",
              options: [
                "Visibility, Verification, Validation",
                "Volume, Variety, Velocity",
                "Value, Virtue, Vision",
                "Viability, Versatility, Vulnerability"
              ]
            },
            {
              text: "What is the primary function of Hadoop in big data processing?",
              options: [
                "Data visualization",
                "Distributed storage and processing of large datasets",
                "Creating machine learning models",
                "Database management"
              ]
            },
            {
              text: "Which of these is NOT a component of the Hadoop ecosystem?",
              options: [
                "HDFS",
                "MapReduce",
                "Hive",
                "Tableau"
              ]
            },
            {
              text: "What is a key advantage of cloud computing for data analysis?",
              options: [
                "It's always free",
                "Scalability and flexibility of resources",
                "No internet connection required",
                "Guaranteed data security"
              ]
            },
            {
              text: "Which AWS service is specifically designed for data warehousing?",
              options: [
                "EC2",
                "S3",
                "Redshift",
                "Lambda"
              ]
            },
            {
              text: "What is the purpose of Azure Machine Learning?",
              options: [
                "To store large datasets",
                "To create and deploy machine learning models",
                "To visualize data",
                "To manage databases"
              ]
            },
            {
              text: "What does HDFS stand for?",
              options: [
                "Hadoop Data File System",
                "Hadoop Distributed File System",
                "High-Density File Storage",
                "Hierarchical Data Filing System"
              ]
            },
            {
              text: "Which of these is a characteristic of serverless computing?",
              options: [
                "Requires manual server management",
                "Pay only for the compute time you consume",
                "Limited to small datasets",
                "Cannot be used for data analysis"
              ]
            }
          ]
        }
      }
    },
    {
      title: "Week 7;Data Ethics and Privacy",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Ethical Considerations in Data Analysis",
          duration: "35 mins",
          id: "da-7-1",
          content: {
            video: testVideo,
            description: "Understanding ethical issues in data collection and analysis",
            materials: ["Ethics Guide", "Case Studies"]
          }
        },
        {
          name: "Data Privacy Regulations",
          duration: "40 mins",
          id: "da-7-2",
          content: {
            video: testVideo,
            description: "Overview of GDPR, CCPA, and other privacy regulations",
            materials: ["Regulations Summary", "Compliance Checklist"]
          }
        },
        {
          name: "Bias and Fairness in Data Analysis",
          duration: "35 mins",
          id: "da-7-3",
          content: {
            video: testVideo,
            description: "Identifying and addressing bias in data and algorithms",
            materials: ["Bias Detection Guide", "Fairness Metrics"]
          }
        },
        {
          name: "Responsible Data Handling",
          duration: "30 mins",
          id: "da-7-4",
          content: {
            video: testVideo,
            description: "Best practices for responsible data collection and usage",
            materials: ["Data Handling Guidelines", "Security Practices"]
          }
        }
      ],
      assessment: {
        name: "Week 7 Assessment",
        duration: "N/A",
        id: "da-7-assessment",
        isAssignment: true,
        content: {
          isAssignment: true,
          questions: [
            {
              text: "What is data ethics?",
              options: [
                "The study of data structures",
                "The moral principles governing data collection and use",
                "The legal framework for data storage",
                "The technical aspects of data security"
              ]
            },
            {
              text: "Which regulation gives EU citizens the 'right to be forgotten'?",
              options: [
                "HIPAA",
                "GDPR",
                "CCPA",
                "FERPA"
              ]
            },
            {
              text: "What is algorithmic bias?",
              options: [
                "A programming error in algorithms",
                "The tendency of algorithms to favor certain outcomes",
                "The computational efficiency of an algorithm",
                "The cost of running an algorithm"
              ]
            },
            {
              text: "Which of these is NOT a principle of responsible data handling?",
              options: [
                "Data minimization",
                "Informed consent",
                "Collecting as much data as possible",
                "Purpose limitation"
              ]
            },
            {
              text: "What is the purpose of data anonymization?",
              options: [
                "To make data more accurate",
                "To protect individual privacy by removing identifying information",
                "To reduce the size of datasets",
                "To improve algorithm performance"
              ]
            },
            {
              text: "Which of these is an example of selection bias?",
              options: [
                "Using only data from voluntary survey respondents",
                "Rounding numbers in a dataset",
                "Storing data in multiple locations",
                "Using cloud computing for data analysis"
              ]
            },
            {
              text: "What is data sovereignty?",
              options: [
                "The concept that data is subject to the laws of the country where it is collected",
                "The ownership rights of data collectors",
                "The technical security of data centers",
                "The process of data backup"
              ]
            },
            {
              text: "Which of these is a key principle of privacy by design?",
              options: [
                "Collecting maximum data for future use",
                "Sharing data widely to improve analysis",
                "Building privacy protections into systems from the start",
                "Addressing privacy concerns only when problems arise"
              ]
            }
          ]
        }
      }
    },
    {
      title: "Week 8;Capstone Project",
      hours: "0/8  (2hrs)",
      topics: [
        {
          name: "Project Planning and Requirements",
          duration: "35 mins",
          id: "da-8-1",
          content: {
            video: testVideo,
            description: "Defining project scope and requirements",
            materials: ["Project Planning Template", "Requirements Checklist"]
          }
        },
        {
          name: "Data Collection and Preparation",
          duration: "40 mins",
          id: "da-8-2",
          content: {
            video: testVideo,
            description: "Gathering and preparing data for analysis",
            materials: ["Data Sources Guide", "Preparation Techniques"]
          }
        },
        {
          name: "Analysis and Visualization",
          duration: "45 mins",
          id: "da-8-3",
          content: {
            video: testVideo,
            description: "Conducting analysis and creating visualizations",
            materials: ["Analysis Methods", "Visualization Best Practices"]
          }
        },
        {
          name: "Presentation and Documentation",
          duration: "40 mins",
          id: "da-8-4",
          content: {
            video: testVideo,
            description: "Presenting findings and documenting the project",
            materials: ["Presentation Template", "Documentation Guide"]
          }
        }
      ],
      assessment: {
        name: "Week 8 Assessment",
        duration: "N/A",
        id: "da-8-assessment",
        isAssignment: true,
        content: {
          isAssignment: true,
          questions: [
            {
              text: "What is the first step in planning a data analysis project?",
              options: [
                "Creating visualizations",
                "Defining the problem and objectives",
                "Collecting data",
                "Presenting results"
              ]
            },
            {
              text: "Which of these is NOT typically included in a data analysis project plan?",
              options: [
                "Timeline and milestones",
                "Data sources and collection methods",
                "Personal hobbies and interests",
                "Analysis techniques to be used"
              ]
            },
            {
              text: "What is the purpose of exploratory data analysis (EDA)?",
              options: [
                "To create final presentations",
                "To understand patterns and relationships in the data",
                "To collect more data",
                "To implement machine learning models"
              ]
            },
            {
              text: "Which of these is a best practice for data documentation?",
              options: [
                "Keeping documentation minimal to save time",
                "Documenting data sources, transformations, and analysis methods",
                "Using technical jargon whenever possible",
                "Avoiding version control"
              ]
            },
            {
              text: "What should be included in a data analysis presentation?",
              options: [
                "All raw data used in the analysis",
                "Every detail of the analysis process",
                "Key findings, insights, and actionable recommendations",
                "Technical code snippets"
              ]
            },
            {
              text: "Which of these is an important consideration when selecting data visualization types?",
              options: [
                "Using as many different chart types as possible",
                "Always using 3D visualizations",
                "Matching the visualization to the type of data and message",
                "Using only the most complex visualizations"
              ]
            },
            {
              text: "What is the purpose of a project retrospective?",
              options: [
                "To assign blame for project failures",
                "To identify lessons learned and areas for improvement",
                "To start planning the next project immediately",
                "To create additional documentation"
              ]
            },
            {
              text: "Which of these is a characteristic of effective data storytelling?",
              options: [
                "Including as much data as possible",
                "Using technical terminology throughout",
                "Creating a narrative that connects data to business impact",
                "Avoiding visual elements"
              ]
            }
          ]
        }
      }
    }
  ]
}; 