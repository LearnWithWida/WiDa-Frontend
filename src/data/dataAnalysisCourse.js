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
        },
        {
          name: "Week 1 Assessment",
          duration: "30 mins",
          id: "da-1-assessment",
          isAssessment: true,
          content: {
            description: "Test your knowledge of data analysis fundamentals",
            quiz: {
              questions: [
                // Add assessment questions here
              ]
            }
          }
        }
      ]
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
        },
        {
          name: "Week 2 Assessment",
          duration: "30 mins",
          id: "da-2-assessment",
          isAssessment: true,
          content: {
            description: "Test your knowledge of data analysis tools",
            quiz: {
              questions: [
                // Add assessment questions here
              ]
            }
          }
        }
      ]
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
        },
        {
          name: "Week 3 Assessment",
          duration: "30 mins",
          id: "da-3-assessment",
          isAssessment: true,
          content: {
            description: "Test your knowledge of statistical analysis",
            quiz: {
              questions: [
                // Add assessment questions here
              ]
            }
          }
        }
      ]
    },
    {
      title: "Week 4;Advanced Topics",
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
          name: "Final Project",
          duration: "45 mins",
          id: "da-4-3",
          content: {
            video: testVideo,
            description: "Comprehensive data analysis project",
            materials: ["Project Guidelines", "Sample Projects"]
          }
        },
        {
          name: "Course Wrap-up",
          duration: "30 mins",
          id: "da-4-4",
          content: {
            video: testVideo,
            description: "Course summary and next steps",
            materials: ["Summary PDF", "Resources List"]
          }
        },
        {
          name: "Final Assessment",
          duration: "45 mins",
          id: "da-4-assessment",
          isAssessment: true,
          content: {
            description: "Final comprehensive assessment",
            quiz: {
              questions: [
                // Add assessment questions here
              ]
            }
          }
        }
      ]
    }
  ]
}; 